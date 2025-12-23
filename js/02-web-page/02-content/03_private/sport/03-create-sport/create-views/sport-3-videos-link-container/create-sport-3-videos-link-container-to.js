// console.log("🟨 create-sport-3-videos-link-container-to.js")


/* ------------------------------------------------------------------------------- */
/* 🟩 Async | Create View | Sport Challenges Nav
/* ------------------------------------------------------------------------------- */

  async function create_sport_3_videos_link_container_to( data, dataVideos, startNr, addFaktorNr, addPoint) {

    console.log("➡️ create_sport_3_videos_link_container_to()")

    /* --------------------------------------------------- */
    // Test Prints
    /* --------------------------------------------------- */

      // console.log("data= " + data);
      // console.log("dataVideos= " + dataVideos);

      console.log("startNr= " + startNr);
      console.log("addFaktorNr= " + addFaktorNr);

      // console.log("addPoint= " + addPoint);

    /* ---------------------------------------------------------------------------- */
    // 🟩 Step 1:
    // Create Div ".sport-3-videos-link-container"
    /* ---------------------------------------------------------------------------- */

      var cssClass_sport3 = data_layout_defaultSport.sport3VideoLinkContainer.cssClassSport3VideosLinkContainer;
      var newDiv_Sport3VideosLinkContainer = await get_new_divClass( cssClass_sport3 );

      /* ---------------------------------------------------------------------------- */
      // 🟥 Step 2:
      // Create all divs ".sport-video-link-box"
      /* ---------------------------------------------------------------------------- */

        console.log("dataVideos(length)= " + dataVideos.length )

        var nrIndex = startNr;

        for( i=0; i < dataVideos.length; i++ ) {

          /* ---------------------------------------------- */
          /* Create Div ".sport-video-link-box"
          /* ---------------------------------------------- */

            // console.log(i + "= " + dataVideos[i].imgName )

            await create_sport_video_link_box_to( data, dataVideos[i], nrIndex, newDiv_Sport3VideosLinkContainer);

            /* ----------------------------------------------- */
            /* Special Case, if addFactor > 1
            /* ----------------------------------------------- */

              /* info:

                  if addFactor > 1, e.g 2, than we
                  calc only one time with -1 to
                  dont calc over.
                  E.g we dont like to have 1, 16, 31
              */

             if( i == 0 && addFaktorNr > 1 ) {

                nrIndex = nrIndex -1;

             }

            // calc new nrIndex
            nrIndex += addFaktorNr;

        }

      /* ---------------------------------------------------------------------------- */
      // 🟥 Step 3:
      // Add Final "newDiv_Sport3VideosLinkContainer" to "addPoint"
      /* ---------------------------------------------------------------------------- */

        addPoint.appendChild( newDiv_Sport3VideosLinkContainer )





    return new Promise(resolve => {
        resolve();
    })

  }
