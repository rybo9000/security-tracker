import React from "react";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Nav from "../Nav/Nav";
import Main from "../Main/Main.js";
import Item from "../Item/Item";
import AddNewButton from "../AddNewButton/AddNewButton";

class Categories extends React.Component {
  constructor(props) {
    super(props);

    const dummyCategories = [
      {
        name: "Partial",
        id: 2,
      },
      {
        name: "Repeatable",
        id: 4,
      },
      {
        name: "Adaptive",
        id: 7,
      },
    ];

    this.state = {
      categories: dummyCategories,
    };
  }

  render() {
    const categories = this.state.categories.map((category) => {
      return <Item itemName={category.name} key={category.id} />;
    });
    return (
      <>
        <Header />
        <Content>
          <Nav />
          <Main>
            <AddNewButton link="/addcategory" thing="Category" />
            {categories}
          </Main>
        </Content>
      </>
    );
  }
}

export default Categories;
