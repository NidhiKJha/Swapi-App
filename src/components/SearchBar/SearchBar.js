import { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {
      term : ''
    };
  }
  
  onSearchTermChange = (term) => {
    this.setState({term});
    this.onSearchChange(term);
  }

  onSearchChange = (term) => {
    var planetList = this.props.planetList.slice(0);
    this.filteredPlanetList = planetList.filter( (item) => {
      return (!term || item.name.indexOf(term) > -1) 
    });
    this.props.renderFilteredList(this.filteredPlanetList);
  }
  
	render() {
	    return (
	    <div className="search-bar">
	      <input placeholder="Search planet" className="form-control" value={this.state.term} onChange={event => this.onSearchTermChange(event.target.value)} />
	     </div>
	    );
    }
}

export default SearchBar;
