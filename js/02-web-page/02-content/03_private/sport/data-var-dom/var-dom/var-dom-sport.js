// console.log("🟨 var-dom-sport.js")


/* -------------------------------------------------------------------------------------- */
// Variables & DOM Elements
/* ------------------------------------------------------------------------------------- */

  /* --------------------------------------------------------------------- */
  // Handle all Grid Layouts to delete row / col gap
  // if only 1 or 2 element exits
  /* --------------------------------------------------------------------- */

  const sport_3_videos_containers = document.querySelectorAll(".sport-3-videos-link-container");

  /* ----------------------------------------------------- */
  // 🟩 Showing Content & Adding Points
  /* ----------------------------------------------------- */

    const content_newest_sport_videos_container = document.getElementById("sport-newest-video-container");
    const content_history_newest_sport_videos_container = document.getElementById("content-history-sport-newest-video-container")

    const content_sport_challenges_container = document.getElementById("sport-challenges-video-container");

  /* ----------------------------------------------------- */
  // 🟩 Max Items
  // ( newest videos , sport challenges )
  /* ----------------------------------------------------- */

  // ❌ max_content_items_sport_newest_videos, max_content_items_sport_challenges

  // Max Items | Newest Videos
  var maxItemsSportNewestVideos = data_newest_sport_videos.videos.length;

  // Max Content Items | Sport Challenges
  /* info:
    we calc 30 Videos Sport Challenge extra with +1 because thats have an
    own json data object. So we calc all sport challenges drom data_3 ... + 30.
  */
  var maxItemsSportChallenges = data_3_sport_videos_challenges.challenges.length +1;


  /* ----------------------------------------------------- */
  // Selected | Sport Category ( chk - label )
  /* ----------------------------------------------------- */

  const chk_selected_sport_category = document.getElementById("chk-selected-sport-category");
  const lbl_selected_sport_category = document.querySelector("label[for='chk-selected-sport-category']")

  const img_lbl_selected_sport_category = document.getElementById("js-img-selected-sport-category");
  const txt_lbl_selected_sport_category = document.getElementById("js-text-selected-sport-category");
  const txt_count_lbl_selected_sport_category = document.getElementById("js-countText-selected-sport-category");

  /* ----------------------------------------------------- */
  // Header | Sport Category ( chk - label )
  /* ----------------------------------------------------- */

  const header_sport_category = document.querySelector("#header-nav-sport-container > .header-content-block")

  const img_header_sport_category = document.getElementById("js-header-img-sport-category");
  const title_header_sport_category = document.getElementById("js-header-title-sport-category");
  const sub_title_header_sport_category = document.getElementById("js-header-sub-title-sport-category");

  /* ------------------------------------------------------------------------- */
  // Add Points | Select Sport Categories ( Radios - Label )
  // > add point | radio sport challenges
  // > add point | label sport challenges
  /* ------------------------------------------------------------------------- */

  const add_point_radio_sport_challenges = document.getElementById("sport-container-my-private");
  const add_point_radio_labels_sport_challenges = document.getElementById("nav-sport-category-challenges");

  /* ------------------------------------------------------------------------- */
  // Select Sport Categories ( Radios - Label )
  /* ------------------------------------------------------------------------- */

  // Radios of Sport Categories ( newest, challenges )
  var radios_sport_categories = document.querySelectorAll('input[name="radio-name-sport-category"]');

  // Labels of Sport Categories
  var lbl_radios_sport_categories = [

    document.querySelector('label[for="radio-sport-newest-videos"]'),
    document.querySelector('label[for="radio-sport-challenge-videos"]')

  ]


  /* ------------------------------------------------------------------------- */
  // Add Points | Creating Content
  // 1.1 Sport Challenge 30 Videos Link Container
  // 1.2 Sport Challenge 3 Vides Link Container
  /* ------------------------------------------------------------------------- */

    const add_point_sport_challenge_30_videos_container = document.getElementById("sport-challenge-30-videos-link-container");
    const add_point_sport_challange_3_videos_container = document.getElementById("sport-challenge-3-videos-container");

  /* ------------------------------------------------------------------------- */
  // New Creating Dom Elements
  // 1.1 Newest Videos ( 3 )
  // 1.2 History Newest Videos ( 6 )
  // 1.3 History Newest Videos ( 9 )
  // 1.4 Sport Challenge 15 Videos Link Container (1)
  // 1.4 Sport Challenge 15 Videos Link Container (2)
  // 1.5 Sport Challenge 3 Videos Link Container
  /* ------------------------------------------------------------------------- */

    /*  🟥 to Do */

  /* ------------------------------------------------------------------------- */
  // Variables to Creating Content Elements
  // 1.1 Info About Sport Challenges
  // 1.2 Css Class - 15 Videos Link Container
  /* ------------------------------------------------------------------------- */

    /* ------------------------------------------------- */
    /* Info About Sport Challenge
    /* ------------------------------------------------- */

    const css_class_info_about_sport_challenge = "info-about-sport-challenge-container";
    const css_class_sport_workout_parts = "sport-workout-parts-container";
    const css_class_sport_workout_category = "sport-workout-category";

    /* ------------------------------------------------- */
    /* 30 Videos | Sport Challenge
    /* ------------------------------------------------- */

    const css_class_sport_challenge_15_videos_link = "sport-challenge-15-videos-link-container";
