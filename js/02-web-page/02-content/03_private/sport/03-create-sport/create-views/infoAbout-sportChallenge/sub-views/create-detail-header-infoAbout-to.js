// console.log("🟨 create-detail-header-infoAbout-to.js")



/* ------------------------------------------------------------------------------- */
/* 🟩 Async | Create | Header | ".header-info-workout-sport-challenge"
/* ------------------------------------------------------------------------------- */

  async function create_header_infoWorkoutSportChallenge_to( dataContent, dataIndex, addPoint ) {

      // console.log("➡️ create_header_infoWorkoutSportChallenge_to()")

      /* -------------------------------------------------- */
      // Test Prints
      /* -------------------------------------------------- */

        // console.log("[h]dataContent = " + dataContent )
        // console.log("[h]dataIndex = " + dataIndex )
        // console.log("[h]addPoint = " + addPoint )


      /* -------------------------------------------------------------------------- */
      // Step 1:
      // Create "header" "header-info-workout-sport-challenge"
      /* -------------------------------------------------------------------------- */

        // get css class
        var cssClass_headerInfoWorkout = data_layout_sport_challenges.layoutInfoAbout.cssClassHeaderInfoWorkout;
        // create new div with class
        var div_headerInfoWorkout = await get_new_divClass( cssClass_headerInfoWorkout )


        /* -------------------------------------------------------------------------- */
        // Step 1.1:
        // Create "span" with "text"
        /* -------------------------------------------------------------------------- */

          // get text
          var textHeaderInfoWorkout = dataContent.challenges[dataIndex].content.infoAbout.headerInfoSportWorkout;

          // create "span"
          var span_headerInfoWorkout = document.createElement("span");
          span_headerInfoWorkout.innerText = textHeaderInfoWorkout;

          // add "span" to "div_headerInfoWorkout"
          div_headerInfoWorkout.appendChild( span_headerInfoWorkout )


      /* -------------------------------------------------- */
      // Step 2:
      // Add "div_headerInfoWorkout" to "addPoint"
      /* -------------------------------------------------- */

        addPoint.appendChild( div_headerInfoWorkout );




      return new Promise(resolve => {
          resolve();
      })

  }
