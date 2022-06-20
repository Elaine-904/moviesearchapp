import { Component } from "react";

class Clock extends Component{
    constructor(props){
        super(props);
        this.state={
            date: new Date()
        };

        this.updateClock= this.updateClock.bind(this)
    }

    updateClock(){
        this.setState({
            date: new Date()
        });
    }

    componentDidMount(){
        this.timerID=setInterval(()=>
        this.updateClock(),
        1000
       )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    render(){
        return(
            <div>
                <p>time is {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }


}

export default Clock;