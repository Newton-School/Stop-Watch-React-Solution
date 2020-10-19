import React from 'react';
import Time from './Time';


class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        startTimer: false,
        hour:0,
        minute:0,
        second:0
      };
    }
    //use componentdidmount to set the timer and timer should update every second
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    //use componentwillunmount to clear the timer
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick=()=> {
      if(this.state.startTimer===true){
        this.setState({
          second:this.state.second+1
        })
        if(this.state.second===60){
          this.setState({
            second:0,
            minute:this.state.minute+1
          })
        }
        if(this.state.minute===60){
          this.setState({
            minute:0,
            hour:this.state.hour+1
          })
        }
      }
    }

    start=()=>{
      this.setState({
        startTimer: true
      })
    }

    stop=()=>{
      this.setState({
        startTimer: false
      })
    }

    reset=()=>{
      this.setState({
        startTimer:false,
        hour:0,
        minute:0,
        second:0
      })
    }
  
    render() {
      return (
        <div>
            {/* Call the time component and pass hour minute and second as props */}
            <Time hour={this.state.hour} minute={this.state.minute} second={this.state.second}/>

            {/* create 3 buttons for start stop and reset */}
            <br></br>
            <button onClick={()=>this.start()}>start</button>
            <br></br>
            <button onClick={()=>this.stop()}>stop</button>
            <br></br>
            <button onClick={()=>{this.reset()}}>reset</button>
        </div>
      );
    }
}


export default Clock