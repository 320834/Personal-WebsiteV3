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
    render()
    {
        return(<Grid container>
            <Grid container item lg={12} md={12}>
                <Grid item lg={3} md={3}></Grid>
                <Grid item lg={6} md={6}>
                    <Typography className="titleCon" variant="h3">{this.props.title}</Typography>
                </Grid>
                <Grid item lg={3} md={3}></Grid>
            </Grid>

            <Grid className="break" item lg={12}></Grid>

            <Grid container item lg={12} md={12}>
                <Grid item lg={3} md={3}></Grid>
                <Grid item lg={6} md={6}>
                    <CardMedia className="imgCon" image={require('../photos/' + this.props.imgSource)}></CardMedia>
                </Grid>
                <Grid item lg={3} md={3}></Grid>
            </Grid>

            <Grid className="break" item lg={12}></Grid>

            <Grid container item lg={12} md={12}>
                <Grid item lg={3} md={3}></Grid>
                <Grid item lg={6} md={6}>
                    <Typography className="descCon" variant="body1">{this.props.description}</Typography>
                </Grid>
                <Grid item lg={3} md={3}></Grid>
            </Grid>
            
        </Grid>)
    }
}   