import React from "react";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Nav from "../Nav/Nav";
import Main from "../Main/Main.js";
import Item from "../Item/Item";
import config from "../config/config.js";
import AddNewButton from "../AddNewButton/AddNewButton";

// /CLIENTS PAGE

class Clients extends React.Component {
  constructor(props) {
    super(props);

    // DUMMY DATA TO BE USED UNTIL THE FETCH REQUEST POPULATES STATE

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

  componentDidMount() {
    // FETCH THE LIST OF CLIENTS AND SET IN STATE

    fetch(`${config.REACT_APP_API_ENDPOINT}/api/clients`)
      .then((response) => response.json())
      .then((clients) =>
        this.setState({
          clients,
        })
      );
  }

  render() {
    // ITERATE THROUGH CLIENTS ARRAY IN STATE AND CREATE <ITEM /> COMPONENTS TO POPULATE DOM

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
