// console.log("🟨 update-sport-video-link-boxes.js")


/* ------------------------------------------------------------------------------- */
/* 🟩 Async | Update View | Sport Video Link Boxes
/* ------------------------------------------------------------------------------- */

  async function update_view_sport_video_link_boxes( data, dataVideos, updateElements ) {

    console.log("➡️ update_view_sport_video_link_boxes()")

    // Test Prints
    // console.log("data = " + data );
    // console.log("dataVideos = " +dataVideos );
    // console.log("updateElements = " + updateElements);

    // print_element_list( dataVideos )
    // print_element_list( updateElements )


    /* ---------------------------------------------------------------- */
    // Update Elements
    /* ---------------------------------------------------------------- */

      // img elements
      var updateImg = "";
      var imgDefaultPath = data.defaults.imgVideoPath;
      var imgName = "";
      var imgFullPath = "";

      // link elements
      var updateLink = "";
      var updateLinkPath = "";


    /* ------------------------------------------------------------------------ */
    // Update all ".sport-video-link-box"
    /* ------------------------------------------------------------------------ */

      for( let i=0; i < updateElements.length; i++ ) {


        /* ----------------------------------------------------------------- */
        /* Update | Img
        /* ----------------------------------------------------------------- */

          // get img element
          updateImg = updateElements[i].querySelector("img");

          // get full img path by data
          imgFullPath = imgDefaultPath + dataVideos[i].imgName;

          // update img src
          updateImg.setAttribute("src", imgFullPath)


        /* ----------------------------------------------------------------- */
        /* Update | Link
        /* ----------------------------------------------------------------- */

          // get img element
          updateLink = updateElements[i].querySelector("a");

          // get full href path by data
          updateLinkPath = dataVideos[i].externalLink;

          // update link path
          updateLink.setAttribute("href", updateLinkPath )

      }


    return new Promise(resolve => {
      resolve();
    })

  }
