import React, { Component }  from 'react';
import posed from 'react-pose';

const configButton = {
    active: {scale: 1.1, color: '#F9BB4C', fontWeight: 800},
    inactive: { scale: 0.9, color: '#747474', fontWeight: 300 }
  }

const Button = posed.div(configButton);
class SmallNav extends Component {
    // static propTypes = {
    //     user: PropTypes.object
    // }
    changePage = (page) => {
        this.props.updatePageContent(page)
    }
    render(){
        return (
            <div className="small-nav">
                <Button
                    pose={this.props.activeMainPage === 'home' ? 'active' : 'inactive'}
                    className='small-nav__link'
                    onClick={()=> {
                        this.changePage('home')
                        }}>
                        Home
                </Button>
                <Button
                    pose={this.props.activeMainPage === 'featured' ? 'active' : 'inactive'}
                    className='small-nav__link'>Featured</Button>
                <Button
                    pose={this.props.activeMainPage === 'projects' ? 'active' : 'inactive'}
                    className='small-nav__link'
                    onClick={()=> {
                        this.changePage('projects')
                        }}>
                        Projects
                </Button>
                <Button
                    pose={this.props.activeMainPage === 'contact' ? 'active' : 'inactive'}
                    className='small-nav__link'>Contact</Button>
            </div>
        )
    }
}



export default SmallNav;