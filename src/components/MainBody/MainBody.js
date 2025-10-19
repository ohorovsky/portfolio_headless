import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MainLeft from './MainLeft';
import MainRight from './MainRight';
import ExpandBtn from './ExpandBtn';
import ImgArrows from './ImgArrows';


class MainBody extends Component {
    static propTypes = {
        user: PropTypes.object
    }
    state = {
        activeImage: 0,
        imageCount: 0,
        carouselDirection: '+',
    }


    componentDidUpdate = (prevProps, prevState) => {
        const { pageContent, activePage } = this.props;
        const imageCount = pageContent[activePage].images ? pageContent[activePage].images.length : 0
        if (prevState.imageCount !== imageCount) {
            this.setState({ imageCount });
        }
        // this is to make sure that activeImage will reset on change page
        if (prevProps.activePage !== activePage) {
            this.setState({ activeImage: 0 });
        }
    }

    nextImage = () => {
        let { activeImage, imageCount, carouselDirection } = this.state;
        carouselDirection = '+'
        activeImage++;
        if (activeImage == imageCount) {
            activeImage = 0;
        }
        this.setState({
            activeImage,
            carouselDirection
        })
    }

    prevImage = () => {
        let { activeImage, imageCount, carouselDirection } = this.state;
        carouselDirection = '-'
        activeImage--;
        if (activeImage == -1) {
            activeImage = imageCount - 1;
        }
        this.setState({
            activeImage,
            carouselDirection
        })
    }

    render() {
        const { imageCount, carouselDirection } = this.state;
        const { updateMainLeftWidth, mainLeftWidth, pageContent, activePage, activeMainPage, updateActivePage, updatePageContent, mainPageNames, nextPage } = this.props;

        return (
            <div ref={e => this.mainBodyRef = e} className='main-body row columns small-12 medium-11 medium-centered'>
                <ExpandBtn imageCount={imageCount} mainLeftWidth={mainLeftWidth} updateMainLeftWidth={updateMainLeftWidth} />
                <div className="show-for-large">
                    <ImgArrows nextImage={this.nextImage} prevImage={this.prevImage} imageCount={imageCount} />
                </div>
                <MainLeft
                    pageContent={pageContent}
                    updateActivePage={updateActivePage}
                    activeMainPage={activeMainPage}
                    activePage={activePage}
                    updatePageContent={updatePageContent}
                    mainLeftWidth={mainLeftWidth}
                    mainPageNames={mainPageNames}
                    nextPage={nextPage}
                    mainBodyRef={this.mainBodyRef}
                />
                <MainRight
                    images={pageContent[activePage].images}
                    carouselDirection={carouselDirection}
                    activeImage={this.state.activeImage}
                    previousImage={this.state.previousImage}
                    nextImage={this.nextImage} prevImage={this.prevImage} imageCount={imageCount}
                />
            </div>
        )
    }
}



export default MainBody;