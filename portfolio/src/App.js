import React from 'react';
import './App.css';
import { Grid, Cell, Content } from 'react-mdl';
// import Home from './components/home';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
      <div className="nav">
        <Grid className="demo-grid-ruler">
          <Cell col={3} className="grid-nav-left">
          <Link to="/">My Portfolio</Link>
          </Cell>
          <Cell col={9} className="grid-nav-right">
            {/* <Link to="/" className="menu-distance">Home</Link> */}
            <Link to="/resume" className="menu-distance">Resume</Link>
            <Link to="/projects" className="menu-distance">Projects</Link>
            <Link to="/aboutme" className="menu-distance">About Me</Link>
            <Link to="/contact" className="menu-distance">Contact</Link>
          </Cell>
        </Grid>
        <Main />
        {/* <Home /> */}
    </div>
  );
}

export default App;
