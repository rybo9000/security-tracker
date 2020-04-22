import React from "react";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Nav from "../Nav/Nav";
import Main from "../Main/Main.js";
import Item from "../Item/Item";
import AddNewButton from "../AddNewButton/AddNewButton";
import config from "../config/config.js";

class SecurityItems extends React.Component {
  constructor(props) {
    super(props);

    // DUMMY DATA TO BE USED UNTIL FETCH REQUEST POPULATES STATE

    const dummyItems = [
      {
        name: "Antivirus",
        id: 2,
      },
      {
        name: "Multifactor",
        id: 4,
      },
      {
        name: "SIEM",
        id: 7,
      },
    ];

    this.state = {
      items: dummyItems,
    };
  }

  // PULL LIST OF SECURITY ITEMS FROM DB AND SET IN STATE
  componentDidMount() {
    fetch(`${config.REACT_APP_API_ENDPOINT}/api/securityitems`)
      .then((response) => response.json())
      .then((items) =>
        this.setState({
          items,
        })
      );
  }

  render() {
    // ITERATE THROUGH ARRAY IN STATE AND GENERATE CODE TO OUTPUT TO DOM

    const items = this.state.items.map((item) => {
      return <Item itemName={item.name} key={item.id} />;
    });
    return (
      <>
        <Header />
        <Content>
          <Nav />
          <Main>
            <AddNewButton link="/addsecurity" thing="Item" />
            {items}
          </Main>
        </Content>
      </>
    );
  }
}

export default SecurityItems;
