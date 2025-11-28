console.log("🟨 sport-category-handling.js")


/* ----------------------------------------------------------------- */
/* Data Variables
/* 1.1 sport categories
/* 1.2 sport challenge categories
/* 1.3 sport newest videos
/* 1.4 sport challenges videos
/* ----------------------------------------------------------------- */

/* --------------------------------------------- */
/* [1/4] | Data | Sport Categories
/* --------------------------------------------- */

const data_sport_categories = {

  defImgSrc: "media/img/icons/02-icon-colors/01-black/",

  sportCategories: [

    {
      imgName: "black-zick-zack-arrow.png",
      imgCss: "img-h-1-1",
      title: "Newest Videos"
    },

    {
      imgName: "black-2-swords.png",
      imgCss: "img-h-0-9",
      title: "Challenges"
    }

  ]

}

/* --------------------------------------------- */
/* [2/4] | Data | Sport Challenge Categories
/* --------------------------------------------- */

const data_sport_challenges = {

}

/* --------------------------------------------- */
/* [3/4] | Data | Sport Newest Vidoes
/* --------------------------------------------- */

const data_sport_newest_videos = {

  defImgSrc: "media/img/content/05_my_private/01_sport/fixed_sport/",

  videos: [

    {
      imgName: "fixed-sport-1.png",
      externalLink: "https://drive.google.com/file/d/1J9eMjm1CyoqzBIsSzrurCSb6t3eB_f8z/view?usp=sharing"
    },
    {
      imgName: "fixed-sport-2.png",
      externalLink: "https://drive.google.com/file/d/1JrzXdVsQny1V9onl1rmJc_Q83o4WScHI/view?usp=sharing"
    },
    {
      imgName: "fixed-sport-3.png",
      externalLink: "https://drive.google.com/file/d/1Q_z7GMinGYnMW5Adv8lxNM2TgYF20_ih/view?usp=sharing"
    }

  ]

}

/* --------------------------------------------- */
/* [4/4] | Data | Sport Challenges Videos
/* --------------------------------------------- */

// reminder:
// Challenge 1 is fixed and dont will dyn. create but
// it will be counted

const data_sport_challenges_vidoes = {


}

/* ----------------------------------------------------------------- */
/* Variables & DOM Elements
/* ----------------------------------------------------------------- */

// Label | Selected Sport Category
const chk_selected_sport_category = document.getElementById("chk-selected-sport-category");
const lbl_selected_sport_category = document.querySelector("label[for='chk-selected-sport-category']")

const img_lbl_selected_sport_category = document.getElementById("js-img-selected-sport-category");
const txt_lbl_selected_sport_category = document.getElementById("js-text-selected-sport-category");
const txt_count_lbl_selected_sport_category = document.getElementById("js-countText-selected-sport-category");

// Radios | Sport Categories ( newest videos, challenges )
const txt_radio_name_sport_category = "radio-sport-category";

var radios_sport_categories = [

  document.getElementById("radio-sport-newest-videos"),
  document.getElementById("radio-sport-challenge-videos"),

]

// Selected Sport Challenge Category ( label )

// Radios of Sport Challenges Categories ( choose, ch1, ch2, ... )

// Header Update

