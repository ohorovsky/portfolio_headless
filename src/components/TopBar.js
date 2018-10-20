import React, { Component } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';





class TopBar extends Component {
    // static propTypes = {
    //     user: PropTypes.object
    // }

    render() {
        return (
            <div className="columns small-12 medium-11 medium-centered topbar">
                <img className="logo" src="/img/logo.png" alt="Invizzible Music logo" />
            </div>
        )
    }
}



export default TopBar;