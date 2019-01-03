import React, { Component } from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose';
import styled from 'styled-components'

const ExpandButton = posed.div({
    open: { scale: 1, rotate: 0 },
    closed: { scale: 1, rotate: 45 },
    hidden: { scale: 0 }
});
const Wrapper = styled(ExpandButton)`
  position: absolute;
  top: 1rem;
  right: 2rem;
  z-index: 1;
`;

export default class ExpandBtn extends Component {
    static propTypes = {
        imageCount: PropTypes.number.isRequired,
        mainLeftWidth: PropTypes.number.isRequired,
        updateMainLeftWidth: PropTypes.func.isRequired
    }

    render() {
        const { imageCount, mainLeftWidth, updateMainLeftWidth } = this.props;
        let expandBtnConfig;
        if (imageCount !== 0) {
            if (mainLeftWidth === 0) {
                expandBtnConfig = 'open'
            }
            if (mainLeftWidth === 1) {
                expandBtnConfig = 'closed'
            }
        } else {
            expandBtnConfig = 'hidden'
        }
        return (
            <Wrapper pose={expandBtnConfig} onClick={updateMainLeftWidth} className="show-for-large">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 768 768">
                    <title></title>
                    <g id="icomoon-ignore">
                    </g>
                    <path fill="#F9BB4C" d="M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z"></path>
                </svg>
            </Wrapper>
        )
    }
}
