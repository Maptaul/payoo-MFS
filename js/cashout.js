document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("cashout");
    const cashOut = document.getElementById("input-cashout").value;
    const pinNumber = document.getElementById("input-cashoutpin").value;
    console.log(cashOut, pinNumber);
    if (pinNumber === "1234") {
      const balance = document.getElementById("account-balance").innerText;
      const balanceNumber = parseFloat(balance);
      const newBalance = balanceNumber - ca;
    } else {
      alert("failed to cashout");
    }
  });
