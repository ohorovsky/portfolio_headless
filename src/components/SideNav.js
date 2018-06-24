import React, { Component }  from 'react';
import posed from 'react-pose';
import { changeActivePage } from '../helpers';


const configButton = {
    active: {scale: 1.5, backgroundColor: '#F9BB4C'},
    inactive: { scale: 1, backgroundColor: 'rgb(252, 224, 175)' }
  }

const Button = posed.div(configButton);
class SideNav extends Component {
    changeActivePage = (page) => {
        this.props.updateActivePage(page)
    }
    render(){
        return (
            <div className="side-nav">

                {Object.keys(this.props.pageContent).map(key => <Button key={key} className='side-nav-button__wrapper' pose={this.props.activePage === key ? 'active' : 'inactive'}><button key={key} index={key} onClick={()=> changeActivePage(key, this.props)}></button></Button>)}

            </div>
        )
    }
}



export default SideNav;