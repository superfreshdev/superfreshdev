// console.log("🟨 create-content-infoAbout-sportChallenge-to.js")


/* ------------------------------------------------------------------------------- */
/* ➡️🟥 Create Content | Info About | Sport Challenge
/* ------------------------------------------------------------------------------- */

 // create_content_infoAbout_sportChallenge_prepeand_to()
 async function create_content_infoAbout_sport_challenge_prepand_to( dataContent, dataIndex, addPoint ) {


    console.log("➡️ create_content_infoAboutSportChallenge_prepand_to()")

    /* ------------------------------------------------------------- */
    // Test Prints
    /* ------------------------------------------------------------- */

      // console.log("dataContent = " + dataContent);
      // console.log("dataIndex = " + dataIndex);
      // console.log("addPoint = " + addPoint);


    /* ------------------------------------------------------------- */
    // 🟩 Step 1
    // Create "Div" of ".info-about-sport-challenge-container"
    /* ------------------------------------------------------------- */

      // get class name (global)
      var cssClass_infoAbout = data_layout_sportChallenges.infoAbout.cssClassInfoAbout;
      // create new div
      var new_InfoAboutContainer = await get_new_divClass( cssClass_infoAbout )


      /* ----------------------------------------------------------------------- */
      // 🟩 Step 1.1
      // Create "Header" of ".info-about-sport-challenge-container"
      /* ----------------------------------------------------------------------- */

        await create_header_infoAboutSportChallenge_to( dataContent, dataIndex, new_InfoAboutContainer )


      /* ----------------------------------------------------------------------- */
      // 🟩 Step 1.2
      // Create "Header" of ".header-info-workout-sport-challenge"
      /* ----------------------------------------------------------------------- */

        await create_header_infoWorkoutSportChallenge_to( dataContent, dataIndex, new_InfoAboutContainer )


      /* ----------------------------------------------------------------------- */
      // 🟩 Step 1.3
      // Create "Main" with all ".week-workout-sport-challenge-container"
      /* ----------------------------------------------------------------------- */

        await create_all_weekWorkouts_sport_challenge_containers_to( dataContent, dataIndex, new_InfoAboutContainer )



    /* -------------------------------------------------------------- */
    /* Create Div | .info-about-sport-challenge-container
    /* -------------------------------------------------------------- */

      // // global var-dom
      // var cssClassInfoAbout = "info-about-sport-challenge-container";

      // var newInfoAboutElement = document.createElement("div")
      // newInfoAboutElement.setAttribute("class", cssClassInfoAbout )

      /* -------------------------------------------------------------- */
      /* ➡️🟥 1/3 | Create Header
      /* -------------------------------------------------------------- */



      // /* -------------------------------------------------------------- */
      // /* 🟥 3/3 | Create Main
      // /* -------------------------------------------------------------- */





    /* -------------------------------------------------------------------- */
    /* Add Final "new_InfoAbout" to "addPoint"
    /* -------------------------------------------------------------------------- */

        addPoint.prepend( new_InfoAboutContainer );



   return new Promise(resolve => {
        resolve();
    })

 }
