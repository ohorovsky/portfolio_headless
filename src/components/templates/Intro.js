import React, { Component }  from 'react';

class Intro extends Component {

    render(){
        const {heading, subheading} = this.props.pageContent;
        return (
            <div className={`page intro`}>
                <div className="small-12 medium-10 medium-centered">
                    <div className="intro-top__wrapper">
                        <div className="heading__wrapper">
                            <h1 className="page__heading">{heading}</h1>
                        </div>
                        <div className="subheading__wrapper">
                            <h2 className="page__subheading">{subheading}</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Intro;