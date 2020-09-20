/*Drill 1 - Hello World*/

import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world'
    };
    handleFriendButtonClick = () => {
        this.setState({who: 'friend'})
    }
    handleReactButtonClick = () => {
        this.setState({who: 'React'})
    }
    handleWorldButtonClick = () => {
        this.setState({who: 'world'})
    }
    render(){
        return (
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={this.handleFriendButtonClick}>Friend</button>
                <button onClick={this.handleReactButtonClick}>React</button>
                <button onClick={this.handleWorldButtonClick}>World</button>
            </div>
        )
    }
}

export default HelloWorld;