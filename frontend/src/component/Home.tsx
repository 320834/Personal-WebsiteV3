import React, {Component} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import './styles/HomeStyles.css'

import CanvasBackground from './CanvasBackground';
import InfoCard from './InfoCard';

type HomeProps = {

}

export class Home extends Component<HomeProps, {}>
{
    constructor(props:HomeProps)
    {
        super(props);
    }

    componentDidMount()
    {
        console.log(window.innerWidth + "\t" + window.innerHeight)
    }

    handleResize()
    {
        console.log(window.innerWidth + "\t" + window.innerHeight);
    }

    handleClick = (event : any) =>
    {
        console.log(event)
    }

    render()
    {
        window.addEventListener('click', this.handleClick)
        window.addEventListener('resize', this.handleResize)
        return(<div>
            <div className = "canvasBackground">
                <CanvasBackground></CanvasBackground>
            </div>

            <div className="projectLinks">
                
            </div>
            <div className="projectInfo">
                
            </div>
            
            
        </div>)
    }
}