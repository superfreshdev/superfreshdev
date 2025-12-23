// console.log("🟨 get-infos-sport.js")


/* ------------------------------------------------------------------------------------------ */
/* Get | Max Items | from | Sport Category
/* ------------------------------------------------------------------------------------------ */

  async function get_maxItems_from_sportCategory( checkedIndex ) {


    console.log("➡️ get_maxItems_from_sportCategory()");

    console.log("checkedIndex = " + checkedIndex)

    // if not changed, than wrong checkedIndex
    var maxItems = -1;

    /* --------------------------------------------------------------------- */
    /* Get Max Items by checked Index (global)
    /* --------------------------------------------------------------------- */

      switch( checkedIndex ) {

        case 0:
          // set max content items | newest vidoes (global)
          maxItems = await get_maxItems_from_newestSportVideos();
          console.log("maxItems = " + maxItems)
          break;

        case 1:
          // set max content items | challenges (global)
          // +1 because of extra 30 videos link sport challenge
          maxItems = await get_maxItems_from_sportChallenges() + 1;
          console.log("maxItems = " + maxItems)
          break;

        default:
          break;

      }



    return new Promise(resolve => {
          resolve( maxItems );
      })

  }


/* ------------------------------------------------------------------------------------------ */
/* Get | Max History Counts
/* ------------------------------------------------------------------------------------------ */

  async function get_maxItems_from_history_newestSportVideos() {

    // default if not changed
    var maxItems = 0;

    // get data history
    var dataArray_history_newestSportVideos = data_newestSportVideos.historyVideos;
    var dataArray_historyItems = "";

    for( let i=0; i < dataArray_history_newestSportVideos.length; i++ ) {

      dataArray_historyItems = dataArray_history_newestSportVideos[i].content3;

      // check in content3 | 3 items
      for( j=0; j < dataArray_historyItems.length; j++ ) {

        // add + 1 if external Link is not empty
        if( dataArray_historyItems[j].externalLink != "" ) {
          maxItems = maxItems + 1;
        }

      }

      // empty dataArray for next routine
      dataArray_historyItems = [];

    }



     return new Promise(resolve => {
          resolve( maxItems );
      })

  }
