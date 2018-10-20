import React, { Component } from 'react';
import posed from 'react-pose';
import { changeActivePage } from '../helpers';


const configButton = {
    active: { scale: 1.5, backgroundColor: '#F9BB4C' },
    inactive: { scale: 1, backgroundColor: 'rgb(252, 224, 175)' }
}

const Button = posed.div(configButton);
class SideNav extends Component {
    changeActivePage = (page) => {
        this.props.updateActivePage(page)
    }
    render() {
        const { pageContent, activePage, updateActivePage } = this.props;
        return (
            <div className="side-nav">

                {pageContent.map((key, index) => <Button key={index} className='side-nav-button__wrapper' pose={activePage === index ? 'active' : 'inactive'}><button onClick={() => changeActivePage(index, this.props)}></button></Button>)}

            </div>
        )
    }
}



export default SideNav;