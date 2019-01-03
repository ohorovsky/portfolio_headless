import React, { Component } from 'react';
import Type1 from './templates/Type1';

class Hamburger extends Component {
    templates = {
        type1: Type1,
    }
    render() {
        const Template = this.templates[this.props.name || 'Type1'];
        return <Template {...this.props} />
    }
}



export default Hamburger;