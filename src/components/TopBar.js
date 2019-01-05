import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger/Hamburger'
import MobileMenu from './MobileMenu'
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
            <Fragment>
                <div className="row columns small-12 medium-11 medium-centered topbar">
                    <img className="logo" src="/img/logo.png" alt="On-Dro logo" />
                </div>
                <div className="hide-for-large mobile-menu__wrapper">
                    <div className="columns small-12 medium-11 medium-centered hamburger__wrapper">
                        <Hamburger name="type1" activateMenu={this.activateMenu} menuActive={menuActive} />
                    </div>
                    <MobileMenu mainPageNames={mainPageNames} menuActive={menuActive} activateMenu={this.activateMenu} activeMainPage={activeMainPage} updatePageContent={updatePageContent} />
                </div>
            </Fragment>
        )
    }
}



export default TopBar;