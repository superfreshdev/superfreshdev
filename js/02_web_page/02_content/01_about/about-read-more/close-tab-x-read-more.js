// console.log("🟨 close-tab-x-read-more.js")


/* ----------------------------------------------------------------- */
/*  DOM Elements
/* ----------------------------------------------------------------- */

// radio
var radios_about_read_more_topics = [

  document.getElementById("radio-read-more-my-mission"),
  document.getElementById("radio-read-more-my-hobbies"),
  document.getElementById("radio-read-more-story")
]

// string ids of label close tabs
var close_tab_read_more_topics = document.getElementById("js-tab-x-about-read-more")


/* ----------------------------------------------------------------- */
/* Events
/* ----------------------------------------------------------------- */

// unset radio to unshown content
close_tab_read_more_topics.addEventListener( "click" , ()=> {

  //  console.log("getUnsetRadioIndex = " + getUnsetRadioIndex( radios_about_read_more_topics ) )

  var unsetRadioIndex = getUnsetRadioIndex( radios_about_read_more_topics );

  if( unsetRadioIndex != -1 ) {
    radios_about_read_more_topics[ unsetRadioIndex ].checked = false;
  }

})
