// function mailSender(to, sub, body){
//     console.log(`mail sent to ${to} with subject ${sub} and body ${body}`);
// }
// // mailSender("abc@gmail.com", "hello", "Done");
// mailSender("abc@gmail.com", "hello");

// Curring Approach............

// function mailSender(to) {
//   return function (sub) {
//     return function (body) {
//       console.log(
//         `Mail Send to ${to} with the subject ${sub} and body ${body}`
//       );
//     };
//   };
// }
// mailSender("sachin@gmail.com")("HELLO")("HOW ARE YOU");

// CALLBACK APPROACH...........

//Order Booking............

function orderBooking(login, callback) {
    console.log("You have login Done");
    callback();
}

function home(callback) {
    console.log("You are on the home page.");
    callback();
}

function product(callback) {
    console.log("Add product which you want");
    callback();
}

function cart(callback) {
    console.log("Product added to the Cart");
    callback();
}

function payment(callback) {
    console.log("The payment is DONE");
    callback();
}

function checkout(callback) {
    console.log("The product is Checkout to deliver");
    callback();
}

function email(callback) {
    console.log("Notified to the user");
    callback();
}

orderBooking("login", function () {
    home(function () {
        product(function () {
            cart(function () {
                payment(function () {
                    checkout(function () {
                        email(function () {
                            console.log("All steps completed ✅");
                        });
                    });
                });
            });
        });
    });
});

// CURRING APPROACH

function orderBooking(login) {
  return function (home) {
    return function (product) {
      return function (cart) {
        return function (payment) {
          return function (checkout) {
            return function (email) {
              console.log(
                `${login} ${home} ${product} ${cart} ${payment} ${checkout} ${email}`
              );
            };
          };
        };
      };
    };
  };
};

orderBooking("You have login Done") ("You are on the home page.") ("Add product which you want") ("Product added to the Cart") ("The payment is DONE") ("The product is Checkout to deliver") ("Notified to the user email SEND !") ;
console.log("All STEPS Done ✅ ")