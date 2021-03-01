import { Component } from 'react';
import './PlanetData.css';

class PlanetData extends Component {

  render() {
		return(
			<li className="list-item-group">
				<div className="planet-name-container">
					<div className="planet-name">
						{this.props.planetName.name}
					</div>
					<br/>
					<div className="planet-population-container">
						<div className="planet-population">
							Population:{this.props.planetName.population}
						</div>
					</div>
				</div>
			</li>
		);
	}
}

export default PlanetData;