import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import posed from 'react-pose';
import { Svg } from '../../utilities'


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
                    <Svg name="prev" />
                </button>
                <button className="img-button" onClick={nextImage}>
                    <Svg name="next" />
                </button>
            </Wrapper>
        )
    }
}
