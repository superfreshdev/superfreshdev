console.log("🟨 close-tab-read-more.js")


/* ----------------------------------------------------------------- */
/*  DOM Elements
/* ----------------------------------------------------------------- */

// radio
var radios_about_read_more_topics = [

  document.getElementById("radio-about-read-more-my-mission"),
  document.getElementById("radio-about-read-more-my-hobbies"),
  document.getElementById("radio-about-read-more-story")
]

// string ids of label close tabs
var close_tab_read_more_topics = document.getElementById("js-about-close-tab-read-more-content")

/* ----------------------------------------------------------------- */
/*  Methods
/* ----------------------------------------------------------------- */

//  ⚠️ getSettedRadioIndex

function getUnsetRadioIndex( radios ) {

  console.log( "Length(radios) = " + radios.length )

  for( let i=0; i < radios.length; i++ ) {

    if( radios[i].checked == true ) {
      return i;
    }

  }

  // no setted index found
  return -1;

}

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

/* ----------------------------------------------------------------- */
/*  Execute
/* ----------------------------------------------------------------- */
