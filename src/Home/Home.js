import React from "react";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Nav from "../Nav/Nav";
import Main from "../Main/Main.js";
import Welcome from "../Welcome/Welcome";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Content>
          <Nav />
          <Main>
            <Welcome />
          </Main>
        </Content>
      </>
    );
  }
}

export default Home;
