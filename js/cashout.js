document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("cashout");
    const cashOut = document.getElementById("input-cashout").value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById("input-cashoutpin").value;
    console.log(cashOut, pinNumber);

    if (pinNumber === "1234") {
      const balance = document.getElementById("account-balance").innerText;
      const balanceNumer = parseFloat(balance);
      const newBalane = balanceNumer - cashOutNumber;
      document.getElementById("account-balance").innerText = newBalane;
    } else {
      alert("please try agin later");
    }
  });
