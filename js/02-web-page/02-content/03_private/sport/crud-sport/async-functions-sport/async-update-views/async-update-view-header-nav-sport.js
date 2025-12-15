// console.log("🟨 async-update-view-header-nav-sport.js")
// 🟥 update-sport-categories-header-nav.js




/*

     1. update_sport_categroies_header_nav()
          - update
          - create sport challenges
          - add radio change listener to create content
              - if content exist dont create again ( check exist & display=none )


*/


/* ------------------------------------------------------------------------------- */
/* 🟩 Async | Update | Sport Categories | Header Nav
/* ------------------------------------------------------------------------------- */

  async function update_sport_categegories_header_nav() {

    console.log("➡️ update_sport_categegories_header_nav()")

    /* -------------------------------------------------------------------------------------------------------------- */
    // 🟩 Step 1:
    // 1.1 Update View               | Selects Sport Categories (max content items)
    // 1.1 Add Radio Change Listener | Selects Sport Categories
    // 1.2 Update View               | Selected Sport Category (label)
    // 1.3 Update View               | Header Sport Category
    /* -------------------------------------------------------------------------------------------------------------- */

      console.log("🟥⚙️ Update Views | Header Nav Sport Categories")

      /* ----------------------------------------------------------------------------------- */
      // 🟩 1.1 Update View | Selects Sport Categories (max content items)
      /* ----------------------------------------------------------------------------------- */

        //  global ( runs only one time )
        await update_maxItems_to_label_select_sport_categories();


      /* ----------------------------------------------------------------------------------- */
      // ➡️🟥 1.2 Add Radio Change Lister
      /* ----------------------------------------------------------------------------------- */

        await create_radio_change_listener_select_sport_categories( radios_sport_categories );


      /* ----------------------------------------------------------------------------------- */
      // 🟩 1.3 Update View | Selected Sport Category (label)
      /* ----------------------------------------------------------------------------------- */

        var checkedIndex = await get_checked_index_otherwise_indexZero_from( radios_sport_categories );

        // global
        await update_label_selected_sport_category_by_index( checkedIndex );


      /* ----------------------------------------------------------------------------------- */
      // 🟩 1.4 Update View | Header Sport Category
      /* ----------------------------------------------------------------------------------- */

        // global
        await update_header_sport_category_by_index( checkedIndex );





    return new Promise(resolve => {
          resolve();
      })


  }

/* ------------------------------------------------------------------------------- */
/* ➡️🟥 Async | Update | Sport Challenges Nav
/* ------------------------------------------------------------------------------- */

  async function update_sport_challenges_nav() {

    // console.log("➡️ update_sport_challenges_nav()")

      /* ---------------------------------------------------------------------------- */
      // ➡️🟥 Step 1:
      // 1.1 Create Radios                    | Sport Challenges
      // 1.2 Create Label                     | Sport Challenges
      // 1.3 Create Radio Change Listeners    | Sport Challenges
      /* ---------------------------------------------------------------------------- */

        // console.log("🟨⚙️ Create Elements | Nav Sport Challenges ")



    return new Promise(resolve => {
        resolve();
    })

  }












/* ----------------------------------------------------------------------------------- */
/* ❌❌❌ Trash
/* ----------------------------------------------------------------------------------- */

  async function async_update_view_header_nav_sport() {

    console.log("➡️ async_update_view_header_nav_sport()")

    /* -------------------------------------------------------------------------------------------------------------- */
    // 🟥 Step 1:
    // 1.1 Update View | Selects Sport Categories (max content items)
    // 1.2 Update View | Selected Sport Category (label)
    // 1.3 Update View | Header Sport Category
    /* -------------------------------------------------------------------------------------------------------------- */

      console.log("⚙️ Update Views | Header Nav Sport ")

      /* ----------------------------------------------------------------------------------- */
      // 🟩 1.1 Update View | Selects Sport Categories (max content items)
      /* ----------------------------------------------------------------------------------- */

        // global
        await update_views_labels_select_sport_categories( lbl_radios_sport_categories );

      /* ----------------------------------------------------------------------------------- */
      // 🟩 1.2 Update View | Selected Sport Category (label)
      /* ----------------------------------------------------------------------------------- */

        // global
        await update_view_label_selected_sport_category( radios_sport_categories, lbl_selected_sport_category );

      /* ----------------------------------------------------------------------------------- */
      // 🟩 1.3 Update View | Header Sport Category
      /* ----------------------------------------------------------------------------------- */

        // global
        await update_view_header_sport_category( radios_sport_categories, header_sport_category );


    /* ---------------------------------------------------------------------------- */
    // 🟥 Step 2:
    // 2.1 Create Radios                    | Sport Challenges
    // 2.2 Create Label                     | Sport Challenges
    // 2.3 Create Radio Change Listeners    | Sport Challenges
    /* ---------------------------------------------------------------------------- */

      console.log("⚙️ Create Elements | Nav Sport Challenges ")


    /* ---------------------------------------------------------------------------- */
    // 🟥 Step 3:
    // Add Radio Change Listener | Sport Categories
    // 3.1 Update View | Selected Sport Categories
    // 3.2 Update View | Header Sport Categories
    // 3.3 Set Content | "Newest Videos" or "Challenges"
    /* ---------------------------------------------------------------------------- */

      console.log("⚙️ Add Radio Change Listener | Nav Sport Categories ")

      // global
      for( let index=0; index < radios_sport_categories.length; index++ ) {


        radios_sport_categories[index].addEventListener("change", async ()=> {

          /* ----------------------------------------------------------------------------------- */
          // 🟨🟩 3.1 Update View | Selected Sport Categories
          /* ----------------------------------------------------------------------------------- */

            // global
            update_view_label_selected_sport_category( radios_sport_categories, lbl_selected_sport_category );

          /* ----------------------------------------------------------------------------------- */
          // 🟨🟩 3.2 Update View | Header Sport Categories
          /* ----------------------------------------------------------------------------------- */

            // global
            update_view_header_sport_category( radios_sport_categories, header_sport_category );

          /* ----------------------------------------------------------------------------------- */
          // ➡️🟥 Set Content | "Newest Videos" or "Challenges"
          /* ----------------------------------------------------------------------------------- */

           switch( index ) {

            case 0:

              /* ------------------------------------------------- */
              /* Step 1:
              /* Unset Old Content  | Challenges
              /* Set New Content    | Newest Videos
              /* ------------------------------------------------- */

                content_sport_challenges_container.style.display = "none";
                content_newest_sport_videos_container.style.display = "grid";

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
                                                                           content_newest_sport_videos_container );

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
                                                                          content_history_newest_sport_videos_container );

                  console.log("➡️ Create (history|sport_3_video_link_container)(2/2)")

                  // Get Wished Datas (history,9) | global

                  wishedVideoDatas = await async_get_wished_arrays_from_data_by_index_range( dataAllVideosOfNewstSport, 7, 9 )

                  async_add_new_content_sport_3_video_link_container_to( dataDefaultsNewestSport,
                                                                         wishedVideoDatas, 1, 15,
                                                                         content_history_newest_sport_videos_container )


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

                content_newest_sport_videos_container.style.display = "none";
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




        })

      }

    return new Promise(resolve => {
        resolve();
    })

  }
