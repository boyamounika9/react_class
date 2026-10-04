import { Component } from "react";

class Counter extends Component {
    constructor() {
        super()
        this.state = { count: 0 }

    }

    handleaddone = () => {
        this.setState({ count: this.state.count + 1 })
    }



    handleaddfive = () => {
        this.setState({ count: this.state.count + 5 })
    }



    handlelessone = () => {
        if (this.state.count > 0)
            this.setState({ count: this.state.count - 1 })
    }



    handlereset = () => {
        if (this.state.count != 0)
            this.setState({ count: 0 })
    }


    render() {
        return (
            <>


                <div className="card col-3 m-auto mt-5 ">
                    <div className="card-header">
                        <h1>Count:{this.state.count} </h1>
                    </div>
                    <div className="card-body ">
                        <button className="btn btn-primary m-3" onClick={this.handleaddone}>+1</button>
                        <button className="btn btn-success" onClick={this.handleaddfive}>+5</button> <br />
                        <button className="btn btn-warning m-3" onClick={this.handlelessone}>-1</button>
                        <button className="btn btn-danger" onClick={this.handlereset}>Reset</button>
                    </div>
                </div>






            </>
        )
    }


}
export default Counter;