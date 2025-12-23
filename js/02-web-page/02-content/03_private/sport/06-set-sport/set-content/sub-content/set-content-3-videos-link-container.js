// console.log("🟨 set-content-3-videos-link-container.js")


/* ------------------------------------------------------------------------------- */
// ➡️🟥 Set Content | ".sport-3-videos-link-container"
/* ------------------------------------------------------------------------------- */

  async function set_content_3_videos_link_container( dataIndex ) {


    console.log("➡️ set_content_view_sport_challenges_3_videos()")

    /*
        ⚠️ Bauplan:

        1. Auslagern:

            1. Css Display None ...

            # check if should create or only update
            2. Create ".info-about-spoirt-challenge-container"

            # check if should create or only update
            3. Create ".3-videos-link-container"

    */

    /*

          1. by minimum challenge 2 clicked we
          delete the view od "30videos" and "choose" dont have actually a view.
          🟥 => CSS - Methode verwenden für das unsetzen

          2. Try to Create new ".info-about-sport-challenge-container"
             if it exist just do update from data by data index

          🟥 => Methode bauen


          => Danach sollte diese Methode | create & update infAbout auch da funktionieren



    */


    /* --------------------------------------------------------------------------- */
    // 🟩 Step 1:
    // 1.1 Unshown "Old View" | "sport-challenge-30-videos-link-container"
    // 1.2 Show View | "sport-challenge-3-videos-link-container"
    /* --------------------------------------------------------------------------- */

      /* ---------------------------------------------------------------------------- */
      /* 1.1 Unshown "Old View" | "sport-challenge-30-videos-link-container"
      /* ---------------------------------------------------------------------------- */

        addPoint_sportChallenge30VideosLinkContainer.style.display = "none";

      /* ---------------------------------------------------------------------------- */
      /* 1.2 Show View | "sport-challenge-3-videos-link-container"
      /* ---------------------------------------------------------------------------- */

        addPoint_sportChallenge3VideosLinkContainer.style.display = "grid";


    /* ------------------------------------------------------------------------------------------------------ */
    // ➡️🟥 Step 2:
    // 2.1 Check to Create New View     | ".info-about-sport-challenge-container"
    // 2.2 Create View (if not exist)   | ".info-about-sport-challenge-container"
    // 2.3 Update View (if exist)       | ".info-about-sport-challenge-container"
    /* ------------------------------------------------------------------------------------------------------ */


      /* ------------------------------------------------------------------------------------------------ */
      /* 🟩 2.1 Check to Create New View | ".info-about-sport-challenge-container"
      /* ------------------------------------------------------------------------------------------------ */

        // global
        var queryExistInfoAbout = ":scope > " + "."+cssClass_infoAboutSportChallenge;
        var addPoint_3VideosContainer = addPoint_sportChallenge3VideosLinkContainer;

        var existInfoAbout = await exist_domElement_in_parent_with_displayNone_check( queryExistInfoAbout , addPoint_3VideosContainer );
        console.log("existInfoAbout = " + existInfoAbout)


        // create if not exist or update if exist
        if( existInfoAbout == false ) {

          console.log("🟩 Create| Info About | Sport Challenge Container ")

          /* ------------------------------------------------------------------------------------------------ */
          /* ➡️🟥 2.2 Create View (if not exist)   | ".info-about-sport-challenge-container"
          /* ------------------------------------------------------------------------------------------------ */

            /* info:
              element really dont exist in dom or
              it exist in dom but it was setted with css style by display:none.
            */

            // global
            await create_content_infoAbout_sport_challenge_prepand_to(
                                                                      data_3_videos_sport_challenges,
                                                                      dataIndex,
                                                                      addPoint_3VideosContainer )

        } else {

          console.log("🟥 Dont Create | Info About | Sport Challenge Container ")

          /* ------------------------------------------------------------------------------------------------ */
          /* ➡️🟥 2.3 Update View (if exist)       | ".info-about-sport-challenge-container"
          /* ------------------------------------------------------------------------------------------------ */

            window.alert("🦖 Update | Info About | Data Index = " + dataIndex)

            await update_view_infoAbout_sport_challenges( data_3_videos_sport_challenges, dataIndex )



        }


    return new Promise(resolve => {
        resolve();
    })

  }
