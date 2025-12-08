// console.log("🟨 start-sport.js")


  /* --------------------------------------------------------------------------------------- */
  // Build Content Sport Categories
  // > Nav
  // > Content
  /* --------------------------------------------------------------------------------------- */

  async function build_content_sport_categories() {


    /* ---------------------------------------------------------------------------------- */
    // ❌❌❌ Trash
    /* ---------------------------------------------------------------------------------- */

    // await async_add_new_sport_3_video_link_container_to( data_newest_sport_videos, 1, 3, add_point_sport_newest_3_videos);

    /* ---------------------------------------------------------------------------------- */
    // Async | Add New | Sport 3 Video Link Container | To
    /* ---------------------------------------------------------------------------------- */

    /* ---------------------------------------------------------------------------------- */
    // Async | Add New | Sport 3 Video Link Container | To
    /* ---------------------------------------------------------------------------------- */

    async function async_add_new_sport_3_video_link_container_to( dataDefaults, dataVideos, startIndex, endIndex, addPoint ) {

       return new Promise(resolve => {
        resolve();
      })

    }

    // universeller -> direkt Wishes Array angeben und default datas
    async function async_add_new_sport_3_video_link_container_to( data, startIndex, endIndex, add_point ) {

      console.log("➡️ async_add_new_sport_3_video_link_container_to()")

      /* -------------------------------------------------- */
      /* Get Datas
      /* -------------------------------------------------- */

        // Data Videos
        // var dataVideos = data_newest_sport_videos.videos;

      /* ---------------------------------------------------------------------------------- */
      // 1. Get Wished Datas
      /* ---------------------------------------------------------------------------------- */

        // var wishedDatas = [];
        // wishedDatas = await async_get_data_from_array_by_index_range( dataVideos, startIndex, endIndex );

        // console.log("🌳 wishedDatas(length) = " + wishedDatas.length )

        // Test Prints
        //  for( let i=0; i < wishedDatas.length; i++ ) {

        //   console.log(i+": " + wishedDatas[i].imgName)
        //   console.log(i+": " + wishedDatas[i].externalLink)

        // }

      /* ---------------------------------------------------------------------------------- */
      // 2. Create .sport-3-vidoes-link-container
      /* ---------------------------------------------------------------------------------- */

        var cssClassNewContainer = "sport-3-videos-link-container";
        var newContainer = document.createElement("div")
        newContainer.setAttribute("class", cssClassNewContainer)


      /* ---------------------------------------------------------------------------------- */
      // 3. Create Datas to .sport-3-vidoes-link-container ( Routine )
      /* ---------------------------------------------------------------------------------- */

        /*

          1. // get komplett sport 3 videos link container mit items + und arbeite mit datas + wishedDatas ( Unterscheidung newest , spot challanges)

        */


        await async_add_sport_video_link_boxes_to( wishedDatas, add_point_sport_newest_3_videos );

        // async_add_sport_video_link_boxes_to( wishedDatas, add_point )

      // console.log("wisssshedData = " + wishedDatas[0].imgName )

      // Print Wished Datas


      /* ---------------------------------------------------------------------------------- */
      // 4. Adding Final to "add_point"
      /* ---------------------------------------------------------------------------------- */

      return new Promise(resolve => {
        resolve();
      })


    }

    async function async_add_sport_video_link_boxes_to( wishedDatas, add_point ) {

      console.log("➡️async_add_sport_video_link_boxes_to()")

      console.log("wishedData(length) = " + wishedDatas.length )

      // Default ( newest / challenges -> ⚠️⚠️ )

      // Video Datas
      var dataVideos = wishedDatas;

      // Max Videos
      var maxVideos = wishedDatas.length;
      // New Elements ( Sport Video Link Boxes )
      var newSportVideoLinkBox = [];

      // Adding Datas to "add_point"
      for( let i=0; i < maxVideos; i++ ) {


        // Create New Sport Video Link Box
        newSportVideoLinkBox.push( document.createElement("div") )
        newSportVideoLinkBox[i].innerText = dataVideos[i].imgName;

        add_point.appendChild( newSportVideoLinkBox[i] )


      }


        return new Promise(resolve => {
        resolve();
      })


    }

    /* ---------------------------------------------------------------------------------- */
    // ❌❌❌ Trash
    /* ---------------------------------------------------------------------------------- */



    /* --------------------------------------------------------------------------------------- */
    // 🟨🟩 Step 1:
    // 1.1 Update View | Selected Sport Category ( chk - label )
    // 1.2 Update View | Header Sport Category
    /* --------------------------------------------------------------------------------------- */

    await update_view_header_selected_sport_category()

    /* --------------------------------------------------------------------------------------- */
    // 🟨🟩 Step 2:
    // 2.1 Update Views | Max Content Items | Select Sport Categories
    /* --------------------------------------------------------------------------------------- */

    // ⚠️ just simulation | delete later
    // await myTimeout()

    await update_views_max_content_items_select_sport_categories();

    /* --------------------------------------------------------------------------------------- */
    // 🟨🟩 Step 3:
    // 3.1 Create Radios | Select Sport Challenges
    // 3.2 Create Labels | Select Sport Challenges
    // 3.2 Create Radio Change Listener with CSS Styling & Handlings
    /* --------------------------------------------------------------------------------------- */

      /* -------------------------------------------------------------- */
      // 3.1 Create Radios ( from Data )
      /* -------------------------------------------------------------- */

      await async_create_radios_sport_challenges()
      await unshow_radios_sport_challenges();

      /* -------------------------------------------------------------- */
      // 3.2 Create Lables ( from Data )
      /* -------------------------------------------------------------- */

      await async_create_labels_sport_challenges()

      /* -------------------------------------------------------------- */
      // 3.3 Create Radio Change Listeners ( from Data )
      /* -------------------------------------------------------------- */

      await async_create_radio_change_listener_sport_challenges()

    /* --------------------------------------------------------------------------------------- */
    // 🟨 Step 4:
    // 4.1
    // 4.2
    /* --------------------------------------------------------------------------------------- */

      /* ------------------------------------------------------------------- */
      // Add Points
      /* ------------------------------------------------------------------- */

      // newest sport videos
      const add_point_newest_sport_videos_3 = document.getElementById("js-add-new-sport-3-videos-container");
      const add_point_newest_sport_history_6 = document.getElementById("content-history-sport-newest-video-container");

      // challenges
      const add_point_sport_container_30 = document.getElementById("sport-challenge-30-videos-link-container");
      // .sport-challenge-15-videos-link-container ( header, main -> video link boxes )
      const add_point_sport_container_3 = document.getElementById("sport-challenge-3-videos-container");

      /* ------------------------------------------------------------------- */
      // Create Content
      /* ------------------------------------------------------------------- */

      /*
            1. Window Load
            2. Radio Change Load by Index

      */

      /*

          indexSportChallenge = 0; => choose
          indexSportChallenge = 1; => 30 Videos
          indexSportChallenge = >=2 => 3 Videos -> in Data , begin by Index 0 ( "-2,fixed" )


          ➡️🟥 async_create_data_sport_3_videos_link_container_to( dataDefaults, dataVideos, add_point )
          🟥 async_create_data_sport_challenge_15_videos_link_container_to( dataDefaults, dataVideos, add_point )

              # newewst + sport challenges
              # 30 videos -> own asyn create
              - dataDefaults
              - dataVideos

      */




     /* --------------------------------------------------------------------------- */
     /* Async | Create Content | Sport Newest | 3 Videos Link Container
     /* --------------------------------------------------------------------------- */

     await async_create_content_sport_newest_3_video_link_container_to( data_newest_sport_videos, 1, 6, add_point_newest_sport_videos_3 )

      async function async_create_content_sport_newest_3_video_link_container_to( data, startIndex, endIndex, addPoint ) {

        console.log("➡️ async_create_content_sport_newest_3_video_link_container_to() ")

        /* ------------------------------------------------ */
        // Step 1:
        // Get Data Defaults
        /* ------------------------------------------------ */

        var dataDefaults = data_newest_sport_videos.defaults;

        var imgVideoPath = dataDefaults.imgVideoPath;
        var linkTitle = dataDefaults.linkTitle;

        var imgIconGreyPath = dataDefaults.imgIconGreyPath;
        var imgIconGreyName = dataDefaults.imgIconGreyName;

        var imgIconBlackPath = dataDefaults.imgIconBlackPath;
        var imgIconBlackName = dataDefaults.imgIconBlackName;

        var imgIconCssClass = dataDefaults.imgIconCssClass;


        /* ------------------------------------------------------------------------------------ */
        // Step 3:
        // Get Wished Datas by "startIndex" & "endIndex"
        /* ------------------------------------------------------------------------------------ */

        var allVideoDatas = data.videos;
        var wishedDatas = [];

        /*
            Example:
            1,3 = 0,2 | 0,1,2
            3,3 = 2,2 | 2
        */

        wishedDatas = await async_get_data_from_array_by_index_range( allVideoDatas, startIndex, endIndex )


        /* ------------------------------------------------------------------------------------ */
        // Step 3:
        // 3.1 Create Arrays of ".sport-video-link-box"
        // 3.2 Create from all wished Datas the view of ".sport-video-link-box"
        /* ------------------------------------------------------------------------------------ */


          /* ----------------------------------------------------------- */
          /* 3.1 Create Arrays of ".sport-video-link-box"
          /* ----------------------------------------------------------- */

            // ".sport-video-link-box"
            var sportVideoLinkBoxes = [];
            var cssClassSportVideoLinkBox = "sport-video-link-box";

            // "nr-sport-video-link"
            var nrs = [];
            var cssClassNr = "nr-sport-video-link";
            var sub_nrs_div = "";


            // "img"
            var imgVideos = [];

            // "link"
            var linkShowMe = [];

            // child of links
            var imgGreyLink = [];
            var imgBlackLink = [];
            var divTextShowMe = [];





        for( let i=0; i < wishedDatas.length; i++ ) {

          console.log(i + ":🍌 " + wishedDatas[i].imgName )

          /* -------------------------------------------------- */
          // Step 1:
          // Create New Div ".sport-video-link-box"
          // Adding Point for ( nr, img, show me)
          /* -------------------------------------------------- */

            sportVideoLinkBoxes.push( get_new_created_divClass( cssClassSportVideoLinkBox ) )

            // Testing
            // sportVideoLinkBoxes[i].innerText = wishedDatas[i].imgName;

            // Adding to Sport 3 Video Link Container
            // newSport3VideosLinkContainer.appendChild(sportVideoLinkBoxes[i]);

            /* -------------------------------------------------------------------------------------- */
            // Step 1:
            // Create Div | Nr
            /* -------------------------------------------------------------------------------------- */

              /* ---------------------------------- */
              /* Creating ...
              /* ---------------------------------- */

              nrs.push( document.createElement("div") )
              nrs[i].setAttribute("class", cssClassNr )

              // Create Sub Nr Div
              sub_nrs_div = document.createElement("div");
              sub_nrs_div.innerText = "😈"

              /* ---------------------------------- */
              /* Adding ...
              /* ---------------------------------- */

              // Add "sub_nrs_div" to "nrs[i]"
              nrs[i].appendChild( sub_nrs_div )

              // Add "nrs[i]" to "sportVideoLinkBoxes[i]"
              sportVideoLinkBoxes[i].appendChild( nrs[i] )

            /* -------------------------------------------------------------------------------------- */
            // Step 2:
            // Create Img
            /* -------------------------------------------------------------------------------------- */

              /* ---------------------------------- */
              /* Creating ...
              /* ---------------------------------- */

              imgVideos.push( document.createElement("img") )
              imgVideos[i].setAttribute("src", imgVideoPath + wishedDatas[i].imgName )
              imgVideos[i].setAttribute("alt", "img" )

              /* ---------------------------------- */
              /* Adding ...
              /* ---------------------------------- */

              // Add "imgVideos[i]" to "sportVideoLinkBoxes[i]"
              sportVideoLinkBoxes[i].appendChild( imgVideos[i] )


            /* -------------------------------------------------------------------------------------- */
            // Step 3:
            // Create Link | Show Me
            /* -------------------------------------------------------------------------------------- */

              /* ---------------------------------- */
              /* Creating ...
              /* ---------------------------------- */

              // creating link
              linkShowMe.push( document.createElement("a") )
              linkShowMe[i].setAttribute("href", wishedDatas[i].externalLink )
              linkShowMe[i].setAttribute("target", "_blank" )


              // create grey img
              imgGreyLink.push( document.createElement("img") );
              imgGreyLink[i].setAttribute("src", imgIconGreyPath + imgIconGreyName )
              imgGreyLink[i].setAttribute("alt", "img" )
              imgGreyLink[i].setAttribute("class", imgIconCssClass )

              // create black img
              imgBlackLink.push( document.createElement("img") );
              imgBlackLink[i].setAttribute("src", imgIconBlackPath + imgIconBlackName )
              imgBlackLink[i].setAttribute("alt", "img" )
              imgBlackLink[i].setAttribute("class", imgIconCssClass )

              // create div show me
              divTextShowMe.push( document.createElement("div") );
              divTextShowMe[i].innerText = linkTitle;


              /* ---------------------------------- */
              /* Adding ...
              /* ---------------------------------- */

              // add img grey
              linkShowMe[i].appendChild( imgGreyLink[i] );
              // add img black
              linkShowMe[i].appendChild( imgBlackLink[i] );
              // add div show me
              linkShowMe[i].appendChild( divTextShowMe[i] );

              // Add "linkShowMe[i]" to "sportVideoLinkBoxes[i]"
              sportVideoLinkBoxes[i].appendChild( linkShowMe[i] )

            /* -------------------------------------------------------------------------------------- */
            // Step 4:
            // Add Finished "sportVideoLinkBoxes[i]" to addPoint (Final)
            /* -------------------------------------------------------------------------------------- */

            addPoint.appendChild( sportVideoLinkBoxes[i] );


        }




        return new Promise(resolve => {
          resolve();
        })

      }

     /* --------------------------------------------------------------------------- */
     /* Async | Create Content | Sport Challenge | 3 Videos Link Container
     /* --------------------------------------------------------------------------- */

     /* --------------------------------------------------------------------------- */
     /* Async | Create Content | Sport Challenge | 15 Videos Link Container
     /* --------------------------------------------------------------------------- */




    /* --------------------------------------------------------------------------------------- */
    // 🟨 Step 5:
    // 5.1 Show Content
    // look in data for checked = true and only use first one
    /* --------------------------------------------------------------------------------------- */

      await async_set_content_sport_challenges_by_data()


    /* --------------------------------------------------------------------------------------- */
    // 🟩 Step 6 ( optimal grid layout col & row gap handling ):
    // 6.1 Handle Delete Col & Row Gaps by given Grid Layout
    // 6.2 Add Window Load Media Query Change Listener ( by reload website )
    // 6.3 Add Media Query Width Change Listener ( by manuel screen sizing )
    /* --------------------------------------------------------------------------------------- */

      /* -------------------------------------------------------------- */
      // 6.1 Delete All Row, Col Gaps
      /* -------------------------------------------------------------- */

      await delete_all_row_col_gaps_if_not_needed( sport_3_videos_containers )

      /* -------------------------------------------------------------- */
      // 6.2 Window Load | Set Col Gap Again ( only by 1 element )
      /* -------------------------------------------------------------- */

      await add_window_load_media_query_to_set_col_gap( sport_3_videos_containers, "450", "1em", "0em" );

      /* -------------------------------------------------------------- */
      // 6.3 Media Query Change Listener ( only by 1 element )
      /* -------------------------------------------------------------- */

      await add_media_query_to_set_col_gap( sport_3_videos_containers, "450px", "1em", "0em" )


  }

/* ------------------------------------------------- */
/* ➡️ Execute (Start)
/* ------------------------------------------------- */

  build_content_sport_categories()
