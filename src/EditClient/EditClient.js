import React from "react";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Nav from "../Nav/Nav";
import Main from "../Main/Main.js";
import ClientCheckbox from "../ClientCheckbox/ClientCheckbox";
import config from "../config/config.js";

import "./EditClient.css";

class EditClient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      clientName: "",
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`${config.REACT_APP_API_ENDPOINT}/api/status?id=${id}`)
      .then((response) => response.json())
      .then((items) =>
        this.setState({
          items,
        })
      );

    fetch(`${config.REACT_APP_API_ENDPOINT}/api/clients/${id}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          clientName: response[0].name,
        });
      });
  }

  handleChecked = (id, status, index) => {
    console.log(id);
    console.log("status is " + status);

    const value = !status;

    console.log("value is " + value);

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, value }),
    };

    //
    fetch(`${config.REACT_APP_API_ENDPOINT}/api/status`, options)
      .then((response) => response.json())
      .then((response) => {
        // IF AN ERROR IS RETURNED SET IT IN STATE
        if (response.error) {
          this.setState({
            error: response.error,
          });
        } else {
          let itms = [...this.state.items];
          let itm = { ...itms[index] };
          itm.status = value;
          itms[index] = itm;
          this.setState({
            items: itms,
          });

          // this.setState({
          //   name: "",
          //   error: "",
          // });
        }
      });
  };

  render() {
    let items;

    if (this.state.items) {
      items = this.state.items.map((item, index) => (
        <ClientCheckbox
          isChecked={item.status}
          handleChecked={(e) => this.handleChecked(item.id, item.status, index)}
          index={index}
          key={item.id}
          id={item.id}
          name={item.name}
        />
      ));
    }
    return (
      <>
        <Header />
        <Content>
          <Nav />
          <Main>
            <div className="editClientContainer">
              <h1>Editing {this.state.clientName}</h1>
              {items}
            </div>
          </Main>
        </Content>
      </>
    );
  }
}

export default EditClient;
