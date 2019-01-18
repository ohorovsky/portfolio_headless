import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger/Hamburger'
import MobileMenu from './MobileMenu'
import Logo from './Logo'
// import PropTypes from 'prop-types';

class TopBar extends Component {
    // static propTypes = {
    //     user: PropTypes.object
    // }

    state = {
        menuActive: false
    }

    activateMenu = () => {
        const { menuActive } = this.state;
        this.setState({ menuActive: !menuActive })
    }


    render() {
        const { menuActive } = this.state;
        const { mainPageNames, activeMainPage, updatePageContent } = this.props;
        return (
            <div className="topbar">
                <div className="body-background-left"></div>
                <div className="body-background-right"></div>
                <Logo />
                <div className="hide-for-large mobile-menu__wrapper">
                    <div className="columns small-12 medium-11 medium-centered hamburger__wrapper">
                        <Hamburger name="type1" activateMenu={this.activateMenu} menuActive={menuActive} />
                    </div>
                    <MobileMenu mainPageNames={mainPageNames} menuActive={menuActive} activateMenu={this.activateMenu} activeMainPage={activeMainPage} updatePageContent={updatePageContent} />
                </div>
            </div>
        )
    }
}



export default TopBar;