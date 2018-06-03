import React, { Component }  from 'react';

class SmallNav extends Component {
    // static propTypes = {
    //     user: PropTypes.object
    // }
    changePage = (page) => {
        this.props.updatePageContent(page)
    }
    // changeActivePage = (page) => {
    //     this.props.updateActivePage(page)
    // }
    render(){

        return (
            <div className="small-nav">
                <button
                    className='small-nav__link'
                    onClick={()=> {
                        this.changePage('home')
                        //this.changeActivePage('page1')
                        }}>
                        Home
                </button>
                <button className='small-nav__link'>Featured</button>
                <button
                    className='small-nav__link'
                    onClick={()=> {
                        this.changePage('projects')
                        //this.changeActivePage('page1')
                        }}>
                        Projects
                </button>
                <button className='small-nav__link'>Contact</button>
            </div>
        )
    }
}



export default SmallNav;