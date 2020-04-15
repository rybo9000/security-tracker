import React from "react";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Nav from "../Nav/Nav";
import Main from "../Main/Main.js";
import Item from "../Item/Item";
import AddNewButton from "../AddNewButton/AddNewButton";

class Clients extends React.Component {
  constructor(props) {
    super(props);

    const dummyClients = [
      {
        name: "City National Bank",
        id: 2,
      },
      {
        name: "Johnson Manufacturing",
        id: 4,
      },
      {
        name: "Red Plumbing Services",
        id: 7,
      },
    ];

    this.state = {
      clients: dummyClients,
    };
  }

  render() {
    const clients = this.state.clients.map((client) => {
      return (
        <Item
          itemName={client.name}
          editLink={`editclient/${client.id}`}
          reportLink={`report/${client.id}`}
          key={client.id}
        />
      );
    });

    return (
      <>
        <Header />
        <Content>
          <Nav />
          <Main>
            <AddNewButton link="/addclient" thing="Client" />
            {clients}
          </Main>
        </Content>
      </>
    );
  }
}

export default Clients;
