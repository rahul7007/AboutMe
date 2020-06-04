import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Resume from './resume';
import Projects from './projects';
import AboutMe from './aboutme';
import Contact from './contact';

const Main = () =>(
    <Switch>
        <Route exact path="/" component = {Home}/>
        <Route path="/resume" component = {Resume} />
        <Route path="/projects" component = {Projects} />
        <Route path="/aboutme" component = {AboutMe} />
        <Route path="/contact" component = {Contact} />
    </Switch>
)
 
export default Main;