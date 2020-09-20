import React from 'react';
import './Accordion.css'

export default class Accordion extends React.Component{
 //You can manage which section is currently active or opened by keeping track of the index of the last clicked button in state.
    state = {indexOfLastClicked: 0};
    static defaultProps = {sections: []};

    handleButtonClicked(index){
        this.setState({indexOfLastClicked: index})
    }

    renderButtons(){      
        return ( 
            this.props.sections.map((section, index)=>(
                <li key={index} className="section">
                    <button key={index} onClick={()=>this.handleButtonClicked(index)}>
                        {section.title}
                    </button>   
                    {(this.state.indexOfLastClicked === index) && this.renderContent()}
                </li>   
            ))    
        )       
    }     

    renderContent(){
        const currentSection = this.props.sections[this.state.indexOfLastClicked]
        return (
            <p className="content">{currentSection.content}</p>
        )
    }

    render (){
        return (
            <ul className="accordion">
                {this.renderButtons()}
            </ul>
        )
    }
}    

/*add styles for the Accordion component in an Accordion.css file.*/