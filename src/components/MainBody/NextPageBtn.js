import React, { Component } from 'react'
import { Svg } from '../../utilities'

export default class NextPageBtn extends Component {
    render() {
        const { nextPage, mainBodyRef } = this.props;
        return (
            <div className="next-page__wrapper">
                <button type="button" className="button__wrapper" onClick={() => nextPage(mainBodyRef)} title="Next Page" aria-label="Next Page" aria-labelledby="Next Page">
                    <span>Next</span>
                    <div className="svg__wrapper">
                        <Svg name="next" />
                    </div>
                </button>
            </div>
        )
    }
}
