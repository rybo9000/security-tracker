import React from "react";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Nav from "../Nav/Nav";
import Main from "../Main/Main.js";
import "./NewSecurity.css";

class NewSecurity extends React.Component {
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
              <h1>Add A New Security Item</h1>
              <form className="addNewForm">
                <label htmlFor="name">Item Name</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="category">Category</label>
                <select>
                  <option value="">Select A Category</option>
                </select>
                <button type="submit">Submit</button>
              </form>
            </div>
          </Main>
        </Content>
      </>
    );
  }
}

export default NewSecurity;
