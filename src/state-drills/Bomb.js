/*Drill 2 - Bomb*/
import React from 'react';

class Bomb extends React.Component {

    state = {
        count: 0,
        bomb: ''
    }
    componentDidMount(){
        this.interval = setInterval(() => {
           this.setState({
            count: this.state.count + 1      
            })
            if (this.state.count < 8) {
                if (this.state.count % 2 === 0){
                    this.setState({bomb: 'tick'})
                }
                else  {
                    this.setState({bomb: 'tock'})
                }
            }    
            else {
                clearInterval(this.interval)
                this.setState({bomb: 'BOOM!!!!'})
                
                
            }
        }, 1000);       
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return (
        <div><p>{this.state.count} {this.state.bomb}</p></div>
        )
    }
}

export default Bomb;