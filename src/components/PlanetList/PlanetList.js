import { Component } from 'react';
import { Link } from 'react-router-dom';
import './PlanetList.css';
import SearchBar from '../SearchBar/SearchBar';
import PlanetData from '../PlanetData/PlanetData';

class PlanetList extends Component {
  state = {
    planetList: [],
    filteredPlanetList: [],
    isLoaded: false
  };

  renderFilteredList = (filteredPlanetList) => {
    this.setState({
      planetList: filteredPlanetList
    })
  }

  logOutUser = () => {
    localStorage.removeItem('isUserAuthenticated');
    this.props.history.push('/login');
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading</div>;
    }
    else {
      var planetItems = this.state.planetList.map(planet => {
        return(
            <PlanetData
              planetName={planet}
              key={planet.url}
            />
         );
      });
      return (
        <div className="container">
        <nav className="navbar">
          <div className="navbar-header-container">
            <div className="navbar-header">
              <p>Logged in</p>
            </div>
            <div className="navbar-header">
              <button><Link onClick={this.logOutUser} to="#">Logout</Link></button>
            </div>
          </div>
        </nav>
          <div className="heading-container">
              <h1>Planet Listing Page</h1>
          </div>
          <SearchBar renderFilteredList={this.renderFilteredList} planetList={this.state.filteredPlanetList}></SearchBar>
          <div className="planets-list-container">
          <h2>Planets</h2>
            <ul className="list-group">
              {planetItems}
            </ul>
          </div>
        </div>
      )
    }
  }

  componentDidMount() {
    this.getData('https://swapi.dev/api/planets/?format=json').then((res)=> {
    this.setState({
        planetList: res.results,
        filteredPlanetList: res.results,
        isLoaded: true
      });
    });
  }

  getData = (url) => {
    return fetch(url).then((response) => response.json());
  }
}

export default PlanetList;