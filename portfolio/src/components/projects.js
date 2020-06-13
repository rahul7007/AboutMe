import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './projects.css'
import iotLogo from './img/iot.png';
import mern2Logo from './img/mern2.png';
import pythonLogo from './img/pythonLogo.png';


class Projects extends Component {
    render() { 
        return (
            <React.Fragment>
            {/* <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="img_avatar.png" alt="Avatar" style={{width:'300px',height:'300px'}} />
                    </div>
                    <div class="flip-card-back">
                        <h1>John Doe</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
            <div class="flip-card" style={{float:'left'}}>
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="img_avatar.png" alt="Avatar" style={{width:'300px',height:'300px'}} />
                    </div>
                    <div class="flip-card-back">
                        <h1>John Doe</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
            <div class="flip-card" style={{float:'left'}}>
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="img_avatar.png" alt="Avatar" style={{width:'300px',height:'300px'}} />
                    </div>
                    <div class="flip-card-back">
                        <h1>John Doe</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
            <div class="flip-card" style={{float:'left'}}>
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="img_avatar.png" alt="Avatar" style={{width:'300px',height:'300px'}} />
                    </div>
                    <div class="flip-card-back">
                        <h1>John Doe</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
                    </div>
                </div>
            </div> */}
            <div>
            <Grid className="demo-grid-1" style={{border:'0px dotted yellow', marginTop:'80px'}}>
                <Cell col={4}>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src={iotLogo}
                                alt="avatar"
                                className="project-icon"
                            />
                            <br /><br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer
                        </div>
                        <div class="flip-card-back">
                            <h1 className="project-name">Home automation</h1> 
                            <p>iot</p> 
                            <p>C</p>
                        </div>
                    </div>
                </div>
                </Cell>
                <Cell col={4}>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src={mern2Logo}
                                alt="avatar"
                                className="project-icon"
                            />
                            <br /><br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer
                        </div>
                        <div class="flip-card-back">
                            <h1 className="project-name">Portfolio</h1> 
                            <p>react</p> 
                            <p>NodeJS</p>
                        </div>
                    </div>
                </div>
                </Cell>
                <Cell col={4}>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src={pythonLogo}
                                alt="avatar"
                                className="project-icon"
                            />
                            <br /><br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer
                        </div>
                        <div class="flip-card-back">
                            <h1 className="project-name">Upcomming Projects</h1> 
                            <p>python</p> 
                            <p>django</p>
                        </div>
                    </div>
                </div>
                </Cell>
            </Grid>
            <Grid className="demo-grid-1">
                <Cell col={4} style={{border:'0px solid'}}>
                </Cell>
                <Cell col={4} style={{border:'0px solid'}}>
                </Cell>
                <Cell col={4} style={{border:'0px solid'}}>
                </Cell>
            </Grid>
            <Grid className="demo-grid-1">
                <Cell col={4} style={{border:'0px solid'}}>
                </Cell>
                <Cell col={4} style={{border:'0px solid'}}>
                </Cell>
                <Cell col={4} style={{border:'0px solid'}}>
                </Cell>
            </Grid>
            <Grid className="demo-grid-1">
                <Cell col={4} style={{border:'0px solid'}}>
                </Cell>
                <Cell col={4} style={{border:'0px solid'}}>
                </Cell>
                <Cell col={4} style={{border:'0px solid'}}>
                </Cell>
            </Grid>
            <Grid className="demo-grid-1">
                <Cell col={4} style={{border:'0px solid'}}>
                </Cell>
                <Cell col={4} style={{border:'0px solid'}}>
                </Cell>
                <Cell col={4} style={{border:'0px solid'}}>
                </Cell>
            </Grid>
            </div>
            </React.Fragment> 
        )
    }
}
 
export default Projects;