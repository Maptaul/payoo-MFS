// console.log('button click file added');

// form submit reloading the page

// SET 1 EVENT handler 

document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault(); // <-------- some different 
    console.log('login button click');

    // step-3 get the phone number 

    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
  });
