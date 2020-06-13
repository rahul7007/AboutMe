import React, { Component } from 'react';
import './resume.css'
import temp from './img/upderConstruction.png';


class Resume extends Component {
    render() { 
        return ( 
            <div className="main-div">
                {/* <h1>Resume</h1>     */}
                <img 
                    src={temp}
                    className = "construction"
                />
            </div>
        )
    }
}
 
export default Resume;
