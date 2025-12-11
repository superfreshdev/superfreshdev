// console.log("🟨 start-sport.js")



  /* ------------------------------------------------------------------------------------------------------------- */
  // ➡️🟥 Bauplan #1
  // Step 1:
  // 1.1 Update Views    | Header + Nav of Sport Categories
  // 1.2 Create Elements | Nav of Sport Challenges ( radios, labels, radio change listener, ... )
  /* ------------------------------------------------------------------------------------------------------------- */

    async_update_view_header_nav_sport();



























  /* --------------------------------------------------------------------------------------- */
  // 🟥 Bauplan #2
  // Step 2:
  // "at the beginning"
  //
  // 1.3 Create Radios                | Sport Challenges
  // 1.4 Creating Labels              | Sport Challenges
  // 1.5 Create Radio Change Listenrs | Sport Challenges
  //      - add css style & handlings
  //      - add set content "sport challenges" by data index
  /* --------------------------------------------------------------------------------------- */

    // async_create_views_nav_sport_challenges();



    /* ---------------------------------------------------------------------- */
    /* 🟥 ...
    /* ---------------------------------------------------------------------- */

    /* ---------------------------------------------------------------------- */
    /* 🟥 ...
    /* ---------------------------------------------------------------------- */



  /* --------------------------------------------------------------------------------------- */
  // 🟥 Bauplan #2
  // Step 2:
  // Window Load Event ( Reload Webpage )
  //
  // Create Content Sport Category ( newest videos or challenges )
  // only by moving to this content ( check indizies )
  /* --------------------------------------------------------------------------------------- */

    /* info:

      1. if "my_private" & "sport" = checked, then

        1.1 if "newest_videos" is checked, then

          - # create content "newest_videos" from data

        1.2 if "challenges" is checked, then

          - look which content index should be created
            ( choose, 30-videos, ch1, ch2, ... )
          - # create content "sport challenge" from data

    */































  /* --------------------------------------------------------------------------------------- */
  /* ❌❌❌ Trash
  /* --------------------------------------------------------------------------------------- */

  /* --------------------------------------------------------------------------------------- */
  // Step 1:
  // Async Function | Build Content | Sport Categories
  // > Nav ( Sport Challenges )
  // > Content ( Newest Videos, Challenges )
  /* --------------------------------------------------------------------------------------- */



    /* ---------------------------------------------------------------------------------- */
    // Step 1:
    // at the beginning ...
    //
    // 1.1 Update View                  | Header Sport Categories
    // 1.2 Update View                  | Sport Selected Category
    // 1.3 Update View                  | Sport Select Categories ( newest, challenge )
    // 1.4 Create Radios                | Sport Categories
    // 1.5 Create Labels                | Sport Categories
    // 1.6 Create Radio Change Listener | Sport Categories
    /* ---------------------------------------------------------------------------------- */

    // ⚠️ (besser vllt.) = build_nav_sport_categories()
    // async function build_content_nav_sport_categories() {

    //   console.log("➡️ build_content_nav_sport_categories() ")

    //   /* -------------------------------------------------------------------- */
    //   // 🟥 Step 1:
    //   // 1.1 Update View | Header Sport Category
    //   // 1.2 Update View | Selected Sport Category | chk - label
    //   // 1.3 Update View | Select Sport Categories | ( newest videos, challenges )
    //   /* -------------------------------------------------------------------- */

    //     await update_view_header_selected_sport_category()

    //     await update_views_max_content_items_select_sport_categories();

    //   /* -------------------------------------------------------------------- */
    //   // ➡️🟥 Step 2:
    //   // 1.1 Create Radios               | Sport Challenges
    //   // 1.2 Create Labels               | Sport Challenges
    //   // 1.3 Create Radio Change Listers | Sport Challenges
    //   /* -------------------------------------------------------------------- */

    //     /* -------------------------------------------------------------- */
    //     // 3.1 Create Radios ( from Data )
    //     /* -------------------------------------------------------------- */

    //     await async_create_radios_sport_challenges()
    //     await unshow_radios_sport_challenges();

    //     /* -------------------------------------------------------------- */
    //     // 3.2 Create Lables ( from Data )
    //     /* -------------------------------------------------------------- */

    //     await async_create_labels_sport_challenges()

    //     /* -------------------------------------------------------------- */
    //     // ➡️🟥 3.3 Create Radio Change Listeners ( from Data )
    //     /* -------------------------------------------------------------- */

    //     await async_create_radio_change_listener_sport_challenges()


    //   /* -------------------------------------------------------------------- */
    //   // Step 3:
    //   // 3.1 Handle Delete Col & Row Gaps by given Grid Layout
    //   // 3.2 Add Window Load Media Query Change Listener ( by reload website )
    //   // 3.3 Add Media Query Width Change Listener ( by manuel screen sizing )
    //   /* -------------------------------------------------------------------- */

    //   /* info:
    //      Optimal Grid Layout col & row gap handling to
    //      show only col & row gaps if that is needed.
    //      Because default if we set col & row gap
    //      that space will be shown if we only
    //      have one or two grid items.
    //      By one grid item we dont like to see
    //      col gap space.
    //   */

    //     /* -------------------------------------------------------------- */
    //     // 3.1 Delete All Row, Col Gaps
    //     /* -------------------------------------------------------------- */

    //     await delete_all_row_col_gaps_if_not_needed( sport_3_videos_containers )

    //     /* -------------------------------------------------------------- */
    //     // 3.2 Window Load | Set Col Gap Again ( only by 1 element )
    //     /* -------------------------------------------------------------- */

    //     await add_window_load_media_query_to_set_col_gap( sport_3_videos_containers, "450", "1em", "0em" );

    //     /* -------------------------------------------------------------- */
    //     // 3.3 Media Query Change Listener ( only by 1 element )
    //     /* -------------------------------------------------------------- */

    //     await add_media_query_to_set_col_gap( sport_3_videos_containers, "450px", "1em", "0em" )


    //   return new Promise(resolve => {
    //     resolve();
    //   })


    // }



    /* ------------------------------------------------- */
    /* ❌❌❌ Trash
    /* ------------------------------------------------- */

    /* ------------------------------------------------- */
    /* ➡️ Execute (Start)
    /* ------------------------------------------------- */

    // build_content_nav_sport_categories()



    // async function build_content_sport_categories() {



    //   // universeller -> direkt Wishes Array angeben und default datas
    //   // async function async_add_new_sport_3_video_link_container_to( data, startIndex, endIndex, add_point ) {

    //   //   console.log("➡️ async_add_new_sport_3_video_link_container_to()")

    //   //   /* -------------------------------------------------- */
    //   //   /* Get Datas
    //   //   /* -------------------------------------------------- */

    //   //     // Data Videos
    //   //     // var dataVideos = data_newest_sport_videos.videos;

    //   //   /* ---------------------------------------------------------------------------------- */
    //   //   // 1. Get Wished Datas
    //   //   /* ---------------------------------------------------------------------------------- */

    //   //     // var wishedDatas = [];
    //   //     // wishedDatas = await async_get_data_from_array_by_index_range( dataVideos, startIndex, endIndex );

    //   //     // console.log("🌳 wishedDatas(length) = " + wishedDatas.length )

    //   //     // Test Prints
    //   //     //  for( let i=0; i < wishedDatas.length; i++ ) {

    //   //     //   console.log(i+": " + wishedDatas[i].imgName)
    //   //     //   console.log(i+": " + wishedDatas[i].externalLink)

    //   //     // }

    //   //   /* ---------------------------------------------------------------------------------- */
    //   //   // 2. Create .sport-3-vidoes-link-container
    //   //   /* ---------------------------------------------------------------------------------- */

    //   //     var cssClassNewContainer = "sport-3-videos-link-container";
    //   //     var newContainer = document.createElement("div")
    //   //     newContainer.setAttribute("class", cssClassNewContainer)


    //   //   /* ---------------------------------------------------------------------------------- */
    //   //   // 3. Create Datas to .sport-3-vidoes-link-container ( Routine )
    //   //   /* ---------------------------------------------------------------------------------- */

    //   //     /*

    //   //       1. // get komplett sport 3 videos link container mit items + und arbeite mit datas + wishedDatas ( Unterscheidung newest , spot challanges)

    //   //     */


    //   //     await async_add_sport_video_link_boxes_to( wishedDatas, add_point_sport_newest_3_videos );

    //   //     // async_add_sport_video_link_boxes_to( wishedDatas, add_point )

    //   //   // console.log("wisssshedData = " + wishedDatas[0].imgName )

    //   //   // Print Wished Datas


    //   //   /* ---------------------------------------------------------------------------------- */
    //   //   // 4. Adding Final to "add_point"
    //   //   /* ---------------------------------------------------------------------------------- */

    //   //   return new Promise(resolve => {
    //   //     resolve();
    //   //   })


    //   // }

    //   // async function async_add_sport_video_link_boxes_to( wishedDatas, add_point ) {

    //   //   console.log("➡️async_add_sport_video_link_boxes_to()")

    //   //   console.log("wishedData(length) = " + wishedDatas.length )

    //   //   // Default ( newest / challenges -> ⚠️⚠️ )

    //   //   // Video Datas
    //   //   var dataVideos = wishedDatas;

    //   //   // Max Videos
    //   //   var maxVideos = wishedDatas.length;
    //   //   // New Elements ( Sport Video Link Boxes )
    //   //   var newSportVideoLinkBox = [];

    //   //   // Adding Datas to "add_point"
    //   //   for( let i=0; i < maxVideos; i++ ) {


    //   //     // Create New Sport Video Link Box
    //   //     newSportVideoLinkBox.push( document.createElement("div") )
    //   //     newSportVideoLinkBox[i].innerText = dataVideos[i].imgName;

    //   //     add_point.appendChild( newSportVideoLinkBox[i] )


    //   //   }


    //   //     return new Promise(resolve => {
    //   //     resolve();
    //   //   })


    //   // }



    //     /* ------------------------------------------------------------------- */
    //     // Add Points
    //     /* ------------------------------------------------------------------- */

    //     // newest sport videos
    //     // const add_point_sport_newest_video_container = document.getElementById("sport-newest-video-container");
    //     // const add_point_newest_sport_history_6 = document.getElementById("content-history-sport-newest-video-container");

    //     // challenges
    //     // const add_point_sport_container_30 = document.getElementById("sport-challenge-30-videos-link-container");
    //     // const add_point_sport_container_3 = document.getElementById("sport-challenge-3-videos-container");




    //   /* ---------------------------------------------------------------------- */
    //   /* Window Load Event |
    //   /* ---------------------------------------------------------------------- */

    //   /* Info:
    //     Check if by window reload event the category "my private" and category "sport"
    //     is checked to create the correct content
    //   */

    //   // window.addEventListener("load", async ()=> {

    //   //   var chk_my_private = document.getElementById("radio-sport-category-my-private");
    //   //   var chk_category_sport = document.getElementById("radio-sport-category-my-private");

    //   //   if( chk_category_sport.checked == true && chk_category_sport.checked == true ) {

    //   //     // look for what is default set, otherwise default index 0
    //   //     // window.alert("🐉🐉🐉 Create Default | Newest Videos Content ")

    //   //     // global datas
    //   //     var data_defaults = data_newest_sport_videos.defaults;
    //   //     var data_videos = data_newest_sport_videos.videos;

    //   //     /* ----------------------------------------------------------------------- */
    //   //     /* Create & Add New Data | Sport 3 Video Link Container
    //   //     /* ----------------------------------------------------------------------- */

    //   //     var new_sport_3_video_link_container = "";
    //   //     new_sport_3_video_link_container = await async_get_created_content_sport_3_videos_link_container( data_defaults , data_videos, 1, 3 );
    //   //     new_sport_3_video_link_container.style.order = "2";
    //   //     add_point_sport_newest_video_container.prepend( new_sport_3_video_link_container )


    //   //     /* ----------------------------------------------------------------------- */
    //   //     /* Create & Add New Data | Sport 3 Video Link Container
    //   //     /* ----------------------------------------------------------------------- */

    //   //     var new_history_1_sport_3_videos_link_container = "";
    //   //     new_history_1_sport_3_videos_link_container = await async_get_created_content_sport_3_videos_link_container( data_defaults , data_videos, 4, 6 );
    //   //     add_point_newest_sport_history_6.appendChild( new_history_1_sport_3_videos_link_container );

    //   //     var new_history_3_sport_3_videos_link_container = "";
    //   //     new_history_3_sport_3_videos_link_container = await async_get_created_content_sport_3_videos_link_container( data_defaults , data_videos, 7, 9 );
    //   //     add_point_newest_sport_history_6.appendChild( new_history_3_sport_3_videos_link_container );


    //   //   }



    //   // })


    //   /* --------------------------------------------------------------------------- */
    //   /* 🟩 Async | Get | Video Datas By Range Index
    //   /* --------------------------------------------------------------------------- */
    //   // 🟣 auslagern -> async-get-data-sport.js

    //   // async function async_get_dataArray_by_rangeIndex( arrayDatas, startIndex, endIndex ) {

    //   //     console.log("➡️ async_get_videoDatas_by_rangeIndex() ")

    //   //     var startArrayIndex = "";
    //   //     var endArrayIndex = "";

    //   //     var wishedVideoDatas = [];

    //   //     /* ------------------------------------------------- */
    //   //     // Step 1:
    //   //     /* Check: Not allowed 0 and minus indizies
    //   //     /* ------------------------------------------------- */

    //   //     if( startIndex > 0 && endIndex > 0 ) {

    //   //       console.log("💚 Correct using Indexes");

    //   //       /* ------------------------------------------------- */
    //   //       // Step 2:
    //   //       /* Change Indizies to Array Indizies
    //   //       /* ------------------------------------------------- */

    //   //       /*
    //   //           e.g 1,3 = 0,2 | 0,1,2
    //   //           e.g 1,1 = 0,0 | 0
    //   //           e.g 3,3 = 2,2 | 2
    //   //       */

    //   //       startArrayIndex = startIndex -1;
    //   //       endArrayIndex = endIndex -1;


    //   //       /* ------------------------------------------------- */
    //   //       // Step 3:
    //   //       /* Get Wished Video Data by Indizies
    //   //       /* ------------------------------------------------- */

    //   //       for( let i=startArrayIndex; i <= endArrayIndex; i++ ) {

    //   //         wishedVideoDatas.push( arrayDatas[i] )

    //   //       }

    //   //       /* ------------------------------------------------- */
    //   //       // Step X:
    //   //       /* Print Testings
    //   //       /* ------------------------------------------------- */

    //   //       // console.log("🌳🌳🌳 Wished Video Datas: ")

    //   //       // for( let i=0; i < wishedVideoDatas.length; i++ ) {

    //   //       //   console.log(i + ": " + wishedVideoDatas[i].imgName )

    //   //       // }

    //   //     } else {

    //   //       console.log("🟥 giving minus indizies are not allowed ")
    //   //     }


    //   //     return new Promise(resolve => {
    //   //       resolve( wishedVideoDatas );
    //   //     })

    //   // }

    //   /* --------------------------------------------------------------------------- */
    //   /* 🟩 Async | Get Created Content | Sport 3 Videos Link Container
    //   /* --------------------------------------------------------------------------- */
    //   // 🟣 auslagern -> async-get-create-content-sport.js

    //   // async function async_get_created_content_sport_3_videos_link_container( dataDefaults, videoDatas, startIndex, endIndex ) {

    //   //     console.log("➡️ async_get_created_content_sport_3_videos_link_container()")

    //   //     /* --------------------------------------------------------- */
    //   //     /* Step 1:
    //   //     /* Get Wished Video Datas by Index Range
    //   //     /* --------------------------------------------------------- */

    //   //       var wished_video_datas = [];
    //   //       wished_video_datas = await async_get_dataArray_by_rangeIndex( videoDatas , startIndex, endIndex );

    //   //     /* --------------------------------------------------------- */
    //   //     /* Step 2:
    //   //     /* Create Div | ".sport-3-videos-link-container"
    //   //     /* --------------------------------------------------------- */

    //   //       var new_sport_3_vidoes_link_container = document.createElement("div");
    //   //       var css_class_3_vidoes_link_container = "sport-3-videos-link-container";

    //   //       new_sport_3_vidoes_link_container.setAttribute("class", css_class_3_vidoes_link_container )

    //   //     /* --------------------------------------------------------- */
    //   //     /* Step 3:
    //   //     /* Create Div | ".sport-video-link-box"
    //   //     /* --------------------------------------------------------- */

    //   //       var sport_video_link_boxes = [];

    //   //       for( let i=0; i < wished_video_datas.length; i++ ) {

    //   //         // console.log(i + ": " + wishedVideoDatas[i].imgName )

    //   //         sport_video_link_boxes.push( await async_get_created_content_sport_video_link_box_by_startIndex( dataDefaults, wished_video_datas[i], (startIndex+i) ) )
    //   //         // console.log("🐒 = " + sport_video_link_boxes[i].innerText )

    //   //         // Add "sport_video_link_boxes[i]" to "new_sport_3_vidoes_link_container"
    //   //         new_sport_3_vidoes_link_container.appendChild( sport_video_link_boxes[i] )

    //   //       }

    //   //     /* --------------------------------------------------------- */
    //   //     /* Step 4:
    //   //     /* Final | Return "new_sport_3_vidoes_link_container"
    //   //     /* --------------------------------------------------------- */

    //   //       return new Promise(resolve => {
    //   //         resolve( new_sport_3_vidoes_link_container );
    //   //       })

    //   // }

    //   /* --------------------------------------------------------------------------- */
    //   /* ➡️🟥 Async | Get Created Content | Sport 3 Videos Link Container
    //   /* --------------------------------------------------------------------------- */
    //   // 🟣 auslagern -> async-get-create-content-sport.js

    //   // async function async_get_created_content_sport_video_link_box( dataDefaults, wishedVideo ) {

    //   //   console.log("➡️ async_get_created_content_sport_video_link_box()")


    //   //     /* --------------------------------------------------------- */
    //   //     /* Step 1:
    //   //     /* Create ".sport-video-link-box"
    //   //     /* --------------------------------------------------------- */

    //   //     var new_sport_video_link_box = document.createElement("div")
    //   //     var css_class_sport_video_link_box = "sport-video-link-box";
    //   //     new_sport_video_link_box.setAttribute("class", css_class_sport_video_link_box);


    //   //       /* -------------------------------------------------- */
    //   //       /* Step 1:
    //   //       /* Create & Adding | Nr
    //   //       /* -------------------------------------------------- */

    //   //         var nr_element = "";
    //   //         var css_class_nr = "nr-sport-video-link";
    //   //         var sub_nr_element = "";

    //   //         /* ---------------------------------- */
    //   //         /* Creatings ...
    //   //         /* ---------------------------------- */

    //   //         // Create Div Nr
    //   //         nr_element = document.createElement("div");
    //   //         nr_element.setAttribute("class", css_class_nr )

    //   //         // Create Sub Div Nr
    //   //         sub_nr_element = document.createElement("div");
    //   //         sub_nr_element.innerText = "😈"

    //   //         /* ---------------------------------- */
    //   //         /* Adding ...
    //   //         /* ---------------------------------- */

    //   //         // Add "sub_nr_element" to "nr_element"
    //   //         nr_element.appendChild( sub_nr_element)

    //   //         // Add "nr_element" to "new_sport_video_link_box"
    //   //         new_sport_video_link_box.appendChild( nr_element )


    //   //       /* -------------------------------------------------- */
    //   //       /* Step 2:
    //   //       /* Create & Adding | Img
    //   //       /* -------------------------------------------------- */

    //   //         var img_video = "";
    //   //         var imgVideoPath = dataDefaults.imgVideoPath;

    //   //         // Create img
    //   //         img_video = document.createElement("img");
    //   //         img_video.setAttribute("src", imgVideoPath + wishedVideo.imgName )
    //   //         img_video.setAttribute("alt", "img" )

    //   //         // Add "img_video" to "new_sport_video_link_box"
    //   //         new_sport_video_link_box.appendChild( img_video )


    //   //       /* -------------------------------------------------- */
    //   //       /* Step 3:
    //   //       /* Create & Adding | Link Show Me
    //   //       /* -------------------------------------------------- */

    //   //         var link_element = "";

    //   //         /* ------------------------------------------------- */
    //   //         /* Get Default Link Datas
    //   //         /* ------------------------------------------------- */

    //   //         var linkTitle = dataDefaults.linkTitle;

    //   //         var imgIconGreyPath = dataDefaults.imgIconGreyPath;
    //   //         var imgIconGreyName = dataDefaults.imgIconGreyName;

    //   //         var imgIconBlackPath = dataDefaults.imgIconBlackPath;
    //   //         var imgIconBlackName = dataDefaults.imgIconBlackName;

    //   //         var imgIconCssClass = dataDefaults.imgIconCssClass;

    //   //         /* ---------------------------------- */
    //   //         /* Creatings ...
    //   //         /* ---------------------------------- */

    //   //         // Create Link Element
    //   //         link_element = document.createElement("a");
    //   //         link_element.setAttribute("href", wishedVideo.externalLink )
    //   //         link_element.setAttribute("target", "_blank" )

    //   //         // Create Sub Link Img Grey
    //   //         imgGreyLink = document.createElement("img");
    //   //         imgGreyLink.setAttribute("src", imgIconGreyPath + imgIconGreyName )
    //   //         imgGreyLink.setAttribute("alt", "img" )
    //   //         imgGreyLink.setAttribute("class", imgIconCssClass )

    //   //         // Create Sub Link Img Black
    //   //         imgBlackLink = document.createElement("img");
    //   //         imgBlackLink.setAttribute("src", imgIconBlackPath + imgIconBlackName )
    //   //         imgBlackLink.setAttribute("alt", "img" )
    //   //         imgBlackLink.setAttribute("class", imgIconCssClass )

    //   //         // Create Sub Link Div "Show Me"
    //   //         divTextShowMe = document.createElement("div");
    //   //         divTextShowMe.innerText = linkTitle;

    //   //         /* ---------------------------------- */
    //   //         /* Adding ...
    //   //         /* ---------------------------------- */

    //   //         // Add img grey
    //   //         link_element.appendChild( imgGreyLink );

    //   //         // Add img black
    //   //         link_element.appendChild( imgBlackLink );

    //   //         // Add div show me
    //   //         link_element.appendChild( divTextShowMe );

    //   //         // Add "link_element" to "new_sport_video_link_box"
    //   //         new_sport_video_link_box.appendChild( link_element)


    //   //   return new Promise(resolve => {
    //   //       resolve( new_sport_video_link_box );
    //   //   })

    //   // }











    // }

  /* ------------------------------------------------- */
  /* ➡️ Execute (Start)
  /* ------------------------------------------------- */

    // build_content_sport_categories()


  /* --------------------------------------------------------------------------------------- */
  // Step 2:
  // Window Async Load Event Listener | Sport Categories
  // > check by webpage reload if sport content should be default showing -
  //   if yes, than looking for index which content should be created from datas
  /* --------------------------------------------------------------------------------------- */


  /* --------------------------------------------------------------------------------------- */
  // Step 3:
  // Radio Change Event Listener | Sport Categories
  // > by changing radio sport categories
  //   close/unshown nav sport categories ( checkbox = false )
  /* --------------------------------------------------------------------------------------- */

  // global
  // for( let i=0; i < radios_sport_categories.length; i++ ) {


  //   radios_sport_categories[i].addEventListener("change", ()=> {

  //     console.log("🐉🐉 Radio Checked Index = " + i )

  //     /* --------------------------------------------------------- */
  //     // Step 1:
  //     // > Default: Close Nav Sport Categories ( checkbox = false )
  //     /* --------------------------------------------------------- */

  //     // global
  //     unset_checkbox( chk_selected_sport_category )

  //     /* ------------------------------------------------------- */
  //     // Step 2:
  //     // Update View | Header
  //     /* ------------------------------------------------------- */

  //     update_view_header_sport_category( i, data_header_nav_sport_categories )


  //     /* --------------------------------------------------------- */
  //     // Step 2:
  //     // > Create Content by Radio Index
  //     /* --------------------------------------------------------- */

  //     switch( i ){

  //       case 0:
  //         // Set Content | Newest Videos
  //         window.alert(i + ": Newest Videos Content" )


  //         break;

  //       case 1:
  //         // Set Content | Challenges
  //         window.alert(i + ": Challenges Content" )

  //         break;

  //     }


  //   })

  // }
