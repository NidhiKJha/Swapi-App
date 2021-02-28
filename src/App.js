import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login/Login';
import PlanetList from './components/PlanetList/PlanetList';
import Error from "./error";

function App() {
  return (
    <Router>
      <div className="App">
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/login' component={Login} />
      <Route path='/planets' component={PlanetList} />
      <Route component={Error} />
    </Switch>
    </div> 
  </Router>
  );
}

export default App;
