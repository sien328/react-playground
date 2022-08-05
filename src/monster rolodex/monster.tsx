import './monster.css';
import { useState ,useEffect } from 'react';
import CardList from '../components/card-list/card-list.component';
import Search from '../components/search/search.component';

const Monster = () => {
    const [search, setSearch] = useState<string>('');
    const [monsters, setMonsters] = useState<any[]>([]);
    const [matchingMonsters, setMatchingMonsters] = useState(monsters);
    
    // Life Cycle of Component - what runs first
    // 1. Constructor - set initial state 
    // 2. Render - build UI
    // 3. Component Did Mount - get data 
    // 4. When this.state updates render runs again - update UI

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=> res.json())
        .then((users)=> setMonsters(users)
        )
    }, []);

    useEffect(() => {
        const newMatchingMonsters = monsters.filter(monster => 
            monster.name.toLowerCase().includes(search as string)
        );
        
        setMatchingMonsters(newMatchingMonsters);
    }, [monsters, search]);

   const onSearchChange = (e:any): void => {
        let searchValue = e.target.value.toLowerCase();
        setSearch(searchValue);
    }

    return (
        <div className="page">
            <h1 className='page-title'> Monsters Rolodex</h1>
            <Search className={'search-box'} change={onSearchChange} search={search}  placeholder={'Search Monsters'}/>
            <CardList monsters={matchingMonsters} />
        </div>
    );
}

export default Monster;