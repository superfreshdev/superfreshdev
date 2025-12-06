// console.log("🟨 set-content-sport.js")


  /* --------------------------------------------------------------------------------------- */
  // ➡️🟥 Set | Content Sport Challenges by Index
  /* --------------------------------------------------------------------------------------- */

  function set_content_sport_challenges_by_index( index ) {

      // console.log("➡️ set_content_sport_challenges_by_index ")

     /* ---------------------------------------------------------------- */
     // Step 1:
     /* Get Video Link Datas by Index
     /* ---------------------------------------------------------------- */

     /* ---------------------------------------------------------------- */
     // Step 2:
     //
     // 2.1 Set Content Container by Index
     // ( 0 = Choose | 1 = 30 Videos | >=2 = 3 Videos )
     //
     // 2.2 Create Video Link Datas by Index
     /* ---------------------------------------------------------------- */

     switch( index ) {

        case 0:

          // window.alert("🦁 Set | Choose Challenge = " + index )

          // global
          // set content | choose challenges
          // unshown all contents (30 videos & 3 videos )
          content_fixed_30.style.display = "none";
          content_default_3.style.display = "none";

          break;

        case 1:

          // window.alert("🦁 Set | Fixed 30 = " + index )

          // global
          // set content | fixed 30 videos
          content_fixed_30.style.display = "grid";

          // start create videos by data ( 30 videos )

          break;

        default:

          // global
          // set content | default 3 vidoes
          // window.alert("🦁 Set | Default 3 Videos = " + index )
          // window.alert("⚙️ Create Datas = " + index  )
          content_default_3.style.display = "grid";

          // start create videos by data ( 3 videos )
          // reminder: in data for 3 videos we start by index 1
          // but in our selection nav we have, choose(1) and 30videos(2)
          // before. These 2 Indexes we should reduce to our given
          // index to set our correct data, that means e.g we
          // get index = 3, so we substract -2 and we get index 1 from
          // data. Another e.g we get index = 4 - 2 , we get index 2 from
          // data and so on.

          var data_index_3_sport_videos = index - 2;

          get_new_sport_video_link_box( data_index_3_sport_videos, data_sport_challenges_videos );

          break;

    }

  }
