console.log("🟨 close-tab-content-about-details.js")

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
/* Function
/* ------------------------------------------------------------ */

function unsetRadio( radios ) {

  // console.log("radio.length = " + radios.length )

  for( let i=0; i < radios.length; i++ ) {

    if( radios[i].checked == true ) {

      // console.log("Index = " + i)
      radios[i].checked = false;

      return;

    }

  }

  return -1;

}

/* ------------------------------------------------------------ */
/* Event
/* ------------------------------------------------------------ */

close_tab_about_details.addEventListener( "click", ()=> {

  // console.log("Clicked 🚀🚀🚀")

  unsetRadio( radioList_about_details )

} )
