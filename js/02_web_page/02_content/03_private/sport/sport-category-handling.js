// console.log("🟨 sport-category-handling.js")


/* ----------------------------------------------------------------- */
/*  Update Action Element (img + text + count )
/* ----------------------------------------------------------------- */


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

      update_img_src_and_size( imgSelectedSportCategory, "media/img/icons/02-icon-colors/01-black/arrow-video.png", "1.2em")

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

      update_img_src_and_size( imgSelectedSportCategory, "media/img/icons/02-icon-colors/01-black/arrow-video.png", "1.2em")

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
