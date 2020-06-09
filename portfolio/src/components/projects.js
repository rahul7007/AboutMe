import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './projects.css'


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
            <Grid className="demo-grid-1">
                <Cell col={4} style={{border:'1px solid'}}>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="img_avatar.png" alt="Avatar" style={{width:'30px',height:'30px'}} />
                        </div>
                        <div class="flip-card-back">
                            <h1>John Doe</h1> 
                            <p>Architect & Engineer</p> 
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                </Cell>
                <Cell col={4} style={{border:'1px solid'}}>4
                </Cell>
                <Cell col={4} style={{border:'1px solid'}}>4
                </Cell>
            </Grid>
            <Grid className="demo-grid-1">
                <Cell col={4} style={{border:'1px solid'}}>41
                </Cell>
                <Cell col={4} style={{border:'1px solid'}}>42
                </Cell>
                <Cell col={4} style={{border:'1px solid'}}>43
                </Cell>
            </Grid>
            </div>
            </React.Fragment> 
        )
    }
}
 
export default Projects;