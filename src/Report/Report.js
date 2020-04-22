import React from "react";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Nav from "../Nav/Nav";
import Main from "../Main/Main.js";
import CategorySummary from "../CategorySummary/CategorySummary";
import StatsContainer from "../StatsContainer/StatsContainer";
import OverallScore from "../OverallScore/OverallScore";
import config from "../config/config.js";

import "./Report.css";

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      securityitems: [],
      name: "",
      status: [],
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    // OBTAIN NAME FROM CLIENT ID AND SET IN STATE

    fetch(`${config.REACT_APP_API_ENDPOINT}/api/clients/${id}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          name: response[0].name,
        });
      });

    // OBTAIN STATUS ENTRIES FOR CLIENT AND SET IN STATE
    fetch(`${config.REACT_APP_API_ENDPOINT}/api/status?id=${id}`)
      .then((response) => response.json())
      .then((status) =>
        this.setState({
          status,
        })
      );

    // OBTAIN CATEGORIES AND SET IN STATE
    fetch(`${config.REACT_APP_API_ENDPOINT}/api/categories`)
      .then((response) => response.json())
      .then((categories) =>
        this.setState({
          categories,
        })
      );

    // OBTAIN SECURITY ITEMS AND SET IN STATE
    fetch(`${config.REACT_APP_API_ENDPOINT}/api/securityitems`)
      .then((response) => response.json())
      .then((securityitems) =>
        this.setState({
          securityitems,
        })
      );
  }

  render() {
    // TOTAL NUMBER OF SECURITY ITEMS AVAILABLE
    const totalItems = this.state.status.length;

    // NUMBER OF SECURITY ITEMS ACTIVATED FOR CLIENT
    const secureItems = this.state.status.filter((item) => item.status === true)
      .length;

    // OVERALL HEALTH RATING CALCULATION
    const healthNumber = secureItems / totalItems;

    // GENERATE CATEGORY DIVS

    const categories = this.state.categories.map((category) => {
      // CALC TOTAL ITEMS IN THIS CATEGORY

      const catTotal = this.state.securityitems.filter(
        (item) => item.category === category.id
      ).length;

      // GENERATE LIST OF SECURITY ITEMS IN THIS CATEGORY

      const securityList = this.state.securityitems.filter(
        (item) => item.category === category.id
      );

      const securityArray = securityList.map((security) => security.id);

      // CALC SECURE ITEMS IN THIS CATEGORY

      const catSecure = this.state.status.filter(
        (itm) => securityArray.includes(itm.securityitem) && itm.status === true
      ).length;

      const catHealth = catSecure / catTotal;

      return (
        <CategorySummary
          header={category.name}
          secureNumber={catSecure}
          totalNumber={catTotal}
          healthNumber={catHealth}
        />
      );
    });

    return (
      <>
        <Header />
        <Content>
          <Nav />
          <Main>
            <h1 className="reportHeader">Report For {this.state.name}</h1>
            <StatsContainer>
              <OverallScore
                header="Overall Score"
                secureNumber={secureItems}
                totalNumber={totalItems}
                healthNumber={healthNumber}
              />
              <h2 className="reportSubHeader">Category Score</h2>
              {categories}
            </StatsContainer>
          </Main>
        </Content>
      </>
    );
  }
}

export default Report;
