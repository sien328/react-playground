import './card.styles.css';

interface Props {
  name?: string;
  email?: string;
}

const Card = (props: Props) => {
  const { name, email } = props;
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${name}?set=set2&size=180x180`} alt={`monter ${name}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;