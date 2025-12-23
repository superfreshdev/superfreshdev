// console.log("🟨 set-content-15-videos-link-container.js")


/* ------------------------------------------------------------------------------- */
// 🟥 Set Content | ".sport-challenge-15-videos-link-container"
/* ------------------------------------------------------------------------------- */

async function set_content_15_videos_link_container() {

  console.log("➡️ set_content_15_videos_link_container()")

  /* --------------------------------------------------------------------------- */
  // 🟨🟩 Step 1:
  // 1.1 Unshown "Old View" | ".sport-challenge-3-videos-link-container"
  // 1.2 Show View | "sport-challenge-30-videos-link-container"
  /* --------------------------------------------------------------------------- */

    /* ---------------------------------------------------------------------------- */
    /* 1.1 Unshown "Old View" | ".sport-challenge-3-videos-link-container"
    /* ---------------------------------------------------------------------------- */

      addPoint_sportChallenge3VideosLinkContainer.style.display = "none";

    /* ---------------------------------------------------------------------------- */
    /* 1.2 Show View | "sport-challenge-30-videos-link-container"
    /* ---------------------------------------------------------------------------- */

      addPoint_sportChallenge30VideosLinkContainer.style.display = "grid";


  /* ------------------------------------------------------------------------------------------------------ */
  // ➡️🟥 Step 2:
  // 2.1 Check to Create New View | ".info-about-sport-challenge-container"
  // 2.2 Create View              | ".info-about-sport-challenge-container"
  /* ------------------------------------------------------------------------------------------------------ */

    /* ---------------------------------------------------------------------------- */
    /* ➡️🟥 2.1 Check to Create New View | ".info-about-sport-challenge-container"
    /* ---------------------------------------------------------------------------- */

      // global
      var queryExistInfoAbout = ":scope > " + "."+cssClass_infoAboutSportChallenge;
      var addPoint_30VideosContainer = addPoint_sportChallenge30VideosLinkContainer;

      var existInfoAbout = await exist_domElement_in_parent_with_displayNone_check( queryExistInfoAbout , addPoint_30VideosContainer );
      console.log("existInfoAbout = " + existInfoAbout)


      // create if not exist
      if( existInfoAbout == false ) {

        console.log("🟩 Create| Info About | Sport Challenge Container ")

        // ------------------------------------------------------------ */
        // 1.2 Create new Info About
        // ------------------------------------------------------------ */

          /* ----------------------------------------------- */
          /* Get Data by Index
          /* ----------------------------------------------- */

          /* ----------------------------------------------- */
          /* Create View by Index to parent
          /* ----------------------------------------------- */

            // global
            await create_view_info_about_sport_challenge_30_videos_append_to(
                                                                                data_of_30_SportVideoChallenges,
                                                                                0,
                                                                                addPoint_30VideosContainer )


      } else {

        console.log("🟥 Not Create | Info About | Sport Challenge Container ")

      }

    /* ---------------------------------------------------------------------------- */
    /* 🟥 2.2 Create View | ".info-about-sport-challenge-container"
    /* ---------------------------------------------------------------------------- */


  /* ------------------------------------------------------------------------------------------------------ */
  // 🟥 Step 2:
  // 2.1 Check to Create New Views (x2)  | ".sport-challenge-15-videos-link-container"
  // 2.2 Create View                     | ".sport-challenge-15-videos-link-container"
  /* ------------------------------------------------------------------------------------------------------ */

    /* ---------------------------------------------------------------------------------------------- */
    /* 🟥 2.1 Check to Create New Views (x2)  | ".sport-challenge-15-videos-link-container"
    /* ---------------------------------------------------------------------------------------------- */

    /* ---------------------------------------------------------------------------------------------- */
    /* 🟥 2.2 Create View | ".sport-challenge-15-videos-link-container"
    /* ---------------------------------------------------------------------------------------------- */



  return new Promise(resolve => {
      resolve();
  })

}
