// console.log('button click file added');

// form submit reloading the page

// SET 1 EVENT handler

// document
//   .getElementById("button-login")
//   .addEventListener("click", function (event) {
//     // step-2: prevent default behavior (prevent reloading browser)
//     event.preventDefault(); // <-------- some different

//     // step-3 get the phone number

//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber);

//     // step 4 validate phone and pin
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('You are logged in');
//     }
//     else{
//         alert('wrong phone number or pin')
//     }
//     // step 5 allow user to use the web

//   });

document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // get phone number and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);
    if(phoneNumber === '5' && pinNumber == '1234'){
        console.log('you are logged in');
        window.location.href= '../home.html';
    }
    else{
        alert(' Wrong phone or pin')
    }
  });
