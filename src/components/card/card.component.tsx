import { Component } from "react";
import './card.styles.css';

interface Props {
  name?: string;
  email?: string;
}

interface State {
}

class Card extends Component<Props, State> {
  constructor(props: Props){
    super(props);
  }

  render() {
    const { name, email } = this.props;
    return (
      <div className='card-container'>
        <img src={`https://robohash.org/${name}?set=set2&size=180x180`} alt={`monter ${name}`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}

export default Card;