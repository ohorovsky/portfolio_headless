import React, { Component }  from 'react';
import { changeActivePage } from '../../helpers';

class Projects extends Component {

    render(){
        const {heading, paragraphs, projects} = this.props.pageContent;
        return (
            <div className={`page projects`}>
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
                    {Object.keys(projects).map(key => {
                        return(
                            <div key={key} className="small-12 medium-10 medium-centered paragraph__wrapper">
                                <p className="page__paragraph" onClick={()=> changeActivePage(projects[key].pageRef, this.props)}>{projects[key].name}</p>
                            </div>

                    )})}
                </div>
            </div>
        )
    }
}



export default Projects;