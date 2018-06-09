import React, { Component }  from 'react';
import SmallNav from './SmallNav';
import SmallFooter from './SmallFooter';
import PageLeft from './PageLeft';
import posed from 'react-pose';


const configBox = {
    open: {flexBasis:'100%'},
    half: { flexBasis: '50%' },
    closed: { flexBasis: '0%' }
  }

const Box = posed.div(configBox);

const configPage = {
    active: {opacity: 1, position: 'relative', y:0},
    inactive: {opacity: 0, position: 'absolute', y:-50}
  }

const Page = posed.div(configPage);
class MainLeft extends Component {
    // static propTypes = {
    //     user: PropTypes.object
    // }

    render(){
        let poseConfig;
        if(this.props.mainLeftWidth === 0){
            poseConfig = 'closed'
        }
        if(this.props.mainLeftWidth === 1){
            poseConfig = 'half'
        }
        if(this.props.mainLeftWidth === 2){
            poseConfig = 'open'
        }

        return (
            <Box className={`main-left`} pose={poseConfig}>
                <div className="main-left__wrapper">
                    <SmallNav updatePageContent={this.props.updatePageContent} updateActivePage={this.props.updateActivePage} activeMainPage={this.props.activeMainPage} mainPageNames={this.props.mainPageNames}/>
                    {Object.keys(this.props.pageContent).map(key => <Page key={key} className='page__wrapper' pose={this.props.activePage === key ? 'active' : 'inactive'}><PageLeft key={key} index={key} pageContent={this.props.pageContent[key]}/></Page>)}
                    <SmallFooter />
                </div>
            </Box>
        )
    }
}



export default MainLeft;