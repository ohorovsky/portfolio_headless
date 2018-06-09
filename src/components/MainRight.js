import React, { Component }  from 'react';
import posed from 'react-pose';



// const configBox = {
//     open: {width: '100%'},
//     half: { width: '50%' },
//     closed: { width: '0%' }
//   }

// const Box = posed.div(configBox);



class MainRight extends Component {
    // static propTypes = {
    //     user: PropTypes.object
    // }

    render(){
        let poseConfig;

        // if(this.props.mainLeftWidth === 0){
        //     poseConfig = 'open'
        // }
        // if(this.props.mainLeftWidth === 1){
        //     poseConfig = 'half'
        // }
        // if(this.props.mainLeftWidth === 2){
        //     poseConfig = 'closed'
        // }
        const divStyle = {
            backgroundImage: `url(${this.props.images.img1})`
          };
        return (
            <div className={`main-right`}>


                    <div className="background-image" style={divStyle}></div>

            </div>
        )
    }
}



export default MainRight;