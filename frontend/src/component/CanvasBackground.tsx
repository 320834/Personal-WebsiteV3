import React, {Component} from 'react';
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select, ContainerElement } from 'd3-selection'
import * as d3 from 'd3';

type d3Node = {
    id: string,
    group: number
}

export default class CanvasBackground extends Component
<{

},
{
    width : number,
    height: number,
    mouseX : number,
    mouseY : number,
    document : any,
}>
{
    //document : any = window.document;

    state = {
        width : window.innerWidth,
        height: window.innerHeight,
        mouseX: window.innerWidth/2,
        mouseY: window.innerHeight/2,
        document: window.document,
    }

    constructor(props : any){
        super(props)
     }

    componentDidMount() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
        this.createBackground()
       
    }   
    
    componentDidUpdate() {
        //this.createBackground()
    } 
    
    handleResize = () =>{
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    mouseMove = (e : any) => {
        this.setState({mouseX: e.clientX, mouseY: e.clientY})
    }

    createBackground = () => {
        let nodes : any = [];

        nodes.push({
            group: -1
        });
        let root = nodes[0];

        for(let i = 0; i < 300; i++)
        {
            nodes.push({
                group: i
            });
        }

        let nodeData : any = d3.select(this.state.document.getElementsByClassName("canvas")[0])
                        .selectAll('circle')
                        .data(nodes)

        nodeData.enter()
            .append('circle')
            .attr('r', function(){
                return (Math.random() * 20) + 5;
            })
            .merge(nodeData)
            .style("fill",function()
            {
                return "hsl(" + (160 + Math.random() * 40) + ",50%,70%)";
            })

        let ticked = () =>
        {
            let nodeData : any = d3.select(this.state.document.getElementsByClassName("canvas")[0])
                        .selectAll('circle')
                        .data(nodes)
                        
                    
                nodeData.enter()
                    .append('circle')
                    .merge(nodeData)
                    .attr('cx', function(d : any){
                        return d.x;
                    })
                    .attr('cy', function(d : any){
                        return d.y;
                    })
                    .style('visibility', function(d : any){
                        return d.group === -1 ? 'hidden' : 'visible'
                    })
        }
        
        let simulation : any = d3.forceSimulation(nodes)
            .force('charge', d3.forceManyBody().strength(0))
            .force('center', d3.forceCenter(this.state.width/2, this.state.height/2))
            .force('collision', d3.forceCollide().radius(function(d : any){
                return 60;
            }))
            .on('tick', ticked)    
            
        

        let element : any = this.state.document.getElementsByClassName("canvas")[0];

        select(this.state.document.getElementsByClassName("canvas")[0])
            .on('mousemove', function(){

            let mouseCoord : Array<number> = d3.mouse(element);
            
            let x = mouseCoord[0];
            let y = mouseCoord[1];

            root.x = x;
            root.y = y;
            
            simulation.restart();

        });
    }
    


    render() {
        window.addEventListener('resize', this.handleResize);
        // window.addEventListener('mousemove', this.mouseMove);
        return (
            <div>
                <svg className = "canvas"
                    width={this.state.width} height={this.state.height}>
                </svg>
            </div>
        )
    }
}
