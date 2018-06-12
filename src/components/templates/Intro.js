import React, { Component }  from 'react';

class Intro extends Component {

    render(){
        const {heading, paragraph} = this.props.pageContent;
        return (
            <div className={`page ${this.props.isActive ? 'active' : ''}`}>
                        <h1>{heading}</h1>

            </div>
        )
    }
}



export default Intro;