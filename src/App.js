import React, { Component } from 'react';
import { content, pageNames } from './pagesContent';
import TopBar from './components/TopBar';
import SideNav from './components/SideNav';
import MainBody from './components/MainBody/MainBody';
import Footer from './components/Footer';

import './App.css';



console.log(pageNames)

class App extends Component {

  state = {
    activePage: 'page1',
    activeMainPage: 'home',
    pageContent: content.home,
    mainLeftWidth: content.home.page1.mainLeftWidth,
    mainPageNames: pageNames
  }


  updatePageContent = page => {
    let { pageContent, activePage, mainLeftWidth, activeMainPage } = this.state

    activeMainPage = page;
    activePage = 'page1';
    pageContent = content[page];
    mainLeftWidth = pageContent.page1.mainLeftWidth;

    this.setState({
      pageContent,
      mainLeftWidth,
      activePage,
      activeMainPage
    })
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
        <TopBar />
        <MainBody pageContent={pageContent} updateMainLeftWidth={this.updateMainLeftWidth} updateActivePage={this.updateActivePage} activeMainPage={activeMainPage} activePage={activePage} updatePageContent={this.updatePageContent} mainLeftWidth={mainLeftWidth} mainPageNames={mainPageNames} />
        <SideNav pageContent={pageContent} updateActivePage={this.updateActivePage} activePage={activePage} />
        <Footer />
      </div>
    );
  }
}

export default App;
