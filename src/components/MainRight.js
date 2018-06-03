import React, { Component }  from 'react';
import posed from 'react-pose';

const configBox = {
    open: {width: '100%'},
    closed: { width: '50%' }
  }
const Box = posed.div(configBox);


class MainRight extends Component {
    // static propTypes = {
    //     user: PropTypes.object
    // }

    render(){
        const isOpen = this.props.mainRightIsOpen ? "open" : "closed"
        const divStyle = {
            backgroundImage: `url(${this.props.images.img1})`
          };
        return (
            <Box className={`main-right`} pose={this.props.mainRightIsOpen ? 'open' : 'closed'}>
                <div className="main-right__wrapper">
                    <div className="background-image" style={divStyle}></div>
                </div>
            </Box>
        )
    }
}



export default MainRight;