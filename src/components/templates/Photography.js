

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StackGrid, { transitions } from 'react-stack-grid';
import pose from 'react-pose';
import 'lightgallery.js';

const Button = pose.button({
    active: { fontSize: '19px', color: '#4A4A4A', fontWeight: 800 },
    inactive: { fontSize: '15px', color: '#747474', fontWeight: 300 }
})
export default class Photography extends Component {
    static propTypes = {
        prop: PropTypes
    }
    state = {
        galleryWidth: '',
        activeFilter: 'all',
    }

    gallery = React.createRef();

    componentDidMount = () => {
        this.setState({
            galleryWidth: this.gallery.clientWidth,
        });

        setTimeout(() => {
            window.lightGallery(this.gallery.current, {
                selector: '.gallery-item-type-all',
            });
        }, 100)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.animationFinished !== this.props.animationFinished) {
            setTimeout(() => {
                window.lightGallery(this.gallery.current, {
                    selector: '.gallery-item-type-all',
                });
            }, 100)
        }

        // only create new lightgallery when filter was changed
        if (prevState.activeFilter !== this.state.activeFilter) {
            const selector =
                this.state.activeFilter == 'all'
                    ? '.gallery-item-type-all'
                    : `.gallery-item-type-${this.state.activeFilter}`;
            window.lightGallery(this.gallery.current, {
                selector,
            });
        }
    };

    filterChange(filter) {
        let { activeFilter } = this.state;
        // destroy lightgallery only when  you click to change filter (not on same one)
        if (filter !== activeFilter) {
            console.log(this.gallery.current.getAttribute('lg-uid'), window.lgData)
            window.lgData[this.gallery.current.getAttribute('lg-uid')].destroy(true);
        }
        // update state
        activeFilter = filter;
        this.setState({
            activeFilter,
        });
    }


    render() {
        const { activeFilter, galleryWidth } = this.state;
        const { pageContent, animationFinished } = this.props;
        const { heading, filter, photos } = pageContent;

        const { scaleDown } = transitions;

        return (
            <div className={`page photography`}>
                <div className="small-12 medium-10 medium-centered">
                    <div className="heading__wrapper">
                        <h1 className="page__heading">{heading}</h1>
                    </div>
                    <div className="filter__wrapper">
                        <Button pose={activeFilter == 'all' ? 'active' : 'inactive'} type="button" className="filter-item" onClick={() => this.filterChange('all')}>
                            <span>All</span>
                        </Button>
                        {filter.map((filterType, index) => (
                            <Button pose={activeFilter == filterType ? 'active' : 'inactive'} key={(index)} type="button" className="filter-item" onClick={() => this.filterChange(filterType)}>
                                <span>{filterType}</span>
                            </Button>
                        ))}
                    </div>

                    <div id="lightgallery" ref={this.gallery}>
                        <StackGrid
                            monitorImagesLoaded
                            columnWidth={galleryWidth <= 768 ? '100%' : '25%'}
                            appear={scaleDown.appear}
                            appeared={scaleDown.appeared}
                            enter={scaleDown.enter}
                            entered={scaleDown.entered}
                            leaved={scaleDown.leaved}
                            easing="cubic-bezier(0.86, 0, 0.07, 1)"
                        >
                            {photos.map((photo, index) => {
                                const path = photo.src;
                                const filter = photo.filter;


                                if (filter == activeFilter) {
                                    return (
                                        <a
                                            key={`gallery-item-${index}`}
                                            className={`gallery-item gallery-item-type-${filter}`}
                                            href={path}
                                            data-src={path}
                                        >
                                            <img src={path} alt={filter} />
                                        </a>
                                    );
                                }
                                if (activeFilter == 'all') {

                                    return (
                                        <a key={index} className="gallery-item gallery-item-type-all " href={path} data-src={path}>
                                            <img src={path} alt={filter} />
                                        </a>
                                    );
                                }
                            })}
                        </StackGrid>
                    </div>
                </div>
            </div>
        )


    }
}
