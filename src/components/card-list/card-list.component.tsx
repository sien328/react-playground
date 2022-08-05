import './card-list.styles.css'
import Card from '../card/card.component';

interface Monster {
  id?: string;
  name?: string;
  email?: string;
}

interface Props {
  monsters: Array<Monster>;
}

const CardList = (props: Props) => {
  const { monsters } = props;

  return (
    <div className="card-list">
      {
        monsters.map((monster)=>{
          const { id , name, email } = monster;
          return <Card key={id} name={name} email={email}/>
        })
      }
    </div>
);
}

export default CardList;