console.log("🟨 async-update-view-header-nav-sport.js")


/* ----------------------------------------------------------------------------------------- */
/* Async | Update Views | Header Nav Sport Categories
/* ----------------------------------------------------------------------------------------- */

  async function async_update_view_header_nav_sport() {

    console.log("➡️ async_update_view_header_nav_sport()")

    /* -------------------------------------------------------------------------------------------------------------- */
    // 🟥 Step 1:
    // 1.1 Update View | Selects Sport Categories (max content items)
    // 1.2 Update View | Selected Sport Category (label)
    // 1.3 Update View | Header Sport Category
    /* -------------------------------------------------------------------------------------------------------------- */

      console.log("⚙️⚙️⚙️ Update Views | Header Nav Sport ")

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

      console.log("⚙️⚙️⚙️ Create Elements | Nav Sport Challenges ")


    /* ---------------------------------------------------------------------------- */
    // 🟥 Step 3:
    // Add Radio Change Listener | Sport Categories
    // 3.1 Update View | Selected Sport Categories
    // 3.2 Update View | Header Sport Categories
    // 3.3 Set Content | "Newest Videos" or "Challenges"
    /* ---------------------------------------------------------------------------- */

      console.log("⚙️⚙️⚙️ Add Radio Change Listener | Nav Sport Categories ")

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

                  // 🔥🔥🔥 Check if this element exist ? dont create again | because it adds and adds

                  // async_check_if_domElement_exist_in_parent( domElement, parent )

                  var existElement = false;

                  if( existElement == false ) {

                    console.log("➡️ Create Element 1-3 ")

                  } else {

                    console.log("❌ Dont Create Element 1-3, because it exists ")

                  }

                  // Get Wished Datas (3) | global
                  wishedVideoDatas = await async_get_wished_arrays_from_data_by_index_range( dataAllVideosOfNewstSport, 1, 3 )

                  // console.log("wishedVideoDatas[length] = " + wishedVideoDatas.length )

                  async_add_new_content_sport_3_video_link_container_to( dataDefaultsNewestSport,
                                                                         wishedVideoDatas, 1, 1,
                                                                         content_newest_sport_videos_container );

                /* ---------------------------------------------------------------------------- */
                /* Add New Content | Sport 3 Videos Link Container #2 (History,6)
                /* ---------------------------------------------------------------------------- */

                  // Get Wished Datas (history,6) | global

                  wishedVideoDatas = await async_get_wished_arrays_from_data_by_index_range( dataAllVideosOfNewstSport, 4, 6 )

                  // console.log("wishedVideoDatas[length] = " + wishedVideoDatas.length )

                  async_add_new_content_sport_3_video_link_container_to( dataDefaultsNewestSport,
                                                                         wishedVideoDatas, 1, 5,
                                                                         content_history_newest_sport_videos_container );

                /* ---------------------------------------------------------------------------- */
                /* Add New Content | Sport 3 Videos Link Container #2 (History,9)
                /* ---------------------------------------------------------------------------- */

                  // Get Wished Datas (history,9) | global

                  wishedVideoDatas = await async_get_wished_arrays_from_data_by_index_range( dataAllVideosOfNewstSport, 7, 9 )

                  async_add_new_content_sport_3_video_link_container_to( dataDefaultsNewestSport,
                                                                         wishedVideoDatas, 1, 15,
                                                                         content_history_newest_sport_videos_container );

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
