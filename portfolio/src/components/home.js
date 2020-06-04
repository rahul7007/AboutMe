import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './main.css'


class Home extends Component {
    render() { 
        return ( 
            <div style={{ width:'100%', margin:'auto', border:'1px solid' }}>
                <Grid className="home-grid">
                    <Cell col={12}>
                    <img 
                        src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man3-512.png"
                        alt="avatar"
                        className="avatar"
                    />
                    <div style={{ fontSize:'50px', paddingTop:'20px' }}>
                        Lorem Ipsum is some dummy text
                    </div>
                    <div style={{ fontSize:'50px', paddingTop:'50px'}}>
                        <a style={{ marginLeft:'50px' }}>L</a>
                        <a style={{ marginLeft:'50px' }}>G</a>
                        <a style={{ marginLeft:'50px' }}>Y</a>
                        <a style={{ marginLeft:'50px' }}>H</a>
                    </div>
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}
 
export default Home;
