import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import posed from 'react-pose';

const MenuWrapperPose = posed.div({
    open: { x: '0%', staggerChildren: 100 },
    closed: { x: '100%' }
})

const LinkPose = posed.div({
    open: { x: '0%', opacity: 1 },
    closed: { x: '100%', opacity: 0 }
})

export default class MobileMenu extends Component {
    static propTypes = {
        prop: PropTypes
    }
    changePage = (page) => {
        this.props.updatePageContent(page)
    }
    render() {
        const { mainPageNames, activeMainPage, menuActive, activateMenu } = this.props;
        return (
            <MenuWrapperPose pose={menuActive ? 'open' : 'closed'} className="mobile-menu">
                <div className="links__wrapper">
                    {Object.keys(mainPageNames).map(key => {
                        return (
                            <Link to={`/${key}`}>
                                <LinkPose
                                    key={key}
                                    className={`mobile-menu-link ${activeMainPage === key ? 'active' : ''}`}
                                    onClick={() => {
                                        this.changePage(key)
                                        activateMenu()
                                    }}>
                                    {mainPageNames[key]}
                                </LinkPose>
                            </Link>
                        )
                    })}
                </div>
            </MenuWrapperPose>
        )
    }
}
