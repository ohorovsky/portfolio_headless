import React, { Component } from 'react';
import {content, pageNames} from './pagesContent';
import TopBar from './components/TopBar';
import SideNav from './components/SideNav';
import MainBody from './components/MainBody';
import Footer from './components/Footer';

import './App.css';



console.log(pageNames)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePage : 'page1',
      activeMainPage : 'home',
      pageContent : content.home,
      mainLeftWidth : content.home.page1.mainLeftWidth,
      mainPageNames : pageNames
    }
  }

  updatePageContent = page => {
      let pageContent = {...this.state.pageContent};
      let activePage = {...this.state.activePage};
      let mainLeftWidth = {...this.state.mainLeftWidth};
      let activeMainPage = {...this.state.activeMainPage};
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
    let pageContent = {...this.state.pageContent};
    let activePage = {...this.state.activePage};
    let mainLeftWidth = {...this.state.mainLeftWidth};


    mainLeftWidth = pageContent[page].mainLeftWidth;

      activePage = page;
      this.setState({
        activePage,
        mainLeftWidth,
      })
  }

  updateMainLeftWidth = () => {
    let mainLeftWidth = this.state.mainLeftWidth;
    if(mainLeftWidth === 0){
      mainLeftWidth = 1
    }else{
      mainLeftWidth = 0
    }
    this.setState({
      mainLeftWidth
    })
  }

  render() {
    return (
      <div className="app__wrapper">
        <div className="body-background-left"></div>
        <div className="body-background-right"></div>
        <TopBar />
        <MainBody pageContent={this.state.pageContent} updateMainLeftWidth={this.updateMainLeftWidth} updateActivePage={this.updateActivePage} activeMainPage={this.state.activeMainPage} activePage={this.state.activePage} updatePageContent={this.updatePageContent} mainLeftWidth={this.state.mainLeftWidth} mainPageNames={this.state.mainPageNames}/>
        <SideNav pageContent={this.state.pageContent} updateActivePage={this.updateActivePage} activePage={this.state.activePage}/>
        <Footer />
      </div>
    );
  }
}

export default App;
