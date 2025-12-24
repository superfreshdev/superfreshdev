// console.log("🟨 create-header-infoAbout-to.js")


/* ------------------------------------------------------------------------------- */
/* 🟩 Async | Create | Header | ".info-about-sport-challenge-container"
/* ------------------------------------------------------------------------------- */

  async function create_header_infoAboutSportChallenge_to( dataContent, dataIndex, addPoint ) {

      // console.log("➡️ create_header_infoAboutSportChallenge_to()")

      /* -------------------------------------------------- */
      // Test Prints
      /* -------------------------------------------------- */

        // console.log("[h]dataContent = " + dataContent )
        // console.log("[h]dataIndex = " + dataIndex )
        // console.log("[h]addPoint = " + addPoint )


      /* -------------------------------------------------- */
      // Step 1:
      // Create "header"
      /* -------------------------------------------------- */

        var headerInfoAbout = document.createElement("header");

        /* -------------------------------------------------- */
        // Step 1.1:
        // Create "img" (emojie dart) | global
        /* -------------------------------------------------- */

          // get img dart path (global)
          var imgDart_defaultPath = data_layout_sportChallenges.defaults.imgEmojiesPath;
          var imgDartName = data_layout_sportChallenges.defaults.imgNameDart;
          // img dart full path
          var imgDart_fullPath = imgDart_defaultPath + imgDartName;
          // css class img dart
          var cssClass_imgDart = data_layout_sportChallenges.defaults.cssClassImgDard;

          // create new img dart
          var newImgDart = await get_new_imgClass( imgDart_fullPath, cssClass_imgDart );

          // add "newimgDart" to "headerInfoAbout"
          headerInfoAbout.appendChild( newImgDart )

        /* -------------------------------------------------- */
        // Step 1.2:
        // Create "div" with "text"
        /* -------------------------------------------------- */

          // get "header title"
          var textHeaderTitle = dataContent.challenges[dataIndex].infoAbout.headerTitle;

          var newDivTitle = document.createElement("div")
          newDivTitle.innerText = textHeaderTitle;

          // add "newDivTitle" to "headerInfoAbout"
          headerInfoAbout.appendChild( newDivTitle )


      /* -------------------------------------------------- */
      // Step 2:
      // Add "headerInfoAbout" to "addPoint"
      /* -------------------------------------------------- */

        addPoint.appendChild( headerInfoAbout );


      return new Promise(resolve => {
          resolve();
      })

  }
