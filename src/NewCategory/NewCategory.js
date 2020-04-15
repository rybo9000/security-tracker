import React from "react";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Nav from "../Nav/Nav";
import Main from "../Main/Main.js";
import "./NewCategory.css";

class NewCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <Content>
          <Nav />
          <Main>
            <div className="addNewFormContainer">
              <h1>Add A New Category</h1>
              <form className="addNewForm">
                <label htmlFor="name">Category Name</label>
                <input type="text" id="name" name="name" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </Main>
        </Content>
      </>
    );
  }
}

export default NewCategory;
