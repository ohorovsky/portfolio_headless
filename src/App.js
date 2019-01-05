import React, { Component } from 'react';
import { content, pageNames } from './pagesContent';
import TopBar from './components/TopBar';
import SideNav from './components/SideNav';
import MainBody from './components/MainBody/MainBody';
import './App.css';
import SmallFooter from './components/MainBody/SmallFooter';




class App extends Component {

  state = {
    activePage: 0,
    activeMainPage: 'home',
    pageContent: content.home,
    mainLeftWidth: content.home[0].mainLeftWidth,
    mainPageNames: pageNames
  }

  componentDidMount = () => {
    const page = this.props.location.pathname.substr(1)
    this.updatePageContent(page)
  }



  updatePageContent = page => {
    let { pageContent, activePage, mainLeftWidth, activeMainPage } = this.state

    activeMainPage = page;
    activePage = 0;
    pageContent = content[page] ? content[page] : null;
    if (pageContent) {
      mainLeftWidth = pageContent[0].mainLeftWidth;

      this.setState({
        pageContent,
        mainLeftWidth,
        activePage,
        activeMainPage
      })
    }
  }
  updateActivePage = page => {
    let { pageContent, activePage, mainLeftWidth } = this.state
    mainLeftWidth = pageContent[page].mainLeftWidth;
    activePage = page;
    this.setState({
      activePage,
      mainLeftWidth,
    })
  }

  nextPage = () => {
    let { pageContent, activePage, mainLeftWidth } = this.state
    if (activePage < pageContent.length - 1) {
      activePage++;
      mainLeftWidth = pageContent[activePage].mainLeftWidth;
      this.setState({
        activePage,
        mainLeftWidth,
      })
    }
  }

  updateMainLeftWidth = () => {
    let { mainLeftWidth } = this.state;
    (mainLeftWidth === 0) ? mainLeftWidth = 1 : mainLeftWidth = 0

    this.setState({
      mainLeftWidth
    })
  }

  render() {
    const { pageContent, activeMainPage, activePage, mainLeftWidth, mainPageNames } = this.state
    return (
      <div className="app__wrapper">
        <div className="body-background-left"></div>
        <div className="body-background-right"></div>
        <TopBar
          mainPageNames={mainPageNames}
          updatePageContent={this.updatePageContent}
          activeMainPage={activeMainPage}
        />
        <MainBody
          pageContent={pageContent}
          activePage={activePage}
          updateMainLeftWidth={this.updateMainLeftWidth}
          updateActivePage={this.updateActivePage}
          activeMainPage={activeMainPage}
          activePage={activePage}
          updatePageContent={this.updatePageContent}
          mainLeftWidth={mainLeftWidth}
          mainPageNames={mainPageNames}
          nextPage={this.nextPage}
        />
        {pageContent.length > 1 && (
          <SideNav pageContent={pageContent} updateActivePage={this.updateActivePage} activePage={activePage} />
        )}
        <div className="hide-for-large small-12 medium-11 medium-centered columns">
          <SmallFooter />
        </div>
      </div>
    );
  }
}

export default App;
