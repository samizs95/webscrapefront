import React from "react";
import {Link} from "react-router-dom";

class Blogs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error:null,
            isLoaded:false,
            links:[]
        }
    }

    componentDidMount(){
        fetch(`http://localhost:4000/api?page=${this.props.match.params.noOfPages}`)
        .then(res => res.json())
        .then(result =>   {
            this.setState({
                isLoaded:true,
                links: result.map(item => item.pathAPI)
        }) 
        })
    }
    

    render(){
        return this.state.links.map(element => 
            <li>
                  <a target="_blank" href = {"http://localhost:4000/"+ element} key={element}>{element}</a> 
            </li>
                    
        )}
}

export default Blogs;