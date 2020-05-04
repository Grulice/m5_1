import React from "react";
import AccountTickerList from "./AccountTickerList";
import Balance from "./Balance";

class Account extends React.Component {
  render() {
    const { balance } = this.props;
    return (
      <div>
        {this.props.readyForRender ? <Balance balance={balance} /> : ""}

        {this.props.readyForRender ? <AccountTickerList /> : ""}
      </div>
    );
  }
}

export default Account;
