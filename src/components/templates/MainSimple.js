import React, { Component } from 'react';
import NextPageBtn from '../MainBody/NextPageBtn'
import { Svg } from '../../utilities'

class MainSimple extends Component {

    render() {
        const { pageContent, nextPage, isLastPage } = this.props;
        const { heading, paragraphs } = pageContent;
        return (
            <div className={`page mainSimple`}>
                <div className="small-12 large-10 large-centered">
                    <div className="heading__wrapper">
                        <h1 className="page__heading">{heading}</h1>
                    </div>
                    {Object.keys(paragraphs).map(key => {
                        return (
                            <div key={key} className="small-12 large-10 large-centered paragraph__wrapper">
                                <p className="page__paragraph">{paragraphs[key]}</p>
                            </div>
                        )
                    })}
                    {!isLastPage && (
                        <NextPageBtn nextPage={nextPage} />
                    )}
                </div>
            </div>
        )
    }
}



export default MainSimple;