import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

import './styles/LinkCard.css';
import { Typography } from '@material-ui/core';

type LinkCardProps = {
    id : number,
    title : string,
    link : string,
    hover: any
}

type LinkCardState = {
    redirect : boolean
}

export default class LinkCard extends Component<LinkCardProps,LinkCardState>
{
    constructor(props : LinkCardProps){
        super(props);
        this.state = {
            redirect: false
        }

    }
    onHoverEnter = () => {
        this.props.hover(this.props.id)
    }

    onHoverLeave = () => {
        this.props.hover(0)
    }

    handleClick = () => {
        if(this.props.link.includes("https") || this.props.link.includes("localhost"))
        {
            window.open(this.props.link, "_blank");
        }
        else
        {
            this.setState({redirect: true});
        }
        
    }

    render()
    {
        if(this.state.redirect)
        {
            return(<Redirect push to={this.props.link}/>)
        }
        else
        {
            return(
                <div className="cardCon" onClick={this.handleClick} onMouseEnter={this.onHoverEnter} onMouseLeave={this.onHoverLeave}>
                    <Typography variant="body1">{this.props.title}</Typography>
                </div>)
        }
        
    }
}