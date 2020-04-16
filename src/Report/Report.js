import React from "react";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Nav from "../Nav/Nav";
import Main from "../Main/Main.js";

class Report extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Content>
          <Nav />
          <Main>
            <h1>Report For Client ID {this.props.match.params.id}</h1>
          </Main>
        </Content>
      </>
    );
  }
}

export default Report;
