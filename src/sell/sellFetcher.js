

export function getStockPriceFor(code){
        return fetch(`https://financialmodelingprep.com/api/v3/company/profile/${code}`) 
          .then(res=>res.json())
          .then(data=>data.profile.price)       
}



export function changeUserStockPutExport(updatedStock) {
   return fetch(
      "https://5e8da89e22d8cd0016a798db.mockapi.io/users/1/stocks/" +
        updatedStock.id,
      {
        method: "PUT",
        body: JSON.stringify({
          amount: updatedStock.amount,
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