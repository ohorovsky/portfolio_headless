import React, { Component }  from 'react';
import MainSimple from './templates/MainSimple';
import Intro from './templates/Intro';
import Projects from './templates/Projects';
class TemplateSwitch extends Component {
    templates = {
        intro: Intro,
        mainSimple: MainSimple,
        projects: Projects
    }
    render(){
        const Template =  this.templates[this.props.pageContent.template || 'intro'];
        return <Template {...this.props}/>
    }
}



export default TemplateSwitch;