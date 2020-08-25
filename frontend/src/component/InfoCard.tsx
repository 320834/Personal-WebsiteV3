import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import './styles/InfoCard.css';

type InfoCardProps = {
    title : string,
    imgSource : string,
    description: string
}

export default class InfoCard extends Component<InfoCardProps,{}>
{
    parseDescription = () => {
        let str = ""
        for(let i = 0; i < this.props.description.length; i++)
        {
            if(this.props.description.charAt(i) === '|')
            {
                str += "\n";
            }
            else
            {
                str += this.props.description.charAt(i);
            }
        }

        console.log(str);

        return str;
    }

    render()
    {
        return(<Grid container>
            <Grid container item lg={12} md={12} sm={12}>
                <Grid item lg={3} md={3} sm={3}></Grid>
                <Grid item lg={6} md={6} sm={6}>
                    <h1 className="titleCon">{this.props.title}</h1>
                </Grid>
                <Grid item lg={3} md={3} sm={6}></Grid>
            </Grid>

            <Grid className="break" item lg={12} md={12} sm={12}></Grid>

            <Grid container item lg={12} md={12}>
                <Grid item lg={3} md={3} sm={3}></Grid>
                <Grid item lg={6} md={6} sm={6}>
                    <CardMedia className="imgCon" image={require('../photos/' + this.props.imgSource)}></CardMedia>
                </Grid>
                <Grid item lg={3} md={3}></Grid>
            </Grid>

            <Grid className="break" item lg={12} md={12} sm={12}></Grid>

            <Grid container item lg={12} md={12}>
                <Grid item lg={1} md={1}></Grid>
                <Grid item lg={10} md={10} sm={12}>
                    <p className="descCon">{this.props.description}</p>
                </Grid>
                <Grid item lg={1} md={1}></Grid>
            </Grid>
            
        </Grid>)
    }
}   