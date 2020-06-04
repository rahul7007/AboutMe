import React, { Component } from 'react';
import './main.css'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class AboutMe extends Component {
    render() { 
        return ( 
            <div style={{ width:'100%', margin:'auto' }}>
            <Grid className="">
                <Cell col={5}>
                    <div className="about-me-left-div">

                        <img style={{marginTop:'-5px'}}
                            src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man3-512.png"
                            alt="avatar"
                            className="avatar"
                        />
                        <br />
                        <Grid>
                            <cell col={12} style={{fontSize:'30px', margin:'auto' }}>
                                C O N T E C T S
                                <List>
                                    <ListItem>
                                        <ListItemContent>
                                            <i style={{ fontSize:'20px', marginRight:'20px' }} class="fa fa-map-marker" aria-hidden="true" />
                                            Guwahati Assam, India
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent>
                                            <i style={{ fontSize:'20px', marginRight:'20px' }} class="fa fa-phone" aria-hidden="true" />
                                            +91-9085895248
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent>
                                            <i style={{ fontSize:'20px', marginRight:'20px' }} class="fa fa-envelope" aria-hidden="true" />
                                            rahulsarma7007@gmail.com
                                        </ListItemContent>
                                    </ListItem>
                                </List>
                            </cell>

                        </Grid>
                        <Grid>
                            <cell col={12} style={{fontSize:'30px', margin:'auto' }}>
                                L A N G U A G E S</cell>
                                <List style={{border:'1px solid', marginLeft:'50px'}}>
                                    <ListItem>
                                        <ListItemContent>
                                        English&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <i style={{ fontSize:'18px', marginLeft:'20px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'18px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'18px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'18px', marginLeft:'10px' }} class="fa fa-star-o" aria-hidden="true" />
                                            <i style={{ fontSize:'18px', marginLeft:'10px' }} class="fa fa-star-o" aria-hidden="true" />
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent>
                                        Hindi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <i style={{ fontSize:'18px', marginLeft:'20px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'18px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'18px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'18px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'18px', marginLeft:'10px' }} class="fa fa-star-o" aria-hidden="true" />
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent>
                                            Assamese&nbsp;
                                            <i style={{ fontSize:'18px', marginLeft:'20px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'18px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'18px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'18px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                            <i style={{ fontSize:'18px', marginLeft:'10px' }} class="fa fa-star" aria-hidden="true" />
                                        </ListItemContent>
                                    </ListItem>
                                </List>
                            </Grid>
                        <Grid>
                            <cell col={12} style={{fontSize:'30px', margin:'auto' }}>
                                S K I L L S
                                <List>
                                    <ListItem>
                                        <ListItemContent>
                                            <i style={{ fontSize:'20px', marginRight:'20px' }} class="fa fa-bullseye" aria-hidden="true"></i>
                                            Python
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent>
                                            <i style={{ fontSize:'20px', marginRight:'20px' }} class="fa fa-bullseye" aria-hidden="true"></i>
                                            React
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent>
                                        <i style={{ fontSize:'20px', marginRight:'20px' }} class="fa fa-bullseye" aria-hidden="true"></i>
                                            C/C++
                                        </ListItemContent>
                                    </ListItem>
                                </List>
                            </cell>
                        </Grid>

                        <Grid>
                            <cell col={12} style={{fontSize:'30px', margin:'auto' }}>
                               H O B B Y
                               <br /> <br />
                               <div style={{float:'left', fontSize:'15px', marginLeft:'8px', marginRight:'8px'}}>Music<br/><i style={{fontSize:'25px'}} class="fa fa-music" aria-hidden="true" /></div>
                               
                               <div style={{float:'left', fontSize:'15px', marginLeft:'8px', marginRight:'8px'}}>Cricket<br/><i style={{fontSize:'25px'}} class="fa fa-gamepad" aria-hidden="true" /></div>
                               
                               <div style={{float:'left', fontSize:'15px', marginLeft:'8px', marginRight:'8px'}}>Photography<br/><i style={{fontSize:'25px'}} class="fa fa-camera-retro" aria-hidden="true" /></div>
                
                               <div style={{float:'left', fontSize:'15px', marginLeft:'8px', marginRight:'8px'}}>Travelling<br/><i style={{fontSize:'25px'}} class="fa fa-plane" aria-hidden="true" /></div>
                            </cell>
                        </Grid>
                    </div>
                    
                </Cell>
                <Cell col={7}>
                    Right
                </Cell>
            </Grid> 
            </div>
        )
    }
}
 
export default AboutMe;