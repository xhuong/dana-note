import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Shop from './Shop';
import Home from './Home';


function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Router>
          <Switch>
            <Route path="/landing-page">
              <LandingPage />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
