import React, { Component }  from 'react';
import posed from 'react-pose';
// import { tween } from 'popmotion';
// const configImg = {
//     active: tween({
//         from: { opacity: 0, x: -100},
//         to: {opacity: 1, x: 0}, // Both x and y will tween to 0
//         //ease: { x: easing.easeOut, y: easing.easeIn }
//       }),
//     left: {opacity: 0, x: -100},
//     right: {opacity: 0, x: 100},
//     // initialPose: 'left'
//   }

const configImg = {
    active: {opacity: 1, x: 0, scale: 1},
    left: {opacity: 0, x: -100, scale: 0.95},
    right: {opacity: 0, x: 100, scale: 0.95},
    // initialPose: 'left'
  }

const Image = posed.div(configImg);



class MainRight extends Component {
    // static propTypes = {
    //     user: PropTypes.object
    // }

    render(){
        let poseConfig;
        const previousImage = this.props.previousImage;
        const currentImage = this.props.activeImage;

        if(previousImage == currentImage+1){
            poseConfig = 'left'
        }else{
            poseConfig = 'right'
        }

        return (
            <div className={`main-right`}>
                {Object.keys(this.props.images).map(key => {
                    return(
                    <Image
                        key={key}
                        index={key}
                        className='background-image'
                        pose={
                            this.props.activeImage == key ? 'active' : poseConfig
                        }
                        style={{
                            backgroundImage: `url(${this.props.images[key]})`
                        }}
                    />


                )})}


            </div>
        )
    }
}



export default MainRight;