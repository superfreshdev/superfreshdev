// console.log("🟨 create-detail-content-infoAbout-to.js.js")


/* ------------------------------------------------------------------------------- */
/* 🟩 Async | Create | All | ".week-workout-sport-challenge-container"
/* ------------------------------------------------------------------------------- */

  // main ->  all .week | details-sport-challenge | sport-week-workout-container | info-sport-days, info-sport-category

  async function create_all_weekWorkouts_sport_challenge_containers_to( dataContent, dataIndex, addPoint ) {

    console.log("➡️ create_all_weekWorkouts_sport_challenge_containers_to()")

    /* -------------------------------------------------- */
    // Test Prints
    /* -------------------------------------------------- */

      // console.log("[h]dataContent = " + dataContent )
      // console.log("[h]dataIndex = " + dataIndex )
      // console.log("[h]addPoint = " + addPoint )

    /* -------------------------------------------------------------------------- */
    // Step 1:
    // Create "main"
    /* -------------------------------------------------------------------------- */

      var new_main = document.createElement("main");

    /* -------------------------------------------------------------------------- */
    // Step 2:
    // Get Datas
    /* -------------------------------------------------------------------------- */

      /* --------------------------------------------------- */
      // ".week-workout-sport-challenge-container"
      /* --------------------------------------------------- */

        var data_sportWeekWorkouts = dataContent.challenges[dataIndex].content.infoAbout.sportWeekWorkouts;
        var maxSportWeekWorkouts = data_sportWeekWorkouts.length;
        console.log("maxSportWeekWorkouts = " + maxSportWeekWorkouts )

        var div_weekWorkoutContainers = [];
        var cssClass_weekWorkoutContainer = data_layout_sportChallenges.infoAbout.cssClassWeekWorkoutContainer;

      /* --------------------------------------------------- */
      // ".info-days-sport-workout"
      /* --------------------------------------------------- */

        var div_infoDays = [];
        var span_infoDays = [];

        var text_days = "";

        var cssClass_infoDays = data_layout_sportChallenges.infoAbout.cssClassInfoDays;

      /* --------------------------------------------------- */
      // ".info-sport-workout-category"
      /* --------------------------------------------------- */

        var div_infoSport = [];
        var img_infoSport = [];
        var sub_div_infoSport = [];

        var cssClass_infoSport = data_layout_sportChallenges.infoAbout.cssClassInfoSport;

        // paths of img
        var imgDefaultPath_infoSport = data_layout_sport_categoriesNew.defaults.imgDefaultGreyPath;
        var imgFullPath_infoSport = "";

        // css class img
        var cssClass_imgInfoSport = "";

        // data of info sport items
        var data_infoSportItems = "";
        var maxSportItems = "";

        // text info sport items
        var text_infoSport = "";


    /* -------------------------------------------------------------------------- */
    // Step 3:
    // Create all "week-workout-sport-challenge-container"
    /* -------------------------------------------------------------------------- */

      for( let i=0; i < maxSportWeekWorkouts; i++ ) {


        // console.log(i + ": " + data_sportWeekWorkouts[i].days )
        text_days = data_sportWeekWorkouts[i].days;

        /* -------------------------------------------------------------------------- */
        // Step 1:
        // Create "div" ".week-workout-sport-challenge-container"
        /* -------------------------------------------------------------------------- */

          div_weekWorkoutContainers.push( await get_new_divClass( cssClass_weekWorkoutContainer ) )

        /* ------------------------------------------------------------------------- */
        // Step 2:
        // Create "div" "days" if not empty
        /* -------------------------------------------------------------------------- */

          if( text_days != "" ) {

            console.log("🟩 Create Div | Days ")

            /* ----------------------------------------------------------------------- */
            // create div | "info days"
            /* ----------------------------------------------------------------------- */

              div_infoDays.push( await get_new_divClass( cssClass_infoDays ) )

              /* ----------------------------------------------------------------------- */
              // create span | "info days"
              /* ---------------------------------------------------------------------- */

                span_infoDays.push( document.createElement("span") )
                // add "text" to span
                span_infoDays[i].innerText = text_days;

          /* -------------------------------------------------------------------------- */
          // Step 3:
          // Add  "div_infoDays[i]" to "div_weekWorkoutContainers[i]"
          /* -------------------------------------------------------------------------- */

            // add "span_infoDays[i]" to "div_infoDays[i]"
            div_infoDays[i].appendChild( span_infoDays[i] )

            // add "div_infoDays[i]" to "div_weekWorkoutContainers[i]"
            div_weekWorkoutContainers[i].appendChild( div_infoDays[i] )


          }

        /* -------------------------------------------------------------------------- */
        // Step 3:
        // Create all ".info-sport-workout-category"
        /* -------------------------------------------------------------------------- */

          // set data by data index
          data_infoSportItems = data_sportWeekWorkouts[i].sportCategories;
          maxSportItems = data_infoSportItems.length;


          for( let k=0; k < maxSportItems; k++ ) {


            // console.log(k + ": " + data_infoSportItems[k].imgName)

            /* ---------------------------------------------------------- */
            // Step 1:
            // Create Div ".info-sport-workout-category"
            /* ---------------------------------------------------------- */

              div_infoSport.push( await get_new_divClass( cssClass_infoSport ) )

              /* ---------------------------------------------------------- */
              // Step 1.1:
              // Create Img ".info-sport-workout-category"
              /* ---------------------------------------------------------- */

                // get full img path
                imgFullPath_infoSport = imgDefaultPath_infoSport + data_infoSportItems[k].imgName;
                // get css class
                cssClass_imgInfoSport = data_infoSportItems[k].imgCssClass

                // creat new img
                img_infoSport.push( await get_new_imgClass( imgFullPath_infoSport, cssClass_imgInfoSport ) )

                // add "img" to "div_infoSport[i]"
                div_infoSport[k].appendChild( img_infoSport[k] )

              /* ---------------------------------------------------------- */
              // Step 1.2:
              // Create Sub Div "text"
              /* ---------------------------------------------------------- */

                // get text from data
                text_infoSport = data_infoSportItems[k].title;

                // create new div with text
                sub_div_infoSport.push( await get_new_divText( text_infoSport ) )

                // add "sub_div_infoSport[i]" to "div_infoSport[i]"
                div_infoSport[k].appendChild( sub_div_infoSport[k] )


            /* ---------------------------------------------------------- */
            // Step 2:
            // Add "div_infoSport[k]" to "div_weekWorkoutContainers[i]"
            /* ---------------------------------------------------------- */

              // console.log("i=" + i);
              // console.log("k=" + k);
              // console.log(k + "k | 🟨 = " + div_infoSport[k].outerHTML )

              div_weekWorkoutContainers[i].append( div_infoSport[k] )

          }

        /* -------------------------------------------------------------------------- */
        // Step 4:
        // Add Complete "div_weekWorkoutContainer[i]" to "new_main"
        /* -------------------------------------------------------------------------- */

          new_main.appendChild( div_weekWorkoutContainers[i] );


        /* -------------------------------------------------------------------------- */
        // Step 5:
        // Reset Array Elements of ".info-sport-workout-category"
        /* -------------------------------------------------------------------------- */

          // start by index zero again for the next "div_weekWorkoutContainer[i]"
          div_infoSport = [];
          img_infoSport = [];
          sub_div_infoSport = [];

      }

    /* -------------------------------------------------- */
    // Step 4:
    // Add Final "new_main " to "addPoint"
    /* -------------------------------------------------- */

      addPoint.appendChild( new_main );



      return new Promise(resolve => {
          resolve();
      })

  }
