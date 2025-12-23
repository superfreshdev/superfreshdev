// console.log("🟨 set-content-sport.js")


/* --------------------------------------------------------------------------------------- */
// Set | View Container | Sport Category
/* --------------------------------------------------------------------------------------- */

 // set_sport_content_category( checkedIndex )

 async function set_view_sport_category_content( checkedIndex ){

   // console.log("➡️ set_view_container_sport_cateogry()");

    /* ------------------------------------------------- */
    // Step 1:
    // Get Dom Elements (global)
    /* ------------------------------------------------- */

      // parent_sportNewestVideoContainer
      var content_view_sportNewest_videoContainer = addPoint_sportNewestVideoContainer;
      // parent_sportChallengesVideoContainer
      var content_view_sportChallenges_videoContainer = addPoint_sportChallengeVideoContainer;


      /* ------------------------------------------------- */
      // Step 2:
      // Swtich Sport Category Content by Radio Index
      /* ------------------------------------------------- */

      switch( checkedIndex ) {

        case 0:
          // set content | newest videos (global)
          window.alert("🦁Show Content | Newest Sport Videos")

          /* ------------------------------------------------- */
          /* 🟩 Step 1:
          /* Unset Old Content  | Challenges
          /* Set New Content    | Newest Videos
          /* ------------------------------------------------- */

            // unshown | challenges
            content_view_sportChallenges_videoContainer.style.display = "none";
            // show | newest
            content_view_sportNewest_videoContainer.style.display = "grid";


          /* ----------------------------------------------------------------------------------------------- */
          // ➡️🟥 Step 2:
          // 2.1 Check Exist ".sport-3-videos-link-container" | Top 3 Videos
          // 2.2 Create      ".sport-3-videos-link-container"
          /* ----------------------------------------------------------------------------------------------- */

            /* Reminder:

              the "sport newest videos" content dont need an update condition -
              because
              the content will only create one time by every reload the
              web page and we dont have switching content by ids -
              so the content is everytime the same.

            */


            /* ----------------------------------------------------------------------------------------------------- */
            // 2.1 Check if exist ".sport-3-videos-link-container" | Top 3 Videos
            /* ----------------------------------------------------------------------------------------------------- */

              var selector_existElements2 = ".sport-3-videos-link-container"
              var existElement2 = "";

              existElement2 = await exist_domElements_in_parent_with_displayNone_check( selector_existElements2,
                                                                                       content_view_sportNewest_videoContainer);

              /* ----------------------------------------------------------------------------------------------------- */
              // 2.2 Create only by exist ".sport-3-videos-link-container"
              /* ----------------------------------------------------------------------------------------------------- */

                if( existElement2 == false ) {

                  window.alert("🏗️ Create | Top 3 | Newest Sport Videos ")

                    await create_sport_3_videos_link_container_to( data_newestSportVideos,
                                                                   data_newestSportVideos.top3videos,
                                                                   1,1,
                                                                   content_view_sportNewest_videoContainer );


                } else {

                  // ⚠️ Dont need, just for testing - because we dont need extra update condition
                  window.alert("🟥 Dont Create | Top 3 | Newest Sport Videos ")

                }


              /* ----------------------------------------------------------------------------------------------- */
              // 🟥 Step 3:
              // 3.1 Check Exist ".sport-3-videos-link-container" | 2 x 3 History Videos
              // 3.2 Create      ".sport-3-videos-link-container" | 2 x 3 History Videos
              /* ----------------------------------------------------------------------------------------------- */

                /* Reminder:

                  if minimum one ".sport-3-videos-link-container" was found
                  which is not setted by "display:none" than it starts no creating.

                */

                var selector_existElements = ".sport-3-videos-link-container"
                var existElements = "";

                // global
                var content_view_historySportNewest_videoContainer = addPoint_historySportNewestVideoContainer;

                existElements  = await exist_domElements_in_parent_with_displayNone_check( selector_existElements,
                                                                                           content_view_historySportNewest_videoContainer);

                // console.log("existElements = " + existElements );

                if( existElements  == false ) {

                  window.alert("🏗️ Create in | History | Newest Sport Videos ")

                  // update history counter , only count with externalLInk
                  div_historyCounter_sportNewest.innerText = "("+ await get_maxItems_from_history_newestSportVideos() + ")";

                  // add point history sport newest videos
                  var content_view_historySportNewest_videoContainer = addPoint_historySportNewestVideoContainer

                  // get data history
                  var dataArray_historySportVideos = data_newestSportVideos.historyVideos;

                  // start index begins at 4, because of top3
                  var startIndex = 4;

                  for( let i=0; i < dataArray_historySportVideos.length; i++ ) {


                    await create_sport_3_videos_link_container_to( data_newestSportVideos,
                                                                   dataArray_historySportVideos[i].content3,
                                                                   startIndex,1,
                                                                   content_view_historySportNewest_videoContainer );

                    startIndex = startIndex +3;

                  }




                } else {

                  // ⚠️ Dont need, just for testing - because we dont need extra update condition
                  window.alert("🟥 Dont Create | History | Newest Sport Videos ")

                }


          break;

        case 1:
          // set content | sport hallenges (global)
          window.alert("🦆Show Content | Sport Challenges")

          /* ------------------------------------------------- */
          /* Step 1:
          /* Unset Old Content  | Newest Videos
          /* Set New Content    | Challenges
          /* ------------------------------------------------- */

            // unshown | newest
            content_view_sportNewest_videoContainer.style.display = "none";
            // show | challenges
            content_view_sportChallenges_videoContainer.style.display = "grid";


            /* ------------------------------------------------------------------------ */
            // 🟥 Check Creations -> What is checked  / default choose every time
            /* ------------------------------------------------------------------------ */

              /*
                    1. standard reset immer auf choose , wenn du wieder auf newest gehst
                    2. wenn challenge 1 => show 30 sonst by index andere -> create oder nur update
              */

          break;

        default:
          break;

      }


    return new Promise(resolve => {
      resolve();
      })

 }




  /* ----------------------------------------------------------------------------------------------------- */
  // ⚠️⚠️⚠️ Only Imporant by Sport Challenges Content
  /* ----------------------------------------------------------------------------------------------------- */

    // window.alert("💫 Update in | Newest Sport Videos | .sport-3-videos-link-container | Top 3")

    // get data (global)
    // var data_top3_sportNewestVideos = data_newestSportVideos.top3videos;


    // // 2.3.1 | update "string scope query selector"
    // var strScopeQuerySelector_updateElements = ":scope > .sport-3-videos-link-container > .sport-video-link-box";

    // // 2.3.2 | get update elements by "string scope query selector"
    // var update_sportVideoLinkBoxes = parent_sportNewestVideoContainer.querySelectorAll( strScopeQuerySelector_updateElements )

    // console.log("update_sportVideoLinkBoxes(l) = " + update_sportVideoLinkBoxes.length)

    // await update_view_sport_video_link_boxes(
    //                                           data_newestSportVideos,
    //                                           data_top3_sportNewestVideos,
    //                                           update_sportVideoLinkBoxes )






 /* --------------------------------------------------------------------------------- */
 // ❌❌❌ Trash
 /* --------------------------------------------------------------------------------- */

 async function set_view_container_sport_category_by_index( checkedIndex ) {

    // console.log("➡️ set_view_container_sport_cateogry()");

    var index = checkedIndex;

    switch( index ) {

      case 0:

        /* ------------------------------------------------- */
        /* Step 1:
        /* Unset Old Content  | Challenges
        /* Set New Content    | Newest Videos
        /* ------------------------------------------------- */

          content_sport_challenges_container.style.display = "none";
          addPoint_sportNewestVideoContainer.style.display = "grid";

        /* ------------------------------------------------- */
        // Step 2:
        // 2.1 Create Content | Newest Videos
        /* ------------------------------------------------- */

          console.log("🚀⚙️ Create Content | Newest Videos , index = " + index)

          /* -------------------------------------------------- */
          /* Get Default Datas (global)
          /* -------------------------------------------------- */

          var dataDefaultsNewestSport = data_newest_sport_videos.defaults;
          var dataAllVideosOfNewstSport = data_newest_sport_videos.videos;

          var wishedVideoDatas = [];

          /* ---------------------------------------------------------------------------- */
          /* Add New Content | Sport 3 Videos Link Container #1 (3)
          /* ---------------------------------------------------------------------------- */

            // 🔥🔥 Race Condition by async in if-checking

            // 🟥 Single Element Check

            var parentElementNewestVideo = document.getElementById("sport-newest-video-container");
            // old
            var queryScopeExistElement = ":scope > .sport-3-videos-link-container";

            // async_exist_domElement_in_parent()
            // async_exist_domElement_in_parent_with_displayNone_check()

            // 🟥 Single Element Check

            /*
                check first Ebene -> dann nur eine Methode
            */
            var existElement = await async_exist_domElement_in_domParent_with_displayNone_check( queryScopeExistElement , parentElementNewestVideo );

            /* ------------------------------------------------------- */
            // Create new Element if not exist
            /* ------------------------------------------------------- */

            console.log("existElement 🔥🔥🔥 = " + existElement)

            if( existElement == false ) {

              console.log("➡️ Create (sport_3_video_link_container)")

              //Get Wished Datas (3) | global // async_get_dataArrays_by_indexRange
              wishedVideoDatas = await async_get_wished_arrays_from_data_by_index_range( dataAllVideosOfNewstSport, 1, 3 )

              console.log("wishedVideoDatas[length] = " + wishedVideoDatas.length )

              async_add_new_content_sport_3_video_link_container_to( dataDefaultsNewestSport,
                                                                      wishedVideoDatas, 1, 1,
                                                                      addPoint_sportNewestVideoContainer );

            } else {

              console.log("❌ Dont Create (sport_3_video_link_container), because it exists ")

            }


          /* ---------------------------------------------------------------------------- */
          /* Add New Content | Sport 3 Videos Link Container #2 (History,6)
          /* ---------------------------------------------------------------------------- */

          // 🟥 All Elements Check
          var parentElementHistoryNewestVideo = document.getElementById("content-history-sport-newest-video-container");
          var queryExistElements = ":scope > .sport-3-videos-link-container";


          // 🟥 All Elements Check
          var existElements = await async_exist_domElement_in_domParent_with_displayNone_check( queryExistElements, parentElementHistoryNewestVideo );

          /* ------------------------------------------------------- */
          // Create new Elements if not exist
          /* ------------------------------------------------------- */

          if( existElements == false ) {

            console.log("➡️ Create (history|sport_3_video_link_container)(1/2)")

            //Get Wished Datas (3) | global // async_get_dataArrays_by_indexRange
            wishedVideoDatas = await async_get_wished_arrays_from_data_by_index_range( dataAllVideosOfNewstSport, 1, 3 )

            console.log("wishedVideoDatas[length] = " + wishedVideoDatas.length )

            async_add_new_content_sport_3_video_link_container_to( dataDefaultsNewestSport,
                                                                    wishedVideoDatas, 1, 1,
                                                                    addPoint_historySportNewestVideoContainer );

            console.log("➡️ Create (history|sport_3_video_link_container)(2/2)")

            // Get Wished Datas (history,9) | global

            wishedVideoDatas = await async_get_wished_arrays_from_data_by_index_range( dataAllVideosOfNewstSport, 7, 9 )

            async_add_new_content_sport_3_video_link_container_to( dataDefaultsNewestSport,
                                                                    wishedVideoDatas, 1, 15,
                                                                    addPoint_historySportNewestVideoContainer )


          } else {
            console.log("❌ Dont Create (history|sport_3_video_link_container), because it exists ")
          }


        break;

      case 1:

        /* ------------------------------------------------- */
        /* Step 1:
        /* Unset Old Content  | Newest Videos
        /* Set New Content    | Challenges
        /* ------------------------------------------------- */

          addPoint_sportNewestVideoContainer.style.display = "none";
          content_sport_challenges_container.style.display = "grid";

        /* ------------------------------------------------- */
        // Step 2:
        // 2.1 Create Content | Challenges
        /* ------------------------------------------------- */

          console.log("🚀⚙️ Create Content | Sport Challenges , index = " + index)

          // index Entscheidung, welches Element erzeugt werden soll


        break;

      default:
        window.alert("🟥 There is no content to show by Index = " + index )
        return;

    }

    return new Promise(resolve => {
      resolve();
      })

  }


