import React, { Component }  from 'react';
import TemplateSwitch from './TemplateSwitch';


class PageLeft extends Component {

    render(){
        return (
            <div className={`page ${this.props.isActive ? 'active' : ''}`}>
                <TemplateSwitch pageContent={this.props.pageContent}/>
            </div>
        )
    }
}



export default PageLeft;