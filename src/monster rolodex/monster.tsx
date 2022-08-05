import './monster.css';
import { Component } from 'react';
import CardList from '../components/card-list/card-list.component';
import Search from '../components/search/search.component';

interface Props {
}

interface Monster {
    id?: string;
    name?: string;
}

interface State {
    search: string;
    monsters: Array<Monster>;
}

class Monster extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            search: '',
            monsters: [],
        }
    };

    // Life Cycle of Component - what runs first
    // 1. Constructor - set initial state 
    // 2. Render - build UI
    // 3. Component Did Mount - get data 
    // 4. When this.state updates render runs again - update UI

    componentDidMount(): void {
        const getMonsters = () =>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((res)=> res.json())
            .then((users)=> this.setState(
                    ()=> {return {monsters: users}}, 
                    ()=> {console.log("getMonster:",this.state)}
                ))
        }
        getMonsters();
    }

    onSearchChange = (e:any): void => {
        let searchValue = e.target.value.toLowerCase();
        this.setState({search: searchValue});
    }

    render() {
        const {search, monsters} = this.state;
        const {onSearchChange} = this;

        const matchingMonsters = monsters.filter(monster => {
            let name = monster.name!.toLowerCase();
            if(name.includes(search as string)) {
                return true;
            }
        });

        return (
            <div className="page">
                <h1 className='page-title'> Monsters Rolodex</h1>
                <Search className={'search-box'} change={onSearchChange} search={search}  placeholder={'Search Monsters'}/>
                <CardList monsters={matchingMonsters} />
            </div>
        );
    };
}

export default Monster;