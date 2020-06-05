import React, { Component } from 'react';
import './main.css'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class AboutMe extends Component {
    render() { 
        return ( 
            <div style={{ width:'100%', margin:'auto' }}>
            <Grid className="">
                <Cell col={1} style={{border:'1px solid red'}}>
                    top left
                </Cell>
                <Cell col={3}>
                    <div className="about-me-left-div">

                        <img style={{marginTop:'-5px'}}
                            src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man3-512.png"
                            alt="avatar"
                            className="avatar"
                        />
                        <br />
                        <Grid>
                            <cell col={12} className="about-me-cell">
                                C O N T A C T
                                <List>
                                    <ListItem style={{marginTop:'-30px'}}>
                                        <ListItemContent>
                                            <i style={{ fontSize:'17px',marginRight:'10px'}} class="fa fa-map-marker" aria-hidden="true" />
                                            <div className="about-me-details">&nbsp;Guwahati, Assam</div>
                                        </ListItemContent>
                                    </ListItem >
                                    <ListItem style={{marginTop:'-25px'}}>
                                        <ListItemContent>
                                            <i style={{ fontSize:'17px', marginRight:'10px' }} class="fa fa-phone" aria-hidden="true" />
                                            <div className="about-me-details">+91-9085895248</div>
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem style={{marginTop:'-25px'}}>
                                        <ListItemContent>
                                            <i style={{ fontSize:'12px', marginRight:'10px' }} class="fa fa-envelope" aria-hidden="true" />
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
                                            <i style={{ fontSize:'8px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px' }} class="fa fa-star-o" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px' }} class="fa fa-star-o" aria-hidden="true" />
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem style={{marginTop:'-25px'}}>
                                        <ListItemContent>
                                        <div className="about-me-details" style={{float:'left'}}>&nbsp;Hindi</div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <i style={{ fontSize:'8px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px' }} class="fa fa-star-o" aria-hidden="true" />
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem style={{marginTop:'-25px'}}>
                                        <ListItemContent>
                                        <div className="about-me-details" style={{float:'left'}}>&nbsp;Assamese</div>
                                        <i style={{ fontSize:'8px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'8px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
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
                                            <i style={{ fontSize:'14px',marginRight:'10px'}} class="fa fa-bullseye" aria-hidden="true" />
                                            <div className="about-me-details">Python</div>
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem style={{marginTop:'-25px'}}>
                                        <ListItemContent>
                                        <i style={{ fontSize:'14px',marginRight:'10px'}} class="fa fa-bullseye" aria-hidden="true" />
                                            <div className="about-me-details">React</div>
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem style={{marginTop:'-25px'}}>
                                        <ListItemContent>
                                        <i style={{ fontSize:'14px',marginRight:'10px'}} class="fa fa-bullseye" aria-hidden="true" />
                                        <div className="about-me-details">C/C++</div>
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem style={{marginTop:'-25px'}}>
                                        <ListItemContent>
                                        <i style={{ fontSize:'14px',marginRight:'10px'}} class="fa fa-bullseye" aria-hidden="true" />
                                        <div className="about-me-details">Java</div>
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem style={{marginTop:'-25px'}}>
                                        <ListItemContent>
                                        <i style={{ fontSize:'14px',marginRight:'10px'}} class="fa fa-bullseye" aria-hidden="true" />
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
                               <div style={{float:'left', fontSize:'15px', marginLeft:'3px', marginRight:'3px'}}>
                                <div className="about-me-details">Music</div>
                                <br/>
                                   <i style={{fontSize:'17px'}} class="fa fa-music" aria-hidden="true" />
                                </div>
                               
                               <div style={{float:'left', fontSize:'15px', marginLeft:'3px', marginRight:'3px'}}>
                                <div className="about-me-details">Cricket</div>
                                   <br/>
                                   <i style={{fontSize:'17px'}} class="fa fa-gamepad" aria-hidden="true" />
                                </div>
                               
                               <div style={{float:'left', fontSize:'15px', marginLeft:'3px', marginRight:'3px'}}>
                                <div className="about-me-details">Photography</div>
                                   <br/>
                                   <i style={{fontSize:'17px'}} class="fa fa-camera-retro" aria-hidden="true" />
                                </div>
                
                               <div style={{float:'left', fontSize:'15px', marginLeft:'3px', marginRight:'3px'}}>
                                <div className="about-me-details">Travel</div>
                                   <br/>
                                   <i style={{fontSize:'17px'}} class="fa fa-plane" aria-hidden="true" />
                                </div>
                            </cell>
                        </Grid>
                    </div>
                    
                </Cell>
                <Cell col={1} style={{border:'1px solid red'}}>
                    middle
                </Cell>
                <Cell col={6} style={{border:'1px solid red'}}>
                    <div><h3>RAHUL SARMA</h3></div>
                    <div><h6>SOFTWARE ENGINEER</h6></div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                    </div>
                    <hr style={{position: 'relative', width:'90%', borderRadius:'20px 0px 0px 20px', height: '30px', background: 'black', background: 'black', marginLeft:'20px', marginRight:'10px', color:'while' }}/>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                    </div>
                    <hr style={{position: 'relative', width:'90%', borderRadius:'20px 0px 0px 20px', height: '30px', background: 'black', background: 'black', marginLeft:'20px', marginRight:'10px', color:'while' }}/>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                    </div>
                    <hr style={{position: 'relative', width:'90%', borderRadius:'20px 0px 0px 20px', height: '30px', background: 'black', background: 'black', marginLeft:'20px', marginRight:'10px', color:'while' }}/>
                    <div>
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