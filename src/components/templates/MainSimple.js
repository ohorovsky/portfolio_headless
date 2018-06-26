import React, { Component }  from 'react';

class MainSimple extends Component {

    render(){
        const {heading, paragraphs} = this.props.pageContent;
        return (
            <div className={`page mainSimple`}>
                <div className="small-12 medium-10 medium-centered">
                    <div className="heading__wrapper">
                        <h1 className="page__heading">{heading}</h1>
                    </div>
                    {Object.keys(paragraphs).map(key => {
                        return(
                            <div key={key} className="small-12 medium-10 medium-centered paragraph__wrapper">
                                <p className="page__paragraph">{paragraphs[key]}</p>
                            </div>

                    )})}
                </div>
            </div>
        )
    }
}



export default MainSimple;