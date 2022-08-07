var firebaseConfig = {
    apiKey: "AIzaSyB3W8GBZk4kzeVOhjRkN81A7QDm1bfAoHY",
    authDomain: "vikash-aquarium.firebaseapp.com",
    projectId: "vikash-aquarium",
    storageBucket: "vikash-aquarium.appspot.com",
    messagingSenderId: "553597576501",
    appId: "1:553597576501:web:e87d565b0ccb3b7c9a587c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let mobile = document.querySelector(".mobile").value;
  let productid = document.querySelector(".productid").value;
  let address = document.querySelector(".address").value;
  console.log(name, mobile, productid, address);

  saveContactInfo(name, mobile, productid, address);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, mobile, productid, address) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    mobile: mobile,
    productid: productid,
    address: address,
  });
}