/* ----------------------------------------------------------------------------------- */
/* Events
/* ----------------------------------------------------------------------------------- */


  /* -------------------------------------------------------------------------------- */
  /* Radio Change Listener | Sport Categories ( Newest, Challenges )
  /* -------------------------------------------------------------------------------- */

  for( let i=0; i < radios_sport_categories.length; i++ ) {

    radios_sport_categories[i].addEventListener("change", ()=> {

      console.log("Radio Changed State = " + i )

      // Step 1/2
      // close nav (chk unset)
      chk_selected_sport_category.checked = false;

      // Step 2/3
      // update label
      if( radios_sport_categories[i].checked == true ) {


        // Hard Defined = 0 = Newest Videos
        if(i == 0) {

          console.log("Newest = 0 ")

          // update_img_src_and_size( img_lbl_selected_sport_category, "media/img/icons/02-icon-colors/01-black/black-zick-zack-arrow.png", "1.1em")

          // update_text( txt_lbl_selected_sport_category, "Newest Videos" )

          // update_text( txt_count_lbl_selected_sport_category, "(2)" )

          // countTextSelectedSportCategory.innerText = "(⛓️)"


        }

        // Hard Defined = 1 = Challenges
        if(i == 1) {

          console.log("Challenge = 1 ")

          // update_img_src_and_size( img_lbl_selected_sport_category, "media/img/icons/02-icon-colors/01-black/black-2-swords.png", ".9em")

          // update_text( txt_lbl_selected_sport_category, "Challenges" )

          // update_text( txt_count_lbl_selected_sport_category, "(1)" )

          // countTextSelectedSportCategory.innerText = "(😈)"

        }

      }

      // Step 3/3
      // update header
      // Reminder: header is unshown by very small mobile size by display = none;

    })


  }

  /* -------------------------------------------------------------------------------- */
  /* Radio Change Listener | Sport Categories ( Newest, Challenges )
  /* -------------------------------------------------------------------------------- */

  // Radio Change | Sport Category Selections

/* ----------------------------------------------------------------- */
/* Execute
/* ----------------------------------------------------------------- */

  /* -------------------------------------------------- */
  // Step 1/2:
  // Update First Sport Category Content if any
  // other Sport Category was default setted
  /* -------------------------------------------------- */

  start_view_sport_category_content();


  function start_view_sport_category_content() {

    /* -------------------------------------- */
    /* Step 1:
    /* Get Setted Index, by -1 use default
    /* Index = 0
    /* -------------------------------------- */

    var setted_index = get_setted_radio_index( txt_radio_name_sport_category )

    if( setted_index == -1 ) {

      console.log("Use Defaultt Index = " + 0)

      // Update Label | Setted Sport Category
      update_label_setted_sport_category( 0 )


  } else {

    console.log("Use Setted Index = " + setted_index)

    // Update Label | Setted Sport Category
     update_label_setted_sport_category( setted_index )

  }




  }


  /* ------------------------------------------ */
  /* Update Label | Setted Sport Category
  /* ------------------------------------------ */

  function update_label_setted_sport_category( sport_category_index ) {

    var index = sport_category_index;

    /* ----------------------------------------------------- */
    /* Step 1:
    /* Set Radio Index ( Setted Sport Category )
    /* Default Index = 0 or Use Setted Index
    /* ----------------------------------------------------- */

    set_radio( radios_sport_categories[index] )

    /* ----------------------------------------------------- */
    /* Step 2:
    /* Set Data by setted Sport Category Index
    /* ----------------------------------------------------- */

    // img
    var def_img_path = data_sport_categories.defImgSrc;
    var img_name = data_sport_categories.sportCategories[index].imgName;
    var img_css_class = data_sport_categories.sportCategories[index].imgCss;

    // title & max items
    var title = data_sport_categories.sportCategories[index].title;
    var max_items = "";

    /* -------------------------------------------- */
    /* Set Max Items
    /* ( Newest Vidoes, Challenges )
    /* -------------------------------------------- */

    switch( index ) {

      // Update | Newest Videos
      case 0:
        max_items = data_sport_newest_videos.videos.length;
        break;

      // Update | Challenges
      case 1:
        max_items = 99;
        break;

      default:
        console.log("🟥 Wrong Sport Category Index")
        break;

    }

    /* ----------------------------------------------------- */
    /* Step 3
    /* Update Label | Setted Sport Category
    /* ----------------------------------------------------- */

    // Update Img Src + Css Class Selector
    update_img_src_and_size( img_lbl_selected_sport_category, def_img_path+img_name, img_css_class )

    // Update Title
    update_text( txt_lbl_selected_sport_category, title )

    // Update Max Items
    txt_count_lbl_selected_sport_category.innerText = "("+max_items+")";


  }

  /* ------------------------------------------ */
  /* Update Header | Setted Sport Category
  /* ------------------------------------------ */


  function update_header_sport_category( header, data_index) {


  }
