// console.log("🟨 close-tab-x-about-details.js")

/* ------------------------------------------------------------ */
/* DOM Elements
/* ------------------------------------------------------------ */

// close tab
var close_tab_about_details = document.getElementById("js-tab-x-about-details");

// radio navs
var radioList_about_details = [

  document.getElementById("radio-about-it-skills"),
  document.getElementById("radio-about-mindset"),
  document.getElementById("radio-about-contact"),

]

/* ------------------------------------------------------------ */
/* Event
/* ------------------------------------------------------------ */

// if clicked on close unset radio & show three dots container
close_tab_about_details.addEventListener( "click", ()=> {

  // console.log("Clicked 🚀🚀🚀")

  unsetRadio( radioList_about_details )

  // alert("Details XXX")

} )
