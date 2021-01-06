import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
// import ItemList from '../item-list';
// import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';

import './app.css';

class App extends Component {
  
  
  swapiService = new SwapiService();

  state={
    showRandomPlanet: true,
    hasError: false
  }

  componentDidCatch() {
    this.setState({hasError: true});
  }

  

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    const planet = this.state.showRandomPlanet ?
    <RandomPlanet/>: 
    null;

    return (
      <div>
        <Header />
        {planet}
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
 
};

export default App;