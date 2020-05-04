import React from "react";
import Decimal from "./Decimal";
import greenArrow from "../src/img/greenArrow.png";
import redArrow from "../src/img/redArrow.png";
import styled from "styled-components";

class Progres extends React.Component {
  state = {
    oldBalance: null,
    changes: "",
    changesPercentage: "",
  };
  componentDidMount() {
    this.takeTickerPrice();
  }
  takeTickerPrice = () => {
    const { ticker } = this.props;
    fetch(`https://financialmodelingprep.com/api/v3/company/profile/${ticker}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!data.companyProfiles) {
          const value = (data.profile.price - this.props.price).toFixed(2);
          const changesValue = (
            100 -
            (this.props.price * 100) / data.profile.price.toFixed(2)
          ).toFixed(2);
          this.setState({
            changes: value,
            changesPercentage: changesValue,
          });
        } else {
          const newDat = data.companyProfiles;
          const arr = [];
          for (let i = 0; i < newDat.length; i++) {
            arr.push(newDat[i].profile.price * this.props.amount[i]);
          }
          const oldBalance = this.props.balance;
          const totalBalance = (
            +arr.reduce((a, b) => {
              return a + b;
            }, 0) - oldBalance
          ).toFixed(2);
          const changesBalance = (
            (totalBalance * 100) /
            this.props.balance
          ).toFixed(2);
          this.setState({
            oldBalance: oldBalance,
            changes: totalBalance,
            changesPercentage: changesBalance,
          });
        }
      });
  };
  render() {
    const { oldBalance, changes, changesPercentage } = this.state;
    const balance = oldBalance == null ? false : true;
    const status = changes > 0 ? priceUp : priceDown;
    return (
      <ProgresBlock>
        {balance ? <Decimal number={oldBalance} /> : null}
        <div style={{ ...tdArrowPrice, ...status }}>
          <div>
            {changes > 0 ? (
              <img src={greenArrow} alt="Increase" />
            ) : (
              <img src={redArrow} alt="Decrease" />
            )}
            {changes}$
          </div>
          <div>({changesPercentage}%)</div>
        </div>
      </ProgresBlock>
    );
  }
}
const tdArrowPrice = {
  color: "#000",
  fontSize: "18px",
  fontWeight: "normal",
  justifyContent: "space-around",
  display: "flex",
  alignItems: "center",
  width: "150px",
};
const priceDown = {
  color: "#FF2C2C",
};
const priceUp = {
  color: "#2FC20A",
};
const ProgresBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
`;
export default Progres;
