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
                {Object.keys(this.props.mainPageNames).map(key => {
                    return(
                    <Button
                        key={key}
                        className='small-nav__link'
                        pose={this.props.activeMainPage === key ? 'active' : 'inactive'}
                        onClick={()=> {
                            this.changePage(key)
                            }}>
                            {this.props.mainPageNames[key]}
                    </Button>
                )})}
            </div>
        )
    }
}



export default SmallNav;