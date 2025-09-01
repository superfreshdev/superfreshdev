console.log("🟨 close-tab-read-more.js")


/* ----------------------------------------------------------------- */
/*  DOM Elements
/* ----------------------------------------------------------------- */

// radio
var radios_about_read_more_topics = [

  "radio-about-read-more-my-mission",
  "radio-about-read-more-my-hobbies",
  "radio-about-read-more-story"
]

// string ids of label close tabs
var close_tabs_about_read_more_topics = [

  "lbl-about-close-my-mission",
  "lbl-about-close-my-hobbies",
  "lbl-about-close-story"
]

/* ----------------------------------------------------------------- */
/*  Methods
/* ----------------------------------------------------------------- */

function addUnsetViewByRadio( clickUnsets, radioUnsets ) {

  console.log("Length(clicks)= " + clickUnsets.length )
  console.log("Length(radios)= " + radioUnsets.length )

  // add click listeners to unshown topic by unset radio

  for( let i=0; i < clickUnsets.length; i++ ) {

    document.getElementById( clickUnsets[i] ).addEventListener( 'click', ()=> {

      // console.log("click ###");

      // unset radio by index
      document.getElementById( radioUnsets[i] ).checked = false;

    })

  }

}

/* ----------------------------------------------------------------- */
/*  Execute
/* ----------------------------------------------------------------- */

addUnsetViewByRadio( close_tabs_about_read_more_topics , radios_about_read_more_topics )
