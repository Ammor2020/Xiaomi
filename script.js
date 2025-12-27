// var mainphone = document.querySelector(".img-phone")
// var allproduct = document.querySelectorAll(".allproduct")
// var maincon = document.querySelector(".first-con")





// allproduct.forEach(phone => {
//     phone.addEventListener("click" , () => {
//      mainphone.src = phone.src
//       maincon.style.backgroundColor= phone.dataset.color;
//     })
   
// });



// function phones(phone) {
//     img.src = phone;
//     img.onclick = 'phones (this.src)'
    
// }




document.addEventListener("DOMContentLoaded", function () {

  var mainphone = document.querySelector(".img-phone");
  var allproduct = document.querySelectorAll(".allproduct");
  var maincon = document.querySelector(".first-con");

  allproduct.forEach(phone => {
    phone.addEventListener("click", () => {
      mainphone.src = phone.src;
      maincon.style.backgroundColor = phone.dataset.color;
    });
  });

});