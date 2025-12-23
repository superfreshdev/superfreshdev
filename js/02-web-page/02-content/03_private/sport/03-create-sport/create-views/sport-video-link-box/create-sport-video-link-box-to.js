// console.log("🟨 create-sport-video-link-box-to.js")


/* ------------------------------------------------------------------------------- */
/* 🟩 Async | Create View | Sport Challenges Nav
/* ------------------------------------------------------------------------------- */

  async function create_sport_video_link_box_to( data, dataVideo, nrIndex, addPoint) {

    console.log("➡️ create_sport_video_link_box_to()")

    /* --------------------------------------------------- */
    // Test Prints
    /* --------------------------------------------------- */

      // console.log("data= " + data);
      // console.log("dataVideos= " + dataVideos);
      // console.log("nrIndex= " + nrIndex);
      // console.log("addPoint= " + addPoint);

      // console.log(i + "= " + dataVideo.imgName )


    /* ---------------------------------------------------------------------------- */
    // 🟩 Step 1:
    // Create Div ".sport-video-link-box"
    /* ---------------------------------------------------------------------------- */

      var cssClass_sportVideoLinkBox = data_layout_defaultSport.sport3VideoLinkContainer.cssClassSportVideoLinkBox;
      var div_sportVideoLinkBox = await get_new_divClass( cssClass_sportVideoLinkBox );

      /* ---------------------------------------------------------------------------- */
      // 🟩 Step 1.1:
      // Create Div "nr"
      /* ---------------------------------------------------------------------------- */

        // create div
        var cssClass_nrSportVideoLink = data_layout_defaultSport.sport3VideoLinkContainer.cssClassNrSportVideoLink;
        var div_nrSportVideoLink = await get_new_divClass( cssClass_nrSportVideoLink );

        // create sub div "text"
        var subDiv_nrSportVideoLink = document.createElement("div");

        // set "text" nr
        subDiv_nrSportVideoLink.innerText = nrIndex;

        // add "subDiv_nrSportVideoLink" to "div_nrSportVideoLink"
        div_nrSportVideoLink.appendChild( subDiv_nrSportVideoLink );

        // add "div_nrSportVideoLink" to "div_sportVideoLinkBox"
        div_sportVideoLinkBox.appendChild( div_nrSportVideoLink );


      /* ---------------------------------------------------------------------------- */
      // 🟩 Step 1.2:
      // Create Img Video
      /* ---------------------------------------------------------------------------- */

        // get data (global)
        var imgDefaultPath = data_newestSportVideos.defaults.imgVideoPath;
        var imgName = dataVideo.imgName;
        var imgFullPath = imgDefaultPath + imgName;

        // create img
        var imgVideo = await get_new_img( imgFullPath );

        // add "imgVideo" to "div_sportVideoLinkBox"
        div_sportVideoLinkBox.appendChild( imgVideo );


      /* ---------------------------------------------------------------------------- */
      // 🟩 Step 1.3:
      // Create Link a (Show More) only if "externalLink" not empty
      /* ---------------------------------------------------------------------------- */

        /* -------------------------------------------------- */
        /* Get Data (global)
        /* -------------------------------------------------- */

          // link path
          var linkPath = dataVideo.externalLink;

          // css class img
          var cssClassImg = data_layout_defaultSport.defaults.cssClassImgExternalLink;

          // link text default "show me"
          var linkText = data_layout_defaultSport.defaults.textExternalLink;


        /* ----------------------------------------------------------------------------------- */
        /* Create Link only if not exist
        /* ----------------------------------------------------------------------------------- */

          if( linkPath != "" ) {

            console.log("🏗️ Create Link | Show Me");

            /* ------------------------------------------------------------------ */
            // Step 1:
            // Create Link
            /* ------------------------------------------------------------------ */

              // link
              var linkShowMe = "";

              linkShowMe = await get_new_link_with_path( linkPath );

              /* ------------------------------------------------------------------ */
              // 🟩 Step 1.1:
              // Create Img Grey
              /* ------------------------------------------------------------------ */

                // img grey full path
                var imgDefaultPathGrey = data_layout_defaultSport.defaults.imgDefaultGreyPath;
                var imgGreyName = data_layout_defaultSport.defaults.imgNameGreyExternalLink;
                var imgFullPathGreyExternal = imgDefaultPathGrey + imgGreyName;

                // img grey
                var imgGreyExternal = "";


                imgGreyExternal = await get_new_imgClass( imgFullPathGreyExternal, cssClassImg);

                // add "imgGreyExternal" to "linkShowMe"
                linkShowMe.appendChild( imgGreyExternal );

              /* ------------------------------------------------------------------ */
              // 🟩 Step 1.2:
              // Create Img Black
              /* ------------------------------------------------------------------ */

                // img black full path
                var imgDefaultPathBlack = data_layout_defaultSport.defaults.imgDefaultBlackPath;
                var imgBlackName = data_layout_defaultSport.defaults.imgNameBlackExternalLink;
                var imgFullPathBlackExternal = imgDefaultPathBlack + imgBlackName;

                // img black
                var imgBlackExternal = "";

                imgBlackExternal = await get_new_imgClass( imgFullPathBlackExternal, cssClassImg );

                // add "imgBlackExternal" to "linkShowMe"
                linkShowMe.appendChild( imgBlackExternal );


              /* ------------------------------------------------------------------ */
              // 🟩 Step 1.3:
              // Create Div Text
              /* ------------------------------------------------------------------ */

                var divText = "";

                // create div & set text
                divText = await get_new_divText( linkText );

                // add "divText" to "linkShowMe"
                linkShowMe.appendChild( divText );


              /* ------------------------------------------------------------------ */
              // 🟩 Step 1.4:
              // Add "linkShowMe" to "div_sportVideoLinkBox"
              /* ------------------------------------------------------------------ */

                div_sportVideoLinkBox.appendChild( linkShowMe );

          }



    /* ---------------------------------------------------------------------------- */
    // 🟩 Step 2:
    // Add Final "div_sportVideoLinkBox" to "addPoint"
    /* ---------------------------------------------------------------------------- */

      addPoint.appendChild( div_sportVideoLinkBox )



    return new Promise(resolve => {
        resolve();
    })

  }
