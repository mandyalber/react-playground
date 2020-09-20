/*Drill 3 - RouletteGun*/

import React from 'react';

class RouletteGun extends React.Component {

    static defaultProps = {
        bulletInChamber: 8
    }

    state = {
        chamber: null,
        spinningTheChamber: false
    }
    handleButtonClicked = () => {

        //The state should update spinningTheChamber to be true.
        this.setState({spinningTheChamber: true})
        //A timeout should be registered for 2 seconds.
        this.timeout = setTimeout(() => {
            //state should be updated to chamber = random number and spinningTheChamber = false.
            let randomNumber = Math.ceil(Math.random() * 8)
            this.setState({chamber: randomNumber, spinningTheChamber: false})
        }, 2000);
    }

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }
    
    renderDisplay (){
        //If spinningTheChamber is true, render 
        if (this.state.spinningTheChamber === true){
            return 'spinning the chamber and pulling the trigger!...'
        }
        //If the chamber value in state is the same as the bulletInChamber value in props, render 
        if (this.state.chamber === this.props.bulletInChamber){
            return 'BANG!!!!'
        }
        //Otherwise, render 
        else {
            return 'you are safe!!'
        }
    }
    
    render(){
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleButtonClicked}>Pull the trigger!</button>
            </div>
            
        )
    }
}

export default RouletteGun;
 