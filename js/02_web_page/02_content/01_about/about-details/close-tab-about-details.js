console.log("🟨 close-tab-about-details.js")

/* ------------------------------------------------------------ */
/* DOM Elements
/* ------------------------------------------------------------ */

var close_tab_about_details = document.getElementById("js-close-tab-about-details");

var radioList_about_details = [

  document.getElementById("radio-about-it-skills"),
  document.getElementById("radio-about-mindset"),
  document.getElementById("radio-about-contact"),

]

/* ------------------------------------------------------------ */
/* Event
/* ------------------------------------------------------------ */

close_tab_about_details.addEventListener( "click", ()=> {

  // console.log("Clicked 🚀🚀🚀")

  unsetRadio( radioList_about_details )

} )
