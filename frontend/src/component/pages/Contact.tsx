import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import GitHubIcon from '@material-ui/icons/GitHub';

import '../styles/ContactStyles.css';

type ContactState = {
    redirect : boolean
}

export default class Contact extends Component<{},ContactState>
{
    constructor(props: any)
    {
        super(props);
        this.state = {
            redirect: false
        }
    }

    linkToGithub = () => {
        window.open("https://github.com/320834")
    }

    redirectHome = () => {
        this.setState({redirect: true});
    }

    render()
    {
        if(this.state.redirect)
        {
            return(<Redirect push to="/"></Redirect>)
        }

        return(<div className = "bodyContact">
            <div onClick={this.redirectHome} className="homeButton">

            </div>
            <Grid container>
                <Grid item lg={3} md={3} sm ={3} xs={3}></Grid>
                <Grid item lg={6} md={6} sm ={6} xs={6}>
                    <div className="heightSpacing"></div>
                    <h1>Contact</h1>
                    <div className="heightSpacingPara"></div>
                    <p>To reach out use the following point of contact</p>
                    <p>Email: justinqchen1000@gmail.com</p>
                    <p>Github: </p><GitHubIcon className="githubIcon" fontSize="large" onClick={this.linkToGithub}></GitHubIcon>
                </Grid>
                <Grid item lg={3} md={3} sm ={3} xs={3}></Grid>
            </Grid>
        </div>)
    }
}