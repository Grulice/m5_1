import React from "react";
import { Link } from "react-router-dom";
import { getStockPriceFor, getUserBalance } from "./sellFetcher";

import {
  MainSell,
  CentralBlock,
  SellWrapper,
  HeaderSell,
  PriceText,
  SellFor,
  InputBlock,
  InputLenght,
} from "./styleSell";
import arrow from "../img/arrow.svg";

class Buy extends React.Component {
  state = {
    name: null,
    symbol: null,
    amount: null,
    currentPrice: null,
    id: null,
    currentBalance: null,
    oldPrice: null,
    pieces: "",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    const {
      stockTicker,
      stockName,
      stockAmount,
      stockId,
      oldPrice,
    } = this.props.location.state; //Беру state из тега Link в компоненте Stock
    this.setState({
      name: stockName,
      symbol: stockTicker,
      amount: stockAmount,
      id: stockId,
      oldPrice: oldPrice,
    });
    getStockPriceFor(stockTicker).then((res) =>
      this.setState({ currentPrice: res.profile.price })
    );
    getUserBalance().then((res) =>
      this.setState({ currentBalance: res.currentBalance })
    );
  }
  // Функция выделяющая числа после точки для ее уменьшения в стилях в дальнейшем
  numberAfterDot = (value) => {
    if (value) {
      value.toFixed(2);
      value = value + "";
      const digits = value.substring(value.indexOf(".") + 1);
      return "." + digits.substring(0, 2);
    } else return null;
  };
  // Функция увеличения значения в input
  handlerPlus = () => {
    if (this.state.pieces >= this.state.amount)
      this.setState({ pieces: this.state.amount });
    else this.setState({ pieces: +this.state.pieces + 1 });
  };
  // Функция уменьшения значения в input
  handlerMinus = () => {
    if (this.state.pieces <= 0) this.setState({ pieces: 0 });
    else this.setState({ pieces: +this.state.pieces - 1 });
  };

  sendStocksInfo = () => {
    this.props.sendStocksInfo(
      this.state.id,
      this.state.pieces,
      this.state.amount,
      this.state.currentBalance,
      this.state.currentPrice,
      this.state.oldPrice
    );
  };

  // Функция записывающая текущее значение value input  в state pieces
  changeValue = (e) => {
    this.setState({ pieces: e.target.value });
    if (e.target.value.length === 0) e.target.style.width = `100px`;
    else {
      e.target.style.width = (e.target.value.length + 20) * 8 + "px"; // Динамическое расширение и уменьшения поля input в зависимости от введенного значения
    }
    parseInt(e.target.value);
  };
  render() {
    return (
      <SellWrapper>
        <MainSell>
          <HeaderSell>
            <Link to={"/Account"}>
              <img src={arrow} alt="arrow" />
              Back
            </Link>
            <h2>Sell {this.state.name}</h2>
          </HeaderSell>
          <CentralBlock>
            <PriceText>
              {Math.trunc(this.state.currentPrice)}
              <span>{this.numberAfterDot(this.state.currentPrice)} $</span>
            </PriceText>
            <InputBlock>
              <button onClick={this.handlerMinus}>-</button>
              <InputLenght
                type="number"
                min="1"
                max={this.state.amount}
                onChange={this.changeValue}
                value={this.state.pieces}
                placeholder="1"
              />
              <button onClick={this.handlerPlus}>+</button>
            </InputBlock>
            <SellFor>
              Sell for {Math.trunc(this.state.pieces * this.state.currentPrice)}
              <span>
                {this.numberAfterDot(
                  this.state.pieces * this.state.currentPrice
                )}{" "}
                $
              </span>
            </SellFor>
            <Link
              to={{
                pathname:
                  this.state.pieces <= 0 ||
                  this.state.pieces === "" ||
                  this.state.pieces > this.state.amount
                    ? "/Sell"
                    : "/Account",
                state: {
                  name: this.state.name,
                  symbol: this.state.symbol,
                  amount: this.state.amount,
                  id: this.state.id,
                  oldPrice: this.state.oldPrice,
                },
              }}
            >
              <p onClick={this.sendStocksInfo}>Sell</p>
            </Link>
          </CentralBlock>
        </MainSell>
      </SellWrapper>
    );
  }
}
export default Buy;
