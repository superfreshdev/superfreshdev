// console.log("🟨 update-view-infoAbout-sportChallenge.js")


/* ------------------------------------------------------------------------------- */
/* ➡️🟥 Async | Update View | Info About | Sport Challenges
/* ------------------------------------------------------------------------------- */

  // update_view_infoAbout_sportChallenges( data, dataIndex )
  async function update_view_infoAbout_sport_challenges( data, dataIndex ) {

    console.log("➡️ update_view_infoAbout_sport_challenges_from()")

    // Test Prints
    console.log("data = " + data );
    console.log("dataIndex = " + dataIndex);


    /* ------------------------------------------------------------------------ */
    // Get "AddPoint" to update Elements
    /* ------------------------------------------------------------------------ */

      // get ".info-about-sport-challenge-container" Element
      var getInfoAboutElement =  addPoint_sportChallenge3VideosLinkContainer.querySelector(".info-about-sport-challenge-container");

    /* ------------------------------------------------------------------------ */
    // 🟨🟥 1/3 | Update "header"
    /* ------------------------------------------------------------------------ */

      // get title
      var text_header = data.challenges[dataIndex].infoAbout.headerTitle;
      console.log("text_header = " + text_header )

      // update
      var update_headerElement = getInfoAboutElement.querySelector(":scope > header > div")
      update_headerElement.innerText = text_header+"(only Update on exist Element)";


    /* ------------------------------------------------------------------------ */
    // 🟨🟥 2/3 | Update "header info workout"
    /* ------------------------------------------------------------------------ */

      // get header info workout
      var text_headerInfoWorkout = data.challenges[dataIndex].infoAbout.headerInfoSportWorkout;
      console.log("text_headerInfoWorkout = " + text_headerInfoWorkout )

      // update
      var update_headerInfoWorkoutElement = getInfoAboutElement.querySelector(":scope > .header-info-workout-sport-challenge > span");
      update_headerInfoWorkoutElement.innerText = text_headerInfoWorkout+"🌴";

    /* ------------------------------------------------------------------------ */
    // 🟥 3/3 | Create New ".week-workout-sport-challenge-container"
    /* ------------------------------------------------------------------------ */

      // Special Case
      // Create because there are dyn. many or less elements by different challenges


      /* ------------------------------------------------------------- */
      /* Step 1:
      /* Remove Main
      /* ------------------------------------------------------------- */

        // get main element
        var mainElement = getInfoAboutElement.querySelector(":scope > main");

        // remove old main
        mainElement.remove();

      /* ------------------------------------------------------------- */
      /* Step 2:
      /* Create New ".week-workout-sport-challenge-container"
      /* ------------------------------------------------------------- */

        await create_all_weekWorkouts_sport_challenge_containers_to( data, dataIndex, getInfoAboutElement )




      /* ------------------------------------------------------------------------ */
      // 🟥 4/4 | "Update IMG Links"
      /* ------------------------------------------------------------------------ */


    /* -------------------------------------------------------- */
    // Get Dom Elements
    /* -------------------------------------------------------- */



      // get title ...




    return new Promise(resolve => {
      resolve();
    })

  }
