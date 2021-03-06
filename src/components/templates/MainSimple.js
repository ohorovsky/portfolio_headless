import React, { Component } from 'react';
import NextPageBtn from '../MainBody/NextPageBtn'
import { Svg } from '../../utilities'

class MainSimple extends Component {

    render() {
        const { pageContent, nextPage, isLastPage, mainBodyRef } = this.props;
        const { heading, paragraphs } = pageContent;
        return (
            <div className={`page mainSimple`}>
                <div className="small-12 large-10 large-centered">
                    <div className="heading__wrapper">
                        <h1 className="page__heading">{heading}</h1>
                    </div>
                    {paragraphs.map((paragraph, i) => {
                        return (
                            <div key={i} className="small-12 large-10 large-centered paragraph__wrapper">
                                <p className="page__paragraph">{paragraph}</p>
                            </div>
                        )
                    })}
                    {!isLastPage && (
                        <NextPageBtn nextPage={nextPage} mainBodyRef={mainBodyRef} />
                    )}
                </div>
            </div>
        )
    }
}



export default MainSimple;