import React, { Component }  from 'react';

class PageLeft extends Component {

    render(){
        const {heading, paragraph} = this.props.pageContent;
        return (
            <div className={`page ${this.props.isActive ? 'active' : ''}`}>
                        <h1>{heading}</h1>
                        <p>{paragraph}</p>
            </div>
        )
    }
}



export default PageLeft;