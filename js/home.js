// add money to the account
// step 1 add event handler
// prevent page reload after form submit

// step 2 get money to be added to the account balance
// also get the pin number

// step 1 add an event handler to the add money button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    //   prevent page reload after form submit
    event.preventDefault();
    // step 2 get money to be added to the account balance

    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);

    // step 3 get the pin number provide
    const pinNumber = document.getElementById("input-pin-number").value;
    console.log(typeof pinNumber);

    // step 3 verify pin
    if (pinNumber === "1234") {
      console.log("adding money to your account");

      //   step 4 get the current balance
      const balance = document.getElementById("account-balance").innerText;
      console.log(typeof balance);

      //   step 5 addMoneyInput
      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);
      const newBalance = addMoneyNumber + balanceNumber;
      console.log(newBalance);

      //   step 6 update the balance in DOM
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money");
    }
  });
