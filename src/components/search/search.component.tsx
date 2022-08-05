import './search.styles.css';

interface Props {
  className?: string;
  search?: string;
  placeholder?: string;
  change: (e:any) => void;
}

const Search = (props: Props) => {
  const {className, search, placeholder, change} = props;

  return (
    <div>
      <input className={className}
        type='search' 
        value={search as string } 
        placeholder={placeholder}
        onChange={change}
        />
    </div>
  );
}

export default Search;