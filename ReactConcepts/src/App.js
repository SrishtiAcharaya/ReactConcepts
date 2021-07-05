import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Book from './components/Book';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/book" component={Book} />
          <Route component={NotFound} />
          </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>This is the Home Page</h1>
    </div>
  );
}

export default App;
