import React, { Component } from 'react';
import './main.css'
import avatar from './img/myavatar.png';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class AboutMe extends Component {
    render() { 
        return ( 
            <div style={{ width:'100%', margin:'auto' }}>
            <Grid className="">
                <Cell col={1}>
                    {/* top left */}
                </Cell>
                <Cell col={3}>
                    <div className="about-me-left-div">

                        <img
                            //src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man3-512.png"
                            src={avatar}
                            alt="avatar"
                            className="about-me-avatar"
                        />
                        <br />
                        <Grid>
                            <cell col={12} className="about-me-cell">
                                C O N T A C T
                                <List>
                                    <ListItem style={{marginTop:'-30px'}}>
                                        <ListItemContent>
                                            <i style={{ fontSize:'17px',marginRight:'10px', color:'#999584'}} class="fa fa-map-marker" aria-hidden="true" />
                                            <div className="about-me-details">&nbsp;Guwahati, Assam</div>
                                        </ListItemContent>
                                    </ListItem >
                                    <ListItem style={{marginTop:'-25px'}}>
                                        <ListItemContent>
                                            <i style={{ fontSize:'17px', marginRight:'10px', color:'#999584'}} class="fa fa-phone" aria-hidden="true" />
                                            <div className="about-me-details">+91-9085895248</div>
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem style={{marginTop:'-25px'}}>
                                        <ListItemContent>
                                            <i style={{ fontSize:'12px', marginRight:'10px', color:'#999584'}} class="fa fa-envelope" aria-hidden="true" />
                                            <div className="about-me-details">rahul7007@gmail.com</div>
                                        </ListItemContent>
                                    </ListItem>
                                </List>
                            </cell>

                        </Grid>
                        <Grid>
                            <cell col={12} className="about-me-cell" style={{ marginTop:'-30px'}}>
                                L A N G U A G E S
                                <List>
                                    <ListItem style={{marginTop:'-25px'}}>
                                        <ListItemContent>
                                        <div className="about-me-details" style={{float:'left'}}>&nbsp;English</div>
                                        &nbsp;&nbsp;&nbsp;
                                            <i style={{ fontSize:'8px', marginLeft:'10px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem style={{marginTop:'-25px'}}>
                                        <ListItemContent>
                                        <div className="about-me-details" style={{float:'left'}}>&nbsp;Hindi</div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <i style={{ fontSize:'8px', marginLeft:'10px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem style={{marginTop:'-25px'}}>
                                        <ListItemContent>
                                        <div className="about-me-details" style={{float:'left'}}>&nbsp;Assamese</div>
                                            <i style={{ fontSize:'8px', marginLeft:'10px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                        </ListItemContent>
                                    </ListItem>
                                </List>
                                </cell>
                            </Grid>
                        <Grid>
                        <cell col={12} className="about-me-cell" style={{ marginTop:'-30px'}}>
                                S K I L L S
                                <List>
                                    <ListItem style={{marginTop:'-25px'}}>
                                        <ListItemContent>
                                            {/* <i style={{ fontSize:'20px', marginRight:'20px' }} class="fa fa-bullseye" aria-hidden="true"></i> */}
                                            <i style={{ fontSize:'14px',marginRight:'10px', color:'#999584'}} class="fa fa-circle" aria-hidden="true" />
                                            <div className="about-me-details">Python</div>
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem style={{marginTop:'-25px'}}>
                                        <ListItemContent>
                                        <i style={{ fontSize:'14px',marginRight:'10px', color:'#999584'}} class="fa fa-circle" aria-hidden="true" />
                                            <div className="about-me-details" style={{textAlign:"right"}}>React</div>
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem style={{marginTop:'-25px'}}>
                                        <ListItemContent>
                                        <i style={{ fontSize:'14px',marginRight:'10px', color:'#999584'}} class="fa fa-circle" aria-hidden="true" />
                                        <div className="about-me-details">C/C++</div>
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem style={{marginTop:'-25px'}}>
                                        <ListItemContent>
                                        <i style={{ fontSize:'14px',marginRight:'10px', color:'#999584'}} class="fa fa-circle" aria-hidden="true" />
                                        <div className="about-me-details">Java</div>
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem style={{marginTop:'-25px'}}>
                                        <ListItemContent>
                                        <i style={{ fontSize:'14px',marginRight:'10px', color:'#999584'}} class="fa fa-circle" aria-hidden="true" />
                                        <div className="about-me-details">PHP</div>
                                        </ListItemContent>
                                    </ListItem>
                                </List>
                            </cell>
                        </Grid>

                        <Grid>
                            <cell col={12} className="about-me-cell" style={{ marginTop:'-30px'}}>
                               H O B B Y
                               <br /> <br />
                               <div style={{float:'left', fontSize:'15px', marginLeft:'3px', marginRight:'3px', color:'#999584'}}>
                                <div className="about-me-details">Music</div>
                                <br/><br/>
                                   <i style={{fontSize:'17px'}} class="fa fa-music" aria-hidden="true" />
                                </div>
                               
                               <div style={{float:'left', fontSize:'15px', marginLeft:'3px', marginRight:'3px', color:'#999584'}}>
                                <div className="about-me-details">Cricket</div>
                                   <br/><br/>
                                   <i style={{fontSize:'17px'}} class="fa fa-gamepad" aria-hidden="true" />
                                </div>
                               
                               <div style={{float:'left', fontSize:'15px', marginLeft:'3px', marginRight:'3px', color:'#999584'}}>
                                <div className="about-me-details">Photography</div>
                                   <br/><br/>
                                   <i style={{fontSize:'17px'}} class="fa fa-camera-retro" aria-hidden="true" />
                                </div>
                
                               <div style={{float:'left', fontSize:'15px', marginLeft:'3px', marginRight:'3px', color:'#999584'}}>
                                <div className="about-me-details">Travel</div>
                                   <br/><br/>
                                   <i style={{fontSize:'17px'}} class="fa fa-plane" aria-hidden="true" />
                                </div>
                            </cell>
                        </Grid>
                    </div>
                    
                </Cell>
                <Cell col={1}>
                    {/* middle */}
                </Cell>
                <Cell col={6}>
                    <div style={{marginBottom:'-20px'}}>
                        <h3 style={{fontFamily:'Aldrich', fontWeight:'bold', paddingBottom:'-10px', color:'#ffffb3'}}>
                            RAHUL SARMA
                        </h3>
                    </div>
                    <div >
                        <h6 style={{paddingTop:'1px', fontFamily:'Aldrich', fontWeight:'bold',color:'#ffffb3'}}>
                            SOFTWARE DEVELOPER
                        </h6>
                    </div>
                    <div className="aboutme-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                    </div>
                    <div className="aboutme-heading">
                        <p>
                            E D U C A T I O N
                        </p>
                    </div>
                    <div className="aboutme-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                    </div>
                    <div className="aboutme-heading">
                        <p>
                            WORK EXPERIENCE
                        </p>
                    </div>
                    <div className="aboutme-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                    </div>
                    <div className="aboutme-heading">
                        <p>
                            Awards
                        </p>
                    </div>
                    <div className="aboutme-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                    </div> 
                </Cell>
            </Grid> 
            </div>
        )
    }
}
 
export default AboutMe;