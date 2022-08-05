import { Component } from "react";
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

interface State {
}

class CardList extends Component<Props, State> {
  constructor(props: Props){
    super(props);
  }

  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {
          monsters.map((monster)=>{
            const { id , name, email } = monster;
            return <Card key={id} name={name} email={email}/>
          })  
        }
      </div>
    )
  }
}

export default CardList;