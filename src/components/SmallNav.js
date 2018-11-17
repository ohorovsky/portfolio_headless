import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import posed from 'react-pose';

const configButton = {
    active: { fontSize: '19px', color: '#4A4A4A', fontWeight: 800 },
    inactive: { fontSize: '15px', color: '#747474', fontWeight: 300 }
}

const Button = posed.div(configButton);
class SmallNav extends Component {
    // static propTypes = {
    //     user: PropTypes.object
    // }
    changePage = (page) => {
        this.props.updatePageContent(page)
    }
    render() {
        return (
            <div className="small-nav">
                <div className="links__wrapper">
                    {Object.keys(this.props.mainPageNames).map(key => {
                        return (
                            <Link to={`/${key}`}>
                                <Button
                                    key={key}
                                    className='small-nav__link'
                                    pose={this.props.activeMainPage === key ? 'active' : 'inactive'}
                                    onClick={() => {
                                        this.changePage(key)
                                    }}>
                                    {this.props.mainPageNames[key]}
                                </Button>
                            </Link>
                        )
                    })}
                </div>
                <div className="decor-line"></div>
            </div>
        )
    }
}



export default SmallNav;