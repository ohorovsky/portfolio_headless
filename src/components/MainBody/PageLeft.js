import React, { Component } from 'react';
import TemplateSwitch from '../TemplateSwitch';


class PageLeft extends Component {

    render() {
        const { pageContent, updateActivePage, animationFinished } = this.props
        return (

            <TemplateSwitch pageContent={pageContent} updateActivePage={updateActivePage} animationFinished={animationFinished} />

        )
    }
}



export default PageLeft;