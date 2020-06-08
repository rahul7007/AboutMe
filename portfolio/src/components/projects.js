import React, { Component } from 'react';
import './projects.css'


class Projects extends Component {
    render() { 
        return (
            <React.Fragment>
            <div class="flip-card">
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
            </React.Fragment> 
        )
    }
}
 
export default Projects;