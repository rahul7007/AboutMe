import React, { Component } from 'react';
import './contact.css'
import temp from './img/upderConstruction.png';


class Contact extends Component {
    render() { 
        return ( 
            <div className="contact-main-div">
                <img 
                    src={temp}
                    className = "contact-construction"
                />   
            </div>
        )
    }
}
 
export default Contact;