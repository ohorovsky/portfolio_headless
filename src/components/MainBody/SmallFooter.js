import React, { Component } from 'react';
import { Svg } from '../../utilities';

class SmallFooter extends Component {

    render() {

        return (
            <div className="small-footer small-nav">
                <a href='https://www.facebook.com/ondrej.horovsky' title="Facebook" target="_blank" rel="noreferrer" className='small-nav__link'>
                    <Svg name="facebook" />
                </a>
                <a href='https://github.com/ohorovsky' title="Github" rel="noreferrer" className='small-nav__link'>
                    <Svg name="github" />
                </a>
                <a href='https://www.instagram.com/ohorovsky' title="Instagram" rel="noreferrer" className='small-nav__link'>
                    <Svg name="instagram" />
                </a>
            </div>
        )
    }
}



export default SmallFooter;