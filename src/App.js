import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import PokePage from './PokePage';
import PokeDetail from './PokeDetail';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Link className='home-button' to="/">Home</Link>
        <Switch>
          <Route exact path="/">
            <PokePage />
          </Route>
          <Route exact path="/pokemon/:id">
            <PokeDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}