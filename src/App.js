import React from "react";
import BuyStock from "./BuyStock.jsx";
import Footer from "./Footer";
import Account from "./Account.jsx";
import Navbar from "./Navbar";
import Stock from "./Stock";
import Sell from "./sell/Sell";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  changeUserStockDelete,
  changeUserStockPutExport,
  updateBalance,
} from "./sell/sellFetcher";

class App extends React.Component {
  state = {
    balance: null,
    accountReadyforRender: true,
  };
  componentDidMount() {
    this.callFetch();
  }
  callFetch = () => {
    fetch("https://5e8da89e22d8cd0016a798db.mockapi.io/users/1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          balance: data.currentBalance,
        });
      });
  };

  // Функция не используется, изменена логика обновления баланса
  refreshBalance = (res) => {
    this.setState({
      balance: res,
    });
  };

  // Логика апдейта данных о покупке на мокапи
  sendStocksInfo = (
    id,
    pieces,
    amount,
    currentBalance,
    currentPrice,
    oldPrice
  ) => {
    this.setState({ accountReadyforRender: false });
    if (pieces <= 0 || pieces > amount) {
      alert("Неверное количество акций");
      return;
    }
    if (pieces === amount) {
      changeUserStockDelete(id);
      const element = +currentBalance + pieces * currentPrice;
      updateBalance(element).then(() => {
        this.callFetch();
        this.setState({ accountReadyforRender: true });
      });
    } else {
      const obj = {
        id: id,
        amount: amount - pieces,
        price: (amount - pieces) * oldPrice,
      };
      const element = +currentBalance + pieces * currentPrice;
      changeUserStockPutExport(obj);
      updateBalance(element).then(() => {
        this.callFetch();
        this.setState({ accountReadyforRender: true });
      });
    }
  };

  render() {
    const balance = this.state.balance;
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/Account"
            render={() => (
              <Account
                balance={balance}
                readyForRender={this.state.accountReadyforRender}
              />
            )}
          />
          <Route path="/Stock" component={Stock} />
          <Route
            path="/Sell"
            render={(routeProps) => (
              <Sell {...routeProps} sendStocksInfo={this.sendStocksInfo} />
            )}
          />
          <Route
            path="/BuyStock"
            render={(routeProps) => (
              <BuyStock
                {...routeProps}
                currentBalance={balance}
                refreshBalance={this.callFetch}
              />
            )}
          />
        </Switch>
        <Footer currentBalance={balance} />
      </Router>
    );
  }
}
export default App;
