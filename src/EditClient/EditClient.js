import React from "react";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Nav from "../Nav/Nav";
import Main from "../Main/Main.js";
import ClientCheckbox from "../ClientCheckbox/ClientCheckbox";
import config from "../config/config.js";

import "./EditClient.css";

// PAGE USED TO EDIT THE SECURITY ITEMS FOR A CLIENT

class EditClient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      clientName: "",
    };
  }

  componentDidMount() {
    // ASSIGN THE ID PARAMATER FROM THE URL TO A VARIABLE
    const id = this.props.match.params.id;

    // PULL THE APPLICABLE ROWS FROM THE STATUS TABLE FOR THIS CLIENT
    fetch(`${config.REACT_APP_API_ENDPOINT}/api/status/name?id=${id}`)
      .then((response) => response.json())
      .then((items) =>
        this.setState({
          items,
        })
      );

    // PULL THE NAME OF THE CLIENT FROM THE DB
    fetch(`${config.REACT_APP_API_ENDPOINT}/api/clients/${id}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          clientName: response[0].name,
        });
      });
  }

  // WHEN A CHECKBOX IS TOGGLED
  handleChecked = (id, status, index) => {
    // VALUE = THE OPPOSITE OF THE CURRENT STATUS TO SEND TO POST REQUEST
    const value = !status;

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, value }),
    };

    // SEND THE FETCH REQUEST TO TOGGLE THE ACTIVE STATUS IN THE STATUS TABLE
    fetch(`${config.REACT_APP_API_ENDPOINT}/api/status`, options)
      .then((response) => response.json())
      .then((response) => {
        // IF AN ERROR IS RETURNED SET IT IN STATE
        if (response.error) {
          this.setState({
            error: response.error,
          });
        } else {
          // ADJUST CHANGE IN STATE AS WELL
          let itms = [...this.state.items];
          let itm = { ...itms[index] };
          itm.status = value;
          itms[index] = itm;
          this.setState({
            items: itms,
          });
        }
      });
  };

  render() {
    let items;

    // IF THE ITEMS ARRAY EXISTS MAP THROUGH AND CREATE THE <CLIENTCHECKBOX /> COMPONENTS TO OUTPUT TO THE DOM
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