/* --------------------------------------------------------------------------------------- */
// ❌❌❌ Trash
/* --------------------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------------------- */
// ➡️🟥 Set | Content Sport Challenges by Index
/* --------------------------------------------------------------------------------------- */

  async function async_set_content_sport_challenges_by_index( index ) {

    // console.log("➡️ async_set_content_sport_challenges_by_index() ")

    /* --------------------------------------------- */
    // Step 1:
    // Set Content Sport Challenge by Radio Index
    // index: 0    = choose
    // index: 1    = 30 videos challenge
    // index: >=2  = 3 videos challenge
    /* --------------------------------------------- */

    switch( index ) {

      case 0:

        // Selected: Choose Challenge

        // global
        // unshown all ( 30, 3 )
        add_point_sport_challenge_30_videos_container.style.display = "none";
        add_point_sport_challange_3_videos_container.style.display = "none";

        break;

      case 1:

        // Selected: 30 Videos Challenge

        // global
        // show 30 videos sport challenges
        add_point_sport_challenge_30_videos_container.style.display = "grid";

        window.alert("Content: 30 Videos Challenge muss erstellt werden !!!")

        /* ------------------------------------------------------------------- */
        // 🟥 Step 1:
        /* Create | Info About Sport Challenge by Data */
        /* ------------------------------------------------------------------- */

          /*
            We need:
            const css_class_info_about_sport_challenge = "info-about-sport-challenge-container";
            const css_class_sport_workout_parts = "sport-workout-parts-container";
            const css_class_sport_workout_category = "sport-workout-category";

            ➡️ create_function

        */

        /* ------------------------------------------------------------------- */
        // 🟥 Step 2:
        // 2.1 Creates | Sport 15 Videos Link Container (x2)  */
        // 2.2 Adds | "Sport 15 Videos Link Container (i)" to "add_point"  */
        /* ------------------------------------------------------------------- */

          /*
            We need:
            const add_point_sport_challenge_30_videos_container = document.getElementById("sport-challenge-30-videos-link-container");

            ➡️ create_function 15

          */


        break;

      default:

        // global
        // Show Content | Sport Challenge 3 Videos Container
        add_point_sport_challange_3_videos_container.style.display = "grid";

          // window.alert("Content: 3 Videos Challenge muss erstellt werden !!!")

          /* info:
             Sport Challenges with only 3 videos beginn at index 2, so
             to get these data we need to subtract giving minimum index of 2 every
             time with -1.
             That means e.g by index = 2, we calc 2-2=0. 0 is the first
             data index. By index = 3, we calc 3-2=1. 1 is the second data index and so on.
          */
          var data_index = index - 2;

          /* ------------------------------------------------------------------- */
          // ➡️🟥 Step 1:
          /* Create Element | Info About Sport Challenge Container */
          /* ------------------------------------------------------------------- */

          async_create_info_about_sport_challenge_container_to(
                                                                data_3_sport_videos_challenges,
                                                                data_index,
                                                                add_point_sport_challange_3_videos_container )

          /* ------------------------------------------------------------------- */
          // 🟥 Step 2:
          /* Create Element | Sport 3 Videos Link Container  */
          /* ------------------------------------------------------------------- */


          break;

    }

    return new Promise(resolve => {
          resolve();
    })

  }


