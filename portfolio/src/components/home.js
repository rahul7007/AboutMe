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
                    <div style={{ fontSize:'50px', paddingTop:'20px', fontFamily:'Coiny', color:'white' }}>
                        Welcome to My Profile
                    </div>

                    <hr className="hr-design"/>

                    <div style={{ fontSize:'50px', paddingTop:'50px'}}>
                        <a href="https://www.linkedin.com/in/rahul-sarma-9348a0187/" rel="noopener norefferer" target="_blank" style={{ marginLeft:'50px' }}>
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>
                        <a href="https://github.com/rahul7007" rel="noopener norefferer" target="_blank" style={{ marginLeft:'50px' }}>
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>
                        <a href="https://www.hackerrank.com/Rahul_Sarma" rel="noopener norefferer" target="_blank" style={{ marginLeft:'50px' }}>
                            <i className="fa fa-free-code-camp" aria-hidden="true" />
                        </a>
                        <a href="https://www.youtube.com" rel="noopener norefferer" target="_blank" style={{ marginLeft:'50px' }}>
                            <i className="fa fa-youtube-square" aria-hidden="true" />
                        </a>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
 
export default Home;
