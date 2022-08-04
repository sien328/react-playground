import './monster.css';
import { Component } from 'react';

interface IProps {
}

interface IMonster {
    id?: string;
    name?: string;
}

interface IState {
    search: string;
    monsters: Array<IMonster>;
}

class Monster extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            search: '',
            monsters: [],
        }
    };

    // Life Cycle of Component - what runs first
    // 1. Constructor
    // 2. Render
    // 3. Component Did Mount
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
                <input className='search-box' 
                    type='search' 
                    value={search as string } 
                    placeholder='Search Monsters'
                    onChange={onSearchChange}
                    />
                { 
                    matchingMonsters.map((monster)=>{
                        return <h1 className="monster" key={monster.id as string} >{monster.name}</h1>
                    })  
                }  
            </div>
        );
    };
}

export default Monster;