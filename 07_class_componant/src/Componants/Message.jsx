import { Component } from "react";

class Message extends Component{
    constructor (props){
        super();
        this.props=props;
        this.name="mounika"
        this.state={age:20}
    }
    handleincrement=()=>{
        this.setState({age:this.state.age+1})
        console.log(this.state)

    }
    handledecrement=()=>{
        this.setState({age:this.state.age-1})
        console.log(this.state)

    }

    render(){
        return(
            <>
            <h1>Hello from Class Componants : {this.name}</h1>
            <h2>{this.props.meg}</h2>
            <button onClick={this.handleincrement}>+</button>
            <span>age:{this.state.age}</span>
            <button onClick={this.handledecrement}>-</button>

            </>
        )
    }
}

export default Message;