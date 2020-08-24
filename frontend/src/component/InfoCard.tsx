import React, {Component} from 'react';

type InfoCardProps = {
    title : string,
    imgSource : string,
    description: string
}

export default class InfoCard extends Component<InfoCardProps,{}>
{
    render()
    {
        return(<div>
            <h1>{this.props.title}</h1>
            <img width="50" height="50" src={require('../photos/' + this.props.imgSource)}></img>
            <p>{this.props.description}</p>
        </div>)
    }
}   