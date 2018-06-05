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

const ExpandBtn = posed.div(configExpandBtn);
const Wrapper = styled(ExpandBtn)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
`;


class MainBody extends Component {
    // static propTypes = {
    //     user: PropTypes.object
    // }
    changeMainLeftWidth = (e) => {
        this.props.updateMainLeftWidth()
    }
    render(){
        let expandBtnConfig;
        if(Object.keys(this.props.pageContent[this.props.activePage].images).length !== 0){
            console.dir()
            if(this.props.mainLeftWidth === 0){
                expandBtnConfig = 'open'
            }
            if(this.props.mainLeftWidth === 1){
                expandBtnConfig = 'closed'
            }
        }else{
            console.log('no images')
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
                <MainLeft pageContent={this.props.pageContent} updateActivePage={this.props.updateActivePage} activePage={this.props.activePage} updatePageContent={this.props.updatePageContent} mainLeftWidth={this.props.mainLeftWidth}/>
                <MainRight images={this.props.pageContent[this.props.activePage].images} mainLeftWidth={this.props.mainLeftWidth}/>
            </div>
        )
    }
}



export default MainBody;