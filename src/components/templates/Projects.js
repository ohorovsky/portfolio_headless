import React, { Component } from 'react';
import { changeActivePage } from '../../helpers';

class Projects extends Component {

    render() {
        const { heading, paragraphs, projects } = this.props.pageContent;
        return (
            <div className={`page projects`}>
                <div className="small-12 medium-10 medium-centered">
                    <div className="heading__wrapper">
                        <h1 className="page__heading">{heading}</h1>
                    </div>
                    {Object.keys(paragraphs).map(key => {
                        return (
                            <div key={key} className="small-12 medium-10 medium-centered paragraph__wrapper">
                                <p className="page__paragraph">{paragraphs[key]}</p>
                            </div>

                        )
                    })}
                    <div className="small-12 medium-10 medium-centered thumbnails__wrapper columns">
                        {projects.map(project => {
                            return (
                                <div>
                                    <div key={project} className="small-12 medium-10 medium-centered project-thumbnail" onClick={() => changeActivePage(project.pageRef, this.props)}>
                                        <img class="image" src={project.image} alt={project.name} />
                                        <p className="page__paragraph" >{project.name}</p>
                                    </div>

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