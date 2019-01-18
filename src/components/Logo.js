import React, { Component } from 'react'

export default class Logo extends Component {
    render() {
        return (
            <div className="row columns small-12 medium-11 medium-centered logo__wrapper">
                <img className="logo" src="/img/logo.png" alt="On-Dro logo" />
            </div>
        )
    }
}
