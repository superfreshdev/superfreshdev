console.log("🟨 sport-category-handling.js")


/*

  to Dos:

  1. auslagern - wiederverwendbarkeit
  2. gezielte funktionen ansprechen

  --------------------------------------------------

  1. Update Selected Label
  2. Update Header

  3. Unset Radios

*/

/* ----------------------------------------------------------------- */
/* Data Variables
/* ----------------------------------------------------------------- */

const data_sport_categories = {

  defImgSrc: "",

  sportCategories: [

    {
      imgName: "penis.png",
      imgCss: "1.1em",
      title: "Newest Videos"
    },

    {
      imgName: "muschie.png",
      imgCss: "1.1em",
      title: "Challenges"
    }

  ]

}

const data_sport_newest_videos = {

  defImgSrc: "",

  videos: [

    {
      imgName: "aligator.png",
      externalLink: "www.google.de"
    },
    {
      imgName: "girffae.png",
      externalLink: "www.google.de"
    },
    {
      imgName: "elefant.png",
      externalLink: "www.google.de"
    }

  ]

}

/* ----------------------------------------------------------------- */
/* Variables & DOM Elements
/* ----------------------------------------------------------------- */

// Selected Sport Category ( label )
const chk_selected_sport_category = document.getElementById("chk-selected-sport-category");
const lbl_selected_sport_category = document.querySelector("label[for='chk-selected-sport-category']")

const img_lbl_selected_sport_category = document.getElementById("js-img-selected-sport-category");
const txt_lbl_selected_sport_category = document.getElementById("js-text-selected-sport-category");
const txt_count_lbl_selected_sport_category = document.getElementById("js-countText-selected-sport-category");

// Radios of Sport Categories ( newest videos, challenges )
const txt_radio_name_sport_category = "radio-sport-category";

var radios_sport_categories = [

  document.getElementById("radio-sport-newest-videos"),
  document.getElementById("radio-sport-challenge-videos"),

]

// Selected Sport Challenge Category ( label )

// Radios of Sport Challenges Categories ( choose, ch1, ch2, ... )

// Header Update

/* ----------------------------------------------------------------- */
/* Events
/* ----------------------------------------------------------------- */

// Step 2/2:
// Add Radio Change Listener to close nav & update label & header

for( let i=0; i < radios_sport_categories.length; i++ ) {

  radios_sport_categories[i].addEventListener("change", ()=> {

    console.log("Radio Changed State = " + i )

    // Step 1/2
    // close nav (chk unset)
    chk_selected_sport_category.checked = false;

    // Step 2/3
    // update label

    // Step 3/3
    // update header
    // Reminder: header is unshown by very small mobile size by display = none;

  })


}

      // update_img_src_and_size( imgSelectedSportCategory, "media/img/icons/02-icon-colors/01-black/black-zick-zack-arrow.png", "1.1em")

      // update_text( textSelectedSportCategory, "Newest Videos" )

      // update_text( countTextSelectedSportCategory, "(2)" )


// Radio Change | Sport Category Selections



/* ----------------------------------------------------------------- */
/* Execute
/* ----------------------------------------------------------------- */

// Step 1/2:
// Set Default First Selection if not setted hard coded

set_first_radio_by_any_sets( txt_radio_name_sport_category )
















/* ----------------------------------------------------------------- */
/* ❌❌❌ Trash
/* ----------------------------------------------------------------- */

/* ----------------------------------------------------------------- */
/*  Update Action Element (img + text + count )
/* ----------------------------------------------------------------- */

// 🟣🟣🟣 Auslagern | Update Functions
function update_img_src_and_size( imgElement, path, cssImgSize ) {

  imgElement.src = path;

  imgElement.style.height = cssImgSize;

}

function update_text( textElement, text ) {

  textElement.innerText = text;

}


/* ----------------------------------------------------------------- */
/*  DOM Elements
/* ----------------------------------------------------------------- */

// checkbox sport content selected
var chk_sport_category = document.getElementById("chk-selected-category-sport");

// radios sport content categories ( newest, challenges )
var radios_sport_categories = [

  document.getElementById("radio-sport-newest-videos"),
  document.getElementById("radio-sport-challenge-videos"),

]

// img  | label selected sport category
const imgSelectedSportCategory = document.getElementById("js-img-selected-sport-category");

// text | label selected sport category
const textSelectedSportCategory = document.getElementById("js-text-selected-sport-category");

// nr   | label selected sport category
const countTextSelectedSportCategory = document.getElementById("js-countText-selected-sport-category");


/* ----------------------------------------------------------------- */
/* Radio Start Setting
/* ----------------------------------------------------------------- */

for( let i=0; i < radios_sport_categories.length; i++ ) {

  if( radios_sport_categories[i].checked == true ) {


     // Hard Defined = 0 = Newest Videos
    if(i == 0) {

      // console.log("Newest = 0 ")

      update_img_src_and_size( imgSelectedSportCategory, "media/img/icons/02-icon-colors/01-black/black-zick-zack-arrow.png", "1.1em")

      update_text( textSelectedSportCategory, "Newest Videos" )

      update_text( countTextSelectedSportCategory, "(2)" )

      // countTextSelectedSportCategory.innerText = "(⛓️)"


    }

    // Hard Defined = 1 = Challenges
    if(i == 1) {

      // console.log("Challenge = 1 ")
      update_img_src_and_size( imgSelectedSportCategory, "media/img/icons/02-icon-colors/01-black/black-2-swords.png", ".9em")

      update_text( textSelectedSportCategory, "Challenges" )

      update_text( countTextSelectedSportCategory, "(1)" )

      // countTextSelectedSportCategory.innerText = "(😈)"

    }

  }

}






/* ----------------------------------------------------------------- */
/* Radio Change Event
/* ----------------------------------------------------------------- */

for( let i=0; i < radios_sport_categories.length; i++ ) {

  // Add Change Listener to unset sub it docs
  radios_sport_categories[i].addEventListener( "change" , ()=> {

    // Hard Defined = 0 = Newest Videos
    if(i == 0) {

      //  console.log("Newest = 0 ")

      update_img_src_and_size( imgSelectedSportCategory, "media/img/icons/02-icon-colors/01-black/black-zick-zack-arrow.png", "1.1em")

      update_text( textSelectedSportCategory, "Newest Videos" )

      update_text( countTextSelectedSportCategory, "(2)" )

      // countTextSelectedSportCategory.innerText = "(⛓️)"


    }

    // Hard Defined = 1 = Challenges
    if(i == 1) {

      // console.log("Challenge = 1 ")
      update_img_src_and_size( imgSelectedSportCategory, "media/img/icons/02-icon-colors/01-black/black-2-swords.png", ".9em")

      update_text( textSelectedSportCategory, "Challenges" )

      update_text( countTextSelectedSportCategory, "(1)" )

      // countTextSelectedSportCategory.innerText = "(😈)"

    }

    // close nav
    chk_sport_category.checked = false;

  });


}
