import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Nav from "../Nav/Nav";
import Main from "../Main/Main.js";
import config from "../config/config.js";
import "./NewSecurity.css";

// PAGE TO CREATE A NEW SECURITY ITEM
class NewSecurity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      name: "",
      category: "",
    };
  }

  componentDidMount() {
    // PULL THE LIST OF CATEGORIES FROM THE DB AND SET IN STATE / USED FOR DROPDOWN MENU
    fetch("http://localhost:8000/api/categories")
      .then((response) => response.json())
      .then((categories) =>
        this.setState({
          categories,
        })
      );
  }

  // HANDLE CHANGE FOR ALL FORM FIELDS ON THE PAGE
  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  // HANDLE FORM SUBMIT
  handleSubmit = (e) => {
    e.preventDefault();

    const { name, category } = this.state;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, category }),
    };

    // POST A NEW SECURITY ITEM TO ADD TO THE DATABASE
    fetch(`${config.REACT_APP_API_ENDPOINT}/api/securityitems`, options)
      .then((response) => response.json())
      .then((response) => {
        // IF AN ERROR IS RETURNED SET IT IN STATE
        if (response.error) {
          this.setState({
            error: response.error,
          });
          // IF NO ERROR IS RETURNED REDIRECT TO /SECURITYITEMS
        } else {
          this.setState({
            name: "",
            error: "",
          });
          this.props.history.push("/security");
        }
      });
  };

  render() {
    // MAP THROUGH ARRAY OF CATEGORIES AND GENERATE CODE TO OUTPUT TO DOM IN DROPDOWN

    const categories = this.state.categories.map((category) => {
      return (
        <option value={category.id} key={category.id}>
          {category.name}
        </option>
      );
    });

    const formDisplay = this.state.categories.length ? (
      <>
        <h1>Add A New Security Item</h1>
        <form className="addNewForm" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Item Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => this.handleChange(e.target.name, e.target.value)}
          />
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            onChange={(e) => this.handleChange(e.target.name, e.target.value)}
          >
            <option value="">Select A Category</option>
            {categories}
          </select>
          <button
            type="submit"
            disabled={!(this.state.name && this.state.category)}
          >
            Submit
          </button>
        </form>
      </>
    ) : (
      <div>
        Before adding Security Items you will need to create a new Category in
        the
        <Link to="/categories"> Categories</Link> section!
      </div>
    );

    return (
      <>
        <Header />
        <Content>
          <Nav />
          <Main>
            <div className="addNewFormContainer">{formDisplay}</div>
          </Main>
        </Content>
      </>
    );
  }
}

export default NewSecurity;
