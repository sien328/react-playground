import { ChangeEvent, Component } from "react";
import './search.styles.css';

interface Props {
  className?: string;
  search?: string;
  placeholder?: string;
  change: (e:any) => void;
}

interface State {
}

class Search extends Component<Props, State> {
  constructor(props: Props){
    super(props);
  }

  render() {
    const { 
      className,
      search, 
      placeholder, 
      change, 
    } = this.props;

    return (
      <div>
       <input className={className}
          type='search' 
          value={search as string } 
          placeholder={placeholder}
          onChange={change}
          />
      </div>
    )
  }
}

export default Search;