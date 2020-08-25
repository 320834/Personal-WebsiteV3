import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";

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
        this.setState({redirect: true});
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