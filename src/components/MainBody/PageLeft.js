import React, { Component } from 'react';
import TemplateSwitch from '../TemplateSwitch';


class PageLeft extends Component {

    render() {
        const { pageContent, updateActivePage, animationFinished } = this.props
        if (animationFinished) {
            return (

                <TemplateSwitch pageContent={pageContent} updateActivePage={updateActivePage} animationFinished={animationFinished} />

            )
        }
        return <p>loading</p>
    }
}



export default PageLeft;