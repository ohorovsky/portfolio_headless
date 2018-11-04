import React, { Component } from 'react';
import MainLeft from './MainLeft';
import MainRight from './MainRight';
import ExpandBtn from './ExpandBtn';
import ImgArrows from './ImgArrows';


class MainBody extends Component {
    // static propTypes = {
    //     user: PropTypes.object
    // }
    state = {
        activeImage: 0,
        imageCount: 0,
        carouselDirection: '+',
    }


    componentDidUpdate = (prevProps, prevState) => {
        const { pageContent, activePage } = this.props;
        const imageCount = pageContent[activePage].images.length
        prevState.imageCount !== imageCount ? this.setState({ imageCount }) : null
        // this is to make sure that activeImage will reset on change page
        prevProps.activePage !== activePage ? this.setState({ activeImage: 0 }) : null

    }

    nextImage = () => {
        let { activeImage, imageCount, carouselDirection } = this.state;
        carouselDirection = '+'
        activeImage++;
        activeImage == imageCount ? activeImage = 0 : null
        this.setState({
            activeImage,
            carouselDirection
        })
    }

    prevImage = () => {
        let { activeImage, imageCount, carouselDirection } = this.state;
        carouselDirection = '-'
        activeImage--;
        activeImage == -1 ? activeImage = imageCount - 1 : null
        this.setState({
            activeImage,
            carouselDirection
        })
    }

    render() {
        const { imageCount, carouselDirection } = this.state;
        const { updateMainLeftWidth, mainLeftWidth, pageContent, activePage, activeMainPage, updateActivePage, updatePageContent, mainPageNames } = this.props;

        return (
            <div className='main-body columns small-12 medium-11 medium-centered'>
                <ExpandBtn imageCount={imageCount} mainLeftWidth={mainLeftWidth} updateMainLeftWidth={updateMainLeftWidth} />
                <ImgArrows nextImage={this.nextImage} prevImage={this.prevImage} imageCount={imageCount} />
                <MainLeft
                    pageContent={pageContent}
                    updateActivePage={updateActivePage}
                    activeMainPage={activeMainPage}
                    activePage={activePage}
                    updatePageContent={updatePageContent}
                    mainLeftWidth={mainLeftWidth}
                    mainPageNames={mainPageNames}
                />
                <MainRight
                    images={pageContent[activePage].images}
                    carouselDirection={carouselDirection}
                    activeImage={this.state.activeImage}
                    previousImage={this.state.previousImage}
                />
            </div>
        )
    }
}



export default MainBody;

