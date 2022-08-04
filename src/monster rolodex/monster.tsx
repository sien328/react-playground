import './monster.css';
import { Component } from 'react';

interface IProps {
}

interface IMonster {
    id?: String;
    name?: String;
}

interface IState {
    search: String;
    originalMonsters: Array<IMonster>
    monsters: Array<IMonster>;
}

class Monster extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            search: '',
            originalMonsters: [],
            monsters: [],
        }
    };

    // Life Cycle of Component - what runs first
    // 1. Constructor
    // 2. Render
    // 3. Component Did Mount
    // 4. When this.state updates render runs again - update UI

    componentDidMount(): void {
        let getMonsters = () =>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((res)=> res.json())
            .then((users)=> this.setState(
                    ()=> {return {originalMonsters: users, monsters: users}}, 
                    ()=> {console.log("getMonster:",this.state)}
                ))
        }
        getMonsters();
    }

    searchChange = (e:any): void => {
        let searchValue = e.target.value.toLowerCase();
        const matching = this.state.originalMonsters.filter(monster => {
            let name = monster.name!.toLowerCase();
            if(name.includes(searchValue)) {
                return true;
            }
        });
   
        this.setState({search: searchValue, monsters: matching});
    }

    render() {
        return (
            <div className="page">
                <input className='search-box' 
                    type='search' 
                    value={this.state.search as string } 
                    placeholder='Search Monsters'
                    onChange={this.searchChange}
                    />
                { 
                    this.state.monsters.map((monster)=>{
                        return <h1 className="monster" key={monster.id as string} >{monster.name}</h1>
                    })  
                }  
            </div>
        );
    };
}

export default Monster;