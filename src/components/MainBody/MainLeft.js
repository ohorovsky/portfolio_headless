import React, { Component } from "react";
import SmallNav from "../SmallNav";
import SmallFooter from "./SmallFooter";
import PageLeft from "./PageLeft";
import posed, { PoseGroup } from "react-pose";

const configBox = {
  open: { flexBasis: "100%", opacity: 1, width: "auto", scale: 1 },
  half: { flexBasis: "50%", opacity: 1, width: "auto", scale: 1 },
  closed: { flexBasis: "0%", opacity: 0, width: 0, scale: 0 }
};

const Box = posed.div(configBox);

const configPage = {
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 }
};

const Page = posed.div(configPage);
class MainLeft extends Component {
  // static propTypes = {
  //     user: PropTypes.object
  // }




  render() {
    const { pageContent, activePage, updatePageContent, updateActivePage, activeMainPage, mainPageNames, mainLeftWidth } = this.props
    let boxPoseConfig;
    mainLeftWidth === 0 ? boxPoseConfig = "closed" : null
    mainLeftWidth === 1 ? boxPoseConfig = "half" : null
    mainLeftWidth === 2 ? boxPoseConfig = "open" : null

    return (
      <Box className={`main-left`} pose={boxPoseConfig}>
        <div className="main-left__wrapper">
          <SmallNav
            updatePageContent={updatePageContent}
            updateActivePage={updateActivePage}
            activeMainPage={activeMainPage}
            mainPageNames={mainPageNames}
          />
          <div className="pages__wrapper">
            <PoseGroup animateOnMount>
              {pageContent.map((key, index) => {
                if (activePage == index) {
                  return (
                    <Page
                      key={index}
                      className="page__wrapper"
                    >
                      <PageLeft
                        index={index}
                        pageContent={pageContent[index]}
                        updateActivePage={updateActivePage}
                      />
                    </Page>
                  )
                }
              })}
            </PoseGroup>
          </div>
          <SmallFooter />
        </div>
      </Box>
    );
  }
}

export default MainLeft;
