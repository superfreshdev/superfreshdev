// console.log("🟨 get-maxItems-from-sportCateogry.js")


/* ------------------------------------------------------------------------------------------ */
/* Get | Max Items | from | Newest Sport Videos
/* ------------------------------------------------------------------------------------------ */

  async function get_maxItems_from_newestSportVideos() {

    // console.log("➡️ get_maxItems_from_newestSportVideos()")

    /* ------------------------------------------------------------------------------ */
    // Step 1
    /* Get Data
    /* ------------------------------------------------------------------------------- */

      var max_newstSportVideos = 0;

    /* ------------------------------------------------------------------------------ */
    // Step 2
    /* Count all "top3videos" on not empty "externalLink"
    /* ------------------------------------------------------------------------------- */

      var max_top3Videos = 0;
      var data_top3Videos = data_newestSportVideos.top3videos;


      for( let i=0; i < data_top3Videos.length; i++ ) {

        if( data_top3Videos[i].externalLink != "" ) {

          max_top3Videos +=1;

        }

      }


    /* ------------------------------------------------------------------------------- */
    // Step 2
    // Count all "historyVidos[i].content3" on not empty "externalLink"
    /* ------------------------------------------------------------------------------- */

      var max_historyVideos = 0;
      var data_historyVideos = data_newestSportVideos.historyVideos;

      // check in rows
      for( let i=0; i < data_historyVideos.length; i++ ) {

        // check in content3 (max 3 elememts)
        for( let j=0; j < data_historyVideos[i].content3.length; j++ ) {

          if( data_historyVideos[i].content3[j].externalLink != "" ) {

            max_historyVideos +=1;

          }

        }


      }


    /* ------------------------------------------------------------------------------- */
    // Step 3
    // Add Final "top3 with history"
    /* ------------------------------------------------------------------------------- */

      max_newstSportVideos = ( max_top3Videos + max_historyVideos )


    return new Promise(resolve => {
          resolve( max_newstSportVideos );
    })

  }

/* ------------------------------------------------------------------------------------------ */
/* Get | Max Items | from | Sport Challenges
/* ------------------------------------------------------------------------------------------ */

 async function get_maxItems_from_sportChallenges() {

    // console.log("➡️ get_maxItems_from_sportChallenges()")

    /* ------------------------------------------------------------------------------ */
    // Step 1
    /* Get Data
    /* ------------------------------------------------------------------------------- */

      var max_sportChallenges = data_3_videos_sport_challenges.challenges.length;


    return new Promise(resolve => {
          resolve( max_sportChallenges );
    })

 }
