// console.log("🟨 set_content_sport.js")


  /* --------------------------------------------------------------------------------------- */
  // ➡️🟥 Set | Content Sport Challenges by Index
  /* --------------------------------------------------------------------------------------- */

  function set_content_sport_challenges_by_index( index ) {

      // console.log("➡️ set_content_sport_by_index ")

     /* ---------------------------------------------------------------- */
     // Step 1:
     /* Get Video Link Datas by Index
     /* ---------------------------------------------------------------- */

     /* ---------------------------------------------------------------- */
     // Step 2:
     /* 2.1 Set Content
     /* 2.2 Create Video Link Datas by Index > 1 ( 3 Videos )
     /* ---------------------------------------------------------------- */

     switch( index ) {

        case 0:
          // set content | banner choose
          // window.alert("🦁 Set | banner | = " + index )

          // global
          content_banner.style.display = "grid";

          break;
        case 1:
          // set content | fixed 30 videos
          // window.alert("🦁 Set | Fixed 30 = " + index )

          // global
          content_fixed_30.style.display = "grid";

          break;

        default:

          // set content | default 3 vidoes
          // window.alert("🦁 Set | Default 3 Videos = " + index )
          // window.alert("⚙️ Create Datas = " + index  )

          // global
          content_default_3.style.display = "grid";

          /* -------------------------------------------------------------- */
          /* ➡️🟥 Create Video Link Items from Data
          /* -------------------------------------------------------------- */

          // choose & challenge 1 are fixed so they dont will count in data
          // in data only exist dyn. data, so we should subtract everytime -2
          // if we get index = 2 (dync) than -2 to get array index 0 from data (first element)
          var dynamic_index = index -2;
          get_new_sport_video_link_box( dynamic_index, data_sport_challenges_videos );



          // to-Do
          //  for( data = 3 )
          //     1. get_created_3_sport_videos_link_container( data )
          //     2. add_element_to_add_point_append( createdElement, add_point )



          break;

      }

  }
