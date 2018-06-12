import React, { Component }  from 'react';

class MainSimple extends Component {

    render(){
        const {heading, paragraph} = this.props.pageContent;
        return (
            <div className={`page ${this.props.isActive ? 'active' : ''}`}>

                        <p>{paragraph}</p>
            </div>
        )
    }
}



export default MainSimple;