// console.log("🟨 about-nav-details.js")

/* ------------------------------------------------------------ */
/* DOM Elements
/* ------------------------------------------------------------ */

// close tab
var close_tab_about_details = document.getElementById("js-close-tab-about-details");

// radio navs
var radioList_about_details = [

  document.getElementById("radio-about-it-skills"),
  document.getElementById("radio-about-mindset"),
  document.getElementById("radio-about-contact"),

]

// three dots container - about details
var three_dots_container_about_details = document.getElementById("js-dots-closed-container-about-details");


/* ------------------------------------------------------------ */
/* Events
/* ------------------------------------------------------------ */

// Add | Radio Event Change Listener
for( let i=0; i < radioList_about_details.length; i++ ) {

  radioList_about_details[i].addEventListener( "change", ()=> {

    // unshow three dots container by set change
    three_dots_container_about_details.style.display = "none";

  } )

}
