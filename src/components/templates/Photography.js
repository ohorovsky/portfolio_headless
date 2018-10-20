import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Gallery from 'react-grid-gallery';
import Lightbox from 'react-images';

export default class Photography extends Component {
    static propTypes = {
        prop: PropTypes
    }
    state = {
        lightboxIsOpen: false,

    }
    render() {
        const { heading, paragraphs, photos } = this.props.pageContent;
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
                    <Lightbox
                        images={[
                            { src: '/img/home/4.jpg' },
                            { src: '/img/home/4.jpg' }
                        ]}
                        isOpen={this.state.lightboxIsOpen}
                        onClickPrev={this.gotoPrevLightboxImage}
                        onClickNext={this.gotoNextLightboxImage}
                        onClose={this.closeLightbox}
                    />

                </div>
            </div>
        )
    }
}



// <div className="small-12 medium-10 medium-centered thumbnails__wrapper columns">
//                         {photos.map(photo => {
//                             return (
//                                 <div>
//                                     <div key={photo} className="small-12 medium-10 medium-centered project-thumbnail">
//                                         <img class="image" src={photo.image} alt="" />

//                                     </div>

//                                 </div>
//                             )
//                         })}
//                     </div>