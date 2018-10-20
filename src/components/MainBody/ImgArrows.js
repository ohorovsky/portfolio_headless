import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import posed from 'react-pose';


const configImgArrows = {
    show: { scale: 1 },
    hide: { scale: 0 }
}
const Wrapper = posed.div(configImgArrows)

export default class ImgArrows extends Component {
    static propTypes = {
        prevImage: PropTypes.func.isRequired,
        nextImage: PropTypes.func.isRequired,
        imageCount: PropTypes.number.isRequired,
    }

    render() {
        const { prevImage, nextImage, imageCount } = this.props;
        return (
            <Wrapper pose={imageCount == 0 || imageCount == 1 ? 'hide' : 'show'} className="img-buttons__wrapper">
                <button className="img-button" onClick={prevImage}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="768" height="768" viewBox="0 0 768 768">
                        <title></title>
                        <g id="icomoon-ignore">
                        </g>
                        <path fill="#000" d="M493.5 514.5l-45 45-192-192 192-192 45 45-147 147z"></path>
                    </svg>
                </button>
                <button className="img-button" onClick={nextImage}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="768" height="768" viewBox="0 0 768 768">
                        <title></title>
                        <g id="icomoon-ignore">
                        </g>
                        <path fill="#000" d="M274.5 523.5l147-147-147-147 45-45 192 192-192 192z"></path>
                    </svg>
                </button>
            </Wrapper>
        )
    }
}
