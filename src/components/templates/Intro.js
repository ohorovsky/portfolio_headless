import React, { Component } from 'react';

class Intro extends Component {

    render() {
        const { pageContent, nextPage, mainBodyRef } = this.props;
        const { heading, subheading } = pageContent;
        return (
            <div className={`page intro`}>
                <div className="small-12 large-10 large-centered">
                    <div className="intro-top__wrapper">
                        <div className="heading__wrapper">
                            <h1 className="page__heading">{heading}</h1>
                        </div>
                        <div className="subheading__wrapper">
                            <h2 className="page__subheading">{subheading}</h2>
                        </div>
                    </div>
                    <button type="button" onClick={() => nextPage(mainBodyRef)} className="intro-next-button" aria-label="next page">
                        <div className="pulse pulse-1" />
                        <div className="pulse pulse-2" />
                        <div className="dot__wrapper">
                            <div className="dot"></div>
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}



export default Intro;