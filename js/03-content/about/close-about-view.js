// console.log("🟨 close-about-view.js")

// checkbox about nav
const chkAboutNav = document.getElementById("chk-about-nav");

// click element to close about view
var divCloseAboutView = document.getElementById("about-close-about-block");


/* --------------------------------------------------------- */
/* Click Listener | Close About View
/* --------------------------------------------------------- */

divCloseAboutView.addEventListener("click", ()=> {

  // console.log("Div clicked clicked")
  chkAboutNav.checked = false;

})
