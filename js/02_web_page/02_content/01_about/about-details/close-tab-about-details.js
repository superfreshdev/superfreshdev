// console.log("🟨 close-tab-about-details.js")

/* ------------------------------------------------------------ */
/* DOM Elements
/* ------------------------------------------------------------ */


/* ------------------------------------------------------------ */
/* Event
/* ------------------------------------------------------------ */

// if clicked on close unset radio & show three dots container
close_tab_about_details.addEventListener( "click", ()=> {

  // console.log("Clicked 🚀🚀🚀")

  unsetRadio( radioList_about_details )

  // show three dots container
  three_dots_container_about_details.style.display = "flex";

} )
