import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import './styles/HomeStyles.css'

import links from '../pagedata/links.json';

import CanvasBackground from './CanvasBackground';
import InfoCard from './InfoCard';
import LinkCard from './LinkCard';

type HomeProps = {

}

type InfoCardState = {

}

type HomeState = {
    currentHover: number,
    infoCardPos : number,
    infoCardWidth : number,
}

export class Home extends Component<HomeProps, HomeState>
{
    projectInfoRef = React.createRef<HTMLDivElement>();

    constructor(props:HomeProps)
    {
        super(props);
        this.state = {
            currentHover: 0,
            infoCardPos: 0,
            infoCardWidth: 350
        }
    }

    componentDidMount()
    {

        this.handleResize();
    }

    handleResize = () =>
    {
        console.log(window.innerWidth + "\t" + window.innerHeight);

        let newPos = (window.innerWidth - this.state.infoCardWidth)/2;
        
        this.setState({infoCardPos : newPos});
        
    }

    handleClick = (event : any) =>
    {
        
    }

    handleHover = (id : number) => {
        this.setState({currentHover: id});
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
                {links.map((obj, index) => {
                    if(index !== 0 && obj.project)
                    {
                        return(
                            <div>
                                <LinkCard 
                                    id={index}
                                    title={obj.title}
                                    link={obj.link}
                                    hover={this.handleHover}
                                ></LinkCard>
                            </div>)
                    }
                    
                })}
            </div>

            <div className="infoLinks">
                {links.map((obj, index) => {
                    if(index !== 0 && !obj.project)
                    {
                        return(
                            <div>
                                <LinkCard 
                                    id={index}
                                    title={obj.title}
                                    link={obj.link}
                                    hover={this.handleHover}
                                ></LinkCard>
                            </div>)
                    }
                })}
            </div>

            <div className="projectInfo" style={{'left': this.state.infoCardPos, 'width': this.state.infoCardWidth}} ref={this.projectInfoRef}>
                <InfoCard 
                    title={links[this.state.currentHover].title}
                    imgSource={links[this.state.currentHover].imgSource}
                    description={links[this.state.currentHover].description}
                ></InfoCard>
            </div>
            
            
        </div>)
    }
}