import React, { Component }  from 'react';
import MainLeft from './MainLeft';
import MainRight from './MainRight';
class MainBody extends Component {
    // static propTypes = {
    //     user: PropTypes.object
    // }

    render(){

        return (
            <div className='main-body columns small-12 medium-11 medium-centered'>
                <MainLeft pageContent={this.props.pageContent} updateActivePage={this.props.updateActivePage} activePage={this.props.activePage} updatePageContent={this.props.updatePageContent} mainLeftWidth={this.props.mainLeftWidth}/>
                <MainRight images={this.props.pageContent[this.props.activePage].images} mainLeftWidth={this.props.mainLeftWidth}/>
            </div>
        )
    }
}



export default MainBody;