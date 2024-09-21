// add money to the account
// step 1 add event handler
// prevent page reload after form submit

// step 2 get money to be added to the account balance
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
    console.log(pinNumber);
  });
