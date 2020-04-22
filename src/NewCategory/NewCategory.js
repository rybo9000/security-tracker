import React from "react";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Nav from "../Nav/Nav";
import Main from "../Main/Main.js";
import config from "../config/config.js";
import "./NewCategory.css";

class NewCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };

    console.log("endpoint is " + config.REACT_APP_API_ENDPOINT);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name } = this.state;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    };

    // CALL ENDPOINT TO CREATE A NEW CATEGORY
    fetch(`${config.REACT_APP_API_ENDPOINT}/api/categories`, options)
      .then((response) => response.json())
      .then((response) => {
        // IF AN ERROR IS RETURNED SET IT IN STATE
        if (response.error) {
          this.setState({
            error: response.error,
          });
          // IF NO ERROR IS RETURNED REDIRECT TO /CATEGORIES
        } else {
          this.setState({
            name: "",
            error: "",
          });
          this.props.history.push("/categories");
        }
      });
  };

  // ADJUST STATE FOR ALL FORM FIELDS ON THE PAGE
  handleChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    // IF AN ERROR IS GENERATED IN STATE OUTPUT TO DOM

    const error = this.state.error ? (
      <div className="error">{this.state.error}</div>
    ) : (
      ""
    );

    return (
      <>
        <Header />
        <Content>
          <Nav />
          <Main>
            <div className="addNewFormContainer">
              <h1>Add A New Category</h1>
              <form className="addNewForm" onSubmit={this.handleSubmit}>
                {error}
                <label htmlFor="name">Category Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={(e) =>
                    this.handleChange(e.target.name, e.target.value)
                  }
                />
                <button type="submit" disabled={!this.state.name}>
                  Submit
                </button>
              </form>
            </div>
          </Main>
        </Content>
      </>
    );
  }
}

export default NewCategory;
