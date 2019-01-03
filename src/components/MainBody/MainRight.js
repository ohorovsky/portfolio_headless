import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';
import PropTypes from 'prop-types'
import ImgArrows from './ImgArrows';

const configImg = {
    enter: {
        // opacity: 1,
        x: 0,
        scale: 1
    },
    exit: {
        // opacity: 0,
        x: ({ carouselDirection }) => `${carouselDirection}500px`,
        scale: 0.95
    },
}

const Image = posed.div(configImg);



class MainRight extends Component {
    static propTypes = {
        images: PropTypes.array,
        activeImage: PropTypes.number,
        carouselDirection: PropTypes.string,
    }
    static defaultProps = {
        images: [],
        activeImage: '',
        carouselDirection: '+',
    }



    render() {
        const { images, activeImage, carouselDirection, nextImage, prevImage, imageCount } = this.props;

        return (
            <div className={`main-right`}>
                <PoseGroup>
                    {images.map((image, index) => {
                        if (activeImage == index) {
                            return (
                                <Image
                                    key={index}
                                    carouselDirection={carouselDirection}
                                    initialPose="exit"
                                    pose="enter"
                                    className='background-image'
                                    style={{
                                        backgroundImage: `url(${images[index]})`
                                    }}
                                />
                            );
                        }
                    })}
                </PoseGroup>
                <div className="hide-for-large">
                    <ImgArrows nextImage={nextImage} prevImage={prevImage} imageCount={imageCount} />
                </div>
            </div>
        )
    }
}



export default MainRight;

