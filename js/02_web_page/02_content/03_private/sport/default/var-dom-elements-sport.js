// console.log("🟨 var-dom-elements-sport.js")


/* ---------------------------------------------------------------------- */
// Variables & DOM Elements
/* --------------------------------------------------------------------- */

  /* ----------------------------------------------------- */
  // Max Items
  // ( newest videos , sport challenges )
  /* ----------------------------------------------------- */

  var max_newest_sport_videos  = get_length( data_newest_sport_videos.videos )
  console.log("⚠️[max|newest videos]: " + max_newest_sport_videos )

  var max_sport_challenges = get_length( data_header_nav_sport_categories.sportChallengeCategories  )
  // -1 because we dont count choose challenges selector
  max_sport_challenges = max_sport_challenges - 1;
  console.log("⚠️[max|sport challenges]: " + max_sport_challenges )


  /* ----------------------------------------------------- */
  // Selected | Sport Category ( Chk - Label )
  /* ----------------------------------------------------- */

  const chk_selected_sport_category = document.getElementById("chk-selected-sport-category");
  const lbl_selected_sport_category = document.querySelector("label[for='chk-selected-sport-category']")

  const img_lbl_selected_sport_category = document.getElementById("js-img-selected-sport-category");
  const txt_lbl_selected_sport_category = document.getElementById("js-text-selected-sport-category");
  const txt_count_lbl_selected_sport_category = document.getElementById("js-countText-selected-sport-category");

  /* ----------------------------------------------------- */
  // Header | Sport Category ( Chk - Label )
  /* ----------------------------------------------------- */

  const img_header_sport_category = document.getElementById("js-header-img-sport-category");
  const title_header_sport_category = document.getElementById("js-header-title-sport-category");
  const sub_title_header_sport_category = document.getElementById("js-header-sub-title-sport-category");

  /* ------------------------------------------------------------------------- */
  // Add Points | Select Sport Categories( Radios - Label )
  /* ------------------------------------------------------------------------- */

  // adding points for dynamic creation elements
  const add_point_radio_sport_challenges = document.getElementById("sport-container-my-private");
  const add_point_radio_labels_sport_challenges = document.getElementById("nav-sport-category-challenges");

  /* ----------------------------------------------------- */
  // Select Sport Categories ( Radios - Label )
  /* ----------------------------------------------------- */

  // to get setted index for show content
  var radio_name_sport_categories = "radio-name-sport-category";

  // labels
  var lbl_radios_sport_categories = [

    document.querySelector('label[for="radio-sport-newest-videos"]'),
    document.querySelector('label[for="radio-sport-challenge-videos"]')

  ]

  /* ------------------------------------------------------------------------- */
  // Show Content |
  // 1.1 Banner Choose Sport Challenges
  // 1.2 Fixed 30 Videos Sport Challenge
  /* ------------------------------------------------------------------------- */

  const content_banner = document.getElementById("banner-choose-sport-challenges-container");
  const content_fixed_30 = document.getElementById("static-sport-challenge-30-videos-container");


  /* ------------------------------------------------------------------------- */
  // Show Content |
  // 1.1 Default 3 Videos Sport Challenges (id)
  // 1.2 Details Sport Challenges (class)
  // 1.3 Sport 3 Videos Container (class)
  //
  // 1.3 Sport Video Link Box (class)
  // 1.5 Sport Video Link Box - Coming Soon  (class)
  /* ------------------------------------------------------------------------- */

  const content_default_3 = document.getElementById("sport-challenge-3-videos-container");

  var css_class_details_sport_challenge = "details-sport-challenge-container"

  var css_class_sport_video_box_3 = "sport-video-link-box-3er-layout"
  var css_csss_sport_video_box_3_coming_soon = "sport-video-link-box-3er-layout-coming-soon";
