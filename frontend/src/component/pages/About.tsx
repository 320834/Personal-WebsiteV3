import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'; 

import '../styles/AboutStyles.css';

type AboutState = {
    redirect : boolean,
    tabSelect : number
}

export default class About extends Component<{},AboutState>
{
    constructor(props : any)
    {
        super(props);
        this.state = {
            redirect : false,
            tabSelect : 0
        }

    }

    redirectHome = () => {
        this.setState({redirect: true});
    }

    handleChange = (event: React.ChangeEvent<{}>, value: number) => {
        this.setState({tabSelect: value})
    }

    render()
    {
        let bodyContent : any;

        if(this.state.redirect)
        {
            return(<Redirect push to="/"></Redirect>)
        }

        if(this.state.tabSelect === 0)
        {
            bodyContent = <div>
                <p className="paragraph">My name is Justin Chen and I love to make cool things (preferably on computers).</p>
                <p>I am currently a 4th year undergraduate student at New York University earning my comp sci degree.</p>
                <div className="heightSpacingPara"></div>
                <p>To take a look at my tech projects click <a href = "/">here</a></p>
                <p>For any inquiries click <a href="/contact">here</a></p>
                <div className="heightSpacingPara"></div>
                <p>My interests/hobbies include</p>
                <ol>
                    <li>Coding with focus in web apps and computer graphics</li>
                    <li>Cycling</li>
                    <li>Playing video games</li>
                </ol>
            </div>
        }
        else
        {
            bodyContent = <object width="1000px" height="800px" data={require("../../resume/test.pdf")} type="application/pdf">
                <embed  src={require("../../resume/test.pdf")} type="application/pdf" />
            </object>
        }

        return(
        <div className="bodyAbout">
            <div onClick={this.redirectHome} className="homeButton">

            </div>
            <Grid container>
                <Grid item lg={3} md={3} sm ={3} xs={3}></Grid>
                <Grid item lg={6} md={6} sm ={6} xs={6}>
                    <div className="heightSpacing"></div>
                    <h1 className = "title">About Me</h1>
                    <Grid className="tabCon" container>
                        <Grid item lg={4} md={3} sm ={2} xs={4}></Grid>
                        <Grid item lg={4} md={6} sm ={8} xs={12}>
                            <Tabs
                                value={this.state.tabSelect}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={this.handleChange}
                                aria-label="disabled tabs example"
                            >
                                <Tab label="General" />
                                <Tab label="Resume" />
                            </Tabs>
                        </Grid>
                        <Grid item lg={4} md={3} sm ={2} xs={4}></Grid>
                    </Grid>
                    <div className="heightSpacingPara"></div>
                    
                    {bodyContent}

                </Grid>
                <Grid item lg={3} md={3} sm ={3} xs={3}></Grid>
            </Grid>
        </div>
        )
    }
}