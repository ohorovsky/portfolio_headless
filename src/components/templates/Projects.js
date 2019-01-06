import React, { Component } from 'react';
import { changeActivePage } from '../../helpers';

class Projects extends Component {

    render() {
        const { heading, paragraphs, projects } = this.props.pageContent;
        return (
            <div className={`page projects`}>
                <div className="small-12 large-10 large-centered">
                    <div className="heading__wrapper">
                        <h1 className="page__heading">{heading}</h1>
                    </div>
                    {/* {Object.keys(paragraphs).map(key => {
                        return (
                            <div key={key} className="small-12 large-10 large-centered paragraph__wrapper">
                                <p className="page__paragraph">{paragraphs[key]}</p>
                            </div>

                        )
                    })} */}
                    <div className="small-12 large-10 large-centered thumbnails__wrapper columns">
                        {projects.map(project => {
                            return (

                                <div key={project} className="project-thumbnail" onClick={() => changeActivePage(project.pageRef, this.props)}>
                                    <img class="image" src={project.image} alt={project.name} />
                                    <div className="thumbnail-overlay"></div>
                                    <h2 className="thumbnail-heading" >{project.name}</h2>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}



export default Projects;