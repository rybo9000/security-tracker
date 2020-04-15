import React from "react";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Nav from "../Nav/Nav";
import Main from "../Main/Main.js";
import Item from "../Item/Item";

import "./EditClient.css";

class EditClient extends React.Component {
  constructor(props) {
    super(props);

    const dummyItems = [
      {
        name: "Antivirus",
        id: 2,
      },
      {
        name: "Firewall",
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

  render() {
    const items = this.state.items.map((item) => {
      return <Item itemName={item.name} checkBox />;
    });

    return (
      <>
        <Header />
        <Content>
          <Nav />
          <Main>
            <div className="editClientContainer">
              <h1>Editing Client With ID {this.props.match.params.id}</h1>
              {items}
            </div>
          </Main>
        </Content>
      </>
    );
  }
}

export default EditClient;
