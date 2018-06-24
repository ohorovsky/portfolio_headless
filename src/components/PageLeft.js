import React, { Component }  from 'react';
import TemplateSwitch from './TemplateSwitch';


class PageLeft extends Component {

    render(){
        return (

                <TemplateSwitch pageContent={this.props.pageContent} updateActivePage={this.props.updateActivePage}/>

        )
    }
}



export default PageLeft;