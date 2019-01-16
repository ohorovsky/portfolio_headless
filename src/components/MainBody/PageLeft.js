import React, { Component } from 'react';
import TemplateSwitch from '../TemplateSwitch';


class PageLeft extends Component {

    render() {
        const { pageContent, updateActivePage, animationFinished, nextPage, isLastPage, mainBodyRef } = this.props
        if (animationFinished) {
            return (

                <TemplateSwitch pageContent={pageContent} updateActivePage={updateActivePage} animationFinished={animationFinished} nextPage={nextPage} isLastPage={isLastPage} mainBodyRef={mainBodyRef} />

            )
        }
        return <p>loading</p>
    }
}



export default PageLeft;