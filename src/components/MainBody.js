import React, { Component }  from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import MainLeft from './MainLeft';
import MainRight from './MainRight';

const configExpandBtn = {
    open: {scale: 1, rotate: 0},
    closed: { scale: 1, rotate: 45},
    hidden: {scale: 0}
  }
  const configImgArrows = {
      show: {scale: 1},
      hidden: {scale:0}
  }
const ImgArrows = posed.div(configImgArrows)
const ExpandBtn = posed.div(configExpandBtn);
const Wrapper = styled(ExpandBtn)`
  position: absolute;
  top: 1rem;
  right: 2rem;
  z-index: 1;
`;


class MainBody extends Component {
    // static propTypes = {
    //     user: PropTypes.object
    // }
    constructor(props) {
        super(props)
        this.state = {
            activeImage : 0,
            previousImage : 0,
        }
      }

    changeMainLeftWidth = () => {
        this.props.updateMainLeftWidth()
    }
    changeImage = (increment) => {
        // Get values from state
        let activeImage = this.state.activeImage;
        let previousImage = this.state.previousImage;
        // Set previous image to current active image
        previousImage = activeImage;
        // Check how many images are available
        const imageCount = (Object.keys(this.props.pageContent[this.props.activePage].images).length) - 1
        // Depending on function's attribute (true or false) determining if incr/decr
        if(increment){
            activeImage === imageCount ? activeImage = 0 : activeImage++
        }else{
            activeImage === 0 ? activeImage = imageCount : activeImage--
        }
        this.setState({
            activeImage,
            previousImage
        })
    }

    render(){
        let expandBtnConfig;
        let imgArrowsConfig;

        const imageCount = Object.keys(this.props.pageContent[this.props.activePage].images).length
        imageCount > 1 ? imgArrowsConfig = 'show' : imgArrowsConfig = 'hidden'
        if(imageCount !== 0){
            if(this.props.mainLeftWidth === 0){
                expandBtnConfig = 'open'
            }
            if(this.props.mainLeftWidth === 1){
                expandBtnConfig = 'closed'
            }
        }else{
            expandBtnConfig = 'hidden'
        }
        return (
            <div className='main-body columns small-12 medium-11 medium-centered'>
                <Wrapper pose={expandBtnConfig} onClick={() => this.changeMainLeftWidth()}>
                    <svg  version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 768 768">
                        <title></title>
                        <g id="icomoon-ignore">
                        </g>
                        <path fill="#F9BB4C" d="M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z"></path>
                    </svg>
                </Wrapper>
                <ImgArrows pose={imgArrowsConfig} className="img-buttons__wrapper">
                    <button className="img-button" onClick={() => this.changeImage(false)}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="768" height="768" viewBox="0 0 768 768">
                            <title></title>
                            <g id="icomoon-ignore">
                            </g>
                            <path fill="#000" d="M493.5 514.5l-45 45-192-192 192-192 45 45-147 147z"></path>
                        </svg>
                    </button>
                    <button className="img-button" onClick={() => this.changeImage(true)}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="768" height="768" viewBox="0 0 768 768">
                            <title></title>
                            <g id="icomoon-ignore">
                            </g>
                            <path fill="#000" d="M274.5 523.5l147-147-147-147 45-45 192 192-192 192z"></path>
                        </svg>
                    </button>
                </ImgArrows>
                <MainLeft pageContent={this.props.pageContent} updateActivePage={this.props.updateActivePage} activeMainPage={this.props.activeMainPage} activePage={this.props.activePage} updatePageContent={this.props.updatePageContent} mainLeftWidth={this.props.mainLeftWidth} mainPageNames={this.props.mainPageNames}/>
                <MainRight images={this.props.pageContent[this.props.activePage].images} mainLeftWidth={this.props.mainLeftWidth} activeImage={this.state.activeImage} previousImage={this.state.previousImage}/>
            </div>
        )
    }
}



export default MainBody;