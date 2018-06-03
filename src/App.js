import React, { Component } from 'react';
import content from './pagesContent';
import TopBar from './components/TopBar';
import SideNav from './components/SideNav';
import MainBody from './components/MainBody';
import Footer from './components/Footer';

import './App.css';





class App extends Component {

  state = {
    posts: [],
    mainLeftIsOpen: '',
    mainRightIsOpen: '',
    pageContent: {},
    activePage: ''
  }


  componentWillMount(){
    //1. take a copy of the current state
    let pageContent = {...this.state.pageContent};
    let mainLeftIsOpen = {...this.state.mainLeftIsOpen};
    let mainRightIsOpen = {...this.state.mainRightIsOpen};
    let activePage = {...this.state.activePage};
    //2. update that state
    activePage = 'page1';
    pageContent = content.home;
    mainLeftIsOpen = content.home.page1.leftFullWidth;
    mainRightIsOpen = content.home.page1.rightFullWidth;
    //3. set state
    this.setState({
      pageContent,
      mainLeftIsOpen,
      mainRightIsOpen,
      activePage
    });
    const postsURL = 'http://invizzible:8/index.php/wp-json/wp/v2/posts';
    fetch(postsURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        posts: response
      })
    })
  }

  updatePageContent = page => {
      let pageContent = {...this.state.pageContent};
      let activePage = {...this.state.activePage};
      let mainLeftIsOpen = {...this.state.mainLeftIsOpen};
      let mainRightIsOpen = {...this.state.mainRightIsOpen};
      activePage = 'page1';
      pageContent = content[page];
      mainLeftIsOpen = pageContent.page1.leftFullWidth;
      mainRightIsOpen = pageContent.page1.rightFullWidth;
      this.setState({
        pageContent,
        mainLeftIsOpen,
        mainRightIsOpen,
        activePage
      })
  }
  updateActivePage = page => {
    let pageContent = {...this.state.pageContent};
    let activePage = {...this.state.activePage};
    let mainLeftIsOpen = {...this.state.mainLeftIsOpen};
    let mainRightIsOpen = {...this.state.mainRightIsOpen};

    mainLeftIsOpen = pageContent[page].leftFullWidth;
    mainRightIsOpen = pageContent[page].rightFullWidth;
      activePage = page;
      this.setState({
        activePage,
        mainLeftIsOpen,
        mainRightIsOpen
      })
  }

  render() {

    return (
      <div className="app__wrapper">
        <div className="body-background-left"></div>
        <div className="body-background-right"></div>
        <TopBar />
        <MainBody pageContent={this.state.pageContent} updateActivePage={this.updateActivePage} activePage={this.state.activePage} updatePageContent={this.updatePageContent} mainLeftIsOpen={this.state.mainLeftIsOpen} mainRightIsOpen={this.state.mainRightIsOpen}/>
        <SideNav pageContent={this.state.pageContent} updateActivePage={this.updateActivePage} activePage={this.state.activePage}/>
        <Footer />
      </div>
    );
  }
}

export default App;
