import React, { Component }  from 'react';

class SmallFooter extends Component {
    // static propTypes = {
    //     user: PropTypes.object
    // }

    render(){

        return (
            <div className="small-footer small-nav">
                <a href='www.facebook.com' className='small-nav__link'>FB</a>
                <a href='www.github.com' className='small-nav__link'>Github</a>
                <a href='www.instagram.com' className='small-nav__link'>Instagram</a>
            </div>
        )
    }
}



export default SmallFooter;