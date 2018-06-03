import React, { Component }  from 'react';
import SmallNav from './SmallNav';
import SmallFooter from './SmallFooter';
import PageLeft from './PageLeft';
import posed from 'react-pose';


const configBox = {
    open: {width: '100%'},
    closed: { width: '50%' }
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


        return (
            <Box className={`main-left`} pose={this.props.mainLeftIsOpen ? 'open' : 'closed'}>
                <div className="main-left__wrapper">
                    <SmallNav updatePageContent={this.props.updatePageContent} updateActivePage={this.props.updateActivePage}/>
                    {Object.keys(this.props.pageContent).map(key => <Page className='page__wrapper' pose={this.props.activePage === key ? 'active' : 'inactive'}><PageLeft key={key} index={key} pageContent={this.props.pageContent[key]}/></Page>)}
                    <SmallFooter />
                </div>
            </Box>
        )
    }
}



export default MainLeft;