/* -------------------------------------------------------------------------------------- */
/* ➡️🟥 Async Create | Info About Sport Challenge Container
/* -------------------------------------------------------------------------------------- */

  async function async_create_info_about_sport_challenge_container_to( data, dataIndex, addPoint ) {

    console.log("➡️ async_create_info_about_sport_challenge_container()")

    /* ------------------------------------------------------------------------- */
    // Step 1:
    // Get Wished Datas
    /* ------------------------------------------------------------------------- */

     var dataDefaults = data.defaults;

     var dataSportChallenge = data.challenges[dataIndex];
     var dataAbout = dataSportChallenge.content.about;
     var dataVideos = dataSportChallenge.content.videos;

     /*  We need:
          const css_class_info_about_sport_challenge = "info-about-sport-challenge-container";
          const css_class_sport_workout_parts = "sport-workout-parts-container";
          const css_class_sport_workout_category = "sport-workout-category";

          ➡️ create_function

    */

    /* -------------------------------------------------------------------------------------------------- */
    // 🟥 Step 2:
    // 2.1 Delete old Created Element ".info-about-sport-challenge-container" ( if it exist )
    // 2.2 Create new ".info-about-sport-challenge-container"
    // 2.4 Add new ".info-about-sport-challenge-container" to "addPoint"
    /* -------------------------------------------------------------------------------------------------- */

      /* ------------------------------------------------------ */
      /* 🟩 2.1 Delete old
      /* ------------------------------------------------------ */

        var old_info_about = addPoint.querySelector(".info-about-sport-challenge-container");
        delete_domElement_from( old_info_about )

      /* ------------------------------------------------------ */
      /* 🟥 2.2 Create new
      /* ------------------------------------------------------ */

        /* --------------------------------------------------------------------------------------- */
        // Step 1:
        // Create ".info-about-sport-challenge-container"
        /* --------------------------------------------------------------------------------------- */

        var newDivInfoAbout = get_new_divClass( "info-about-sport-challenge-container" )

          /* --------------------------------------------------------------------------------------- */
          // Step 2:
          // 2.1 Create Header
          // 2.2 Add "Header" to ".info-about-sport-challenge-container"
          /* --------------------------------------------------------------------------------------- */

            // Prints
            console.log("header_img_path= " + dataDefaults.imgAboutPath )
            console.log("header_img_class= " + dataDefaults.imgAboutClass )
            console.log("header_div_text= " + dataAbout.info )

            var imgAboutPath = dataDefaults.imgAboutPath;
            var imgAboutClass = dataDefaults.imgAboutClass;
            var textHeaderAbout = dataAbout.info

            add_headerImgText_append_to( imgAboutPath, imgAboutClass, textHeaderAbout, newDivInfoAbout );


          /* --------------------------------------------------------------------------------------- */
          // Step 3:
          // 3.1 Create Main
          // 3.2 Create Main Child Elements
          // 3.2 Add "Main" to ".info-about-sport-challenge-container"
          /* --------------------------------------------------------------------------------------- */

            /* ----------------------------------------------------------------- */
            // 3.1 Create Main
            /* ----------------------------------------------------------------- */

              var newMain = document.createElement("main");

            /* ----------------------------------------------------------------- */
            /* 3.1 Create Main Child Elements
            /* ----------------------------------------------------------------- */

              // ⚠️Datei => sportARts schlecht anderen Namen

              var dataSportArts = dataAbout.sportArts;

              var newSportWorkoutPartsContainer = [];

              var dayDivs = [];
              var daySubDivs = [];
              var sportCategoryItems = [];

              newSportWorkoutPartsContainer.push( document.createElement("div") )
              newSportWorkoutPartsContainer[0].setAttribute("class", "sport-workout-parts-container")

              // ⚠️ Loop
              for( let i=0; i < dataSportArts.length; i++) {

                console.log(i + ":" + dataSportArts[i].days )

                /* ---------------------------------------- */
                /* Create Div "X Days" (if exist)
                /* ---------------------------------------- */

                  if( dataSportArts[i].days != "" ) {

                    // Create Div "Days"
                    dayDivs.push( document.createElement("div") )
                    dayDivs[i].setAttribute("class", "sport-workout-days");

                    // Create Div "Days" Span
                    daySubDivs.push( document.createElement("span") )
                    daySubDivs.innerText = dataSportArts[i].days;

                    // Add "dayDivs[i]" to "daySubDivs[i]"
                    dayDivs[i].appendChild( daySubDivs[i]  )


                  }

                  // Add "dayDivs[i]" to "daySubDivs[i]"
                  async_create_sport_workout_parts_container_to( dataSportArts[i].days, newSportWorkoutPartsContainer[0] )

                  for( let j=0; j < dataSportArts[i].items.length; j++ ) {

                    console.log(j + ": " + dataSportArts[i].items[j].imgName )
                  }

                /* Create Sport Arts Row */

                /*
                    1. Create Days
                    2. Create Items

                */


              }

              newMain.appendChild( newSportWorkoutPartsContainer[0] )


            /* ----------------------------------------------------------------- */
            /* 3.2 Add Main to ".info-about-sport-challenge-container"
            /* ----------------------------------------------------------------- */






            // await async_create_sport_workout_parts_container_to( textDays, newMain )

            // add newMein to newDivInfoAbout
            newDivInfoAbout.appendChild( newMain )


            async function async_create_sport_workout_parts_container_to( textDays, mainPoint ) {

              // Default CSS Classes to Create
              var cssClass_sport_workout_parts_container = "sport-workout-parts-container";
              var cssClass_sport_workout_days = "sport-workout-days";
              var cssClass_sport_workout_category = "sport-workout-category";

              /* ----------------------------------------------------- */
              /* Step 1:
              /* Create ".sport-workout-parts-container"
              /* ----------------------------------------------------- */

                var new_sport_workout_parts_container = document.createElement("div");
                new_sport_workout_parts_container.setAttribute("class", cssClass_sport_workout_parts_container )


            /* ----------------------------------------------------- */
            /* Step 2:
            /* Create ".sport-workout-days" if it is defined
            /* ----------------------------------------------------- */

              if( textDays != "" ) {


                var new_sport_workout_days = document.createElement("div");
                new_sport_workout_days.setAttribute("class", cssClass_sport_workout_days);

                // child span
                var new_span_sport_workout_days = document.createElement("span");
                new_span_sport_workout_days.innerText = textDays;

                // add "span" to "new_sport_workout_days"
                new_sport_workout_days.appendChild( new_span_sport_workout_days )

                // add "new_sport_workout_days" to "new_sport_workout_parts_container"
                new_sport_workout_parts_container.appendChild( new_sport_workout_days )


              }


            // Final
            // Add "new_sport_workout_parts_container" to "mainPoint"
            mainPoint.appendChild( new_sport_workout_parts_container )


        }


          /* ----------------------------------------- */
          /* Create | ".sport-workout-parts-container"
          /* ----------------------------------------- */



        /* --------------------------------------------------- */
        // Step 3:
        // 2.1 Create main
        // 2.2 Create ".sport-workout-parts-container"
        //
        // 2.3 Create ".sport-workout-days" (if needed)
        // 2.4 Create ".sport-workout-category"
        //
        // 2.5 Add "elements" to ".sport-workout-parts-container"
        //
        // 2.5 Add new "header" to "main"
        /* --------------------------------------------------- */

          // Create

          // Add



      /* ------------------------------------------------------ */
      /* 🟥 2.3 Add new to "addPoint"
      /* ------------------------------------------------------ */

        // 🟥 Coming Soon

        // 🦖 Adding Testing
        addPoint.prepend( newDivInfoAbout );




    return new Promise(resolve => {
          resolve();
    })

  }

/* -------------------------------------------------------------------------------------- */
/* 🟥 Async Create | Sport 3 Videos Link Container
/* -------------------------------------------------------------------------------------- */

   async function async_create_sport_3_videos_link_container_to( data, dataIndex ) {

    console.log("➡️ async_create_sport_3_videos_link_container_to()")

    /* -------------------------------------------------------------------------------------------------- */
    // 🟥 Step 1:
    // 1.1 Delete old Created Element ".sport-3-videos-link-container" ( if it exist )
    // 1.2 Create new ".sport-3-videos-link-container"
    // 1.3 Add new ".sport-3-videos-link-container" to "addPoint"
    /* -------------------------------------------------------------------------------------------------- */

      /* ------------------------------------------------------ */
      /* 🟩 1.1 Delete old
      /* ------------------------------------------------------ */

      var old_sport_3_videos_link =  addPoint.querySelector(".sport-3-videos-link-container");
      delete_domElement_from( old_sport_3_videos_link )

      /* ------------------------------------------------------ */
      /* 🟥 1.2 Create new
      /* ------------------------------------------------------ */

      // 🟥 Coming Soon

      /* ------------------------------------------------------ */
      /* 🟥 1.3 Add new to "addPoint"
      /* ------------------------------------------------------ */

      // 🟥 Coming Soon


  }
