export function getStockPriceFor(code){
        return fetch(`https://financialmodelingprep.com/api/v3/company/profile/${code}`) 
          .then(res=>res.json());
}
export function getUserBalance() {
    return fetch(
        "https://5e8da89e22d8cd0016a798db.mockapi.io/users/1"
    ).then((res) => res.json());
}

export function changeUserStockPutExport(updatedStock) {
    fetch(
      "https://5e8da89e22d8cd0016a798db.mockapi.io/users/1/stocks/" + updatedStock.id,
      {
        method: "PUT",
        body: JSON.stringify({
          amount: updatedStock.amount,
          purchasePrice:updatedStock.price
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  export function changeUserStockDelete(id) {
    fetch(
        "https://5e8da89e22d8cd0016a798db.mockapi.io/users/1/stocks/" + id,
        {
            method: "DELETE",
        }
    );
  }


  export function updateBalance(amount){
    fetch("https://5e8da89e22d8cd0016a798db.mockapi.io/users/1", {
      method: "PUT",
      body: JSON.stringify({
        id: "1",
        name: "Team one",
        currentBalance: amount,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }