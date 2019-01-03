import React, { Component } from 'react'
import PropTypes from 'prop-types'
import posed, { PoseGroup } from 'react-pose';
import { Svg } from '../../../utilities'

export default class Type1 extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const { activateMenu, menuActive } = this.props;
        if (menuActive) {
            return (
                <div className="close__wrapper" onClick={activateMenu}>
                    <Svg name="close" />
                </div>
            )
        }
        return (
            <button type="button" className="hamburger type-1" onClick={activateMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>

        )
    }
}
