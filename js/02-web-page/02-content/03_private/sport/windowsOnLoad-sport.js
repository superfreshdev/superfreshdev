// console.log("🟨 windowsOnLoad-sport.js")


/*

    ❌❌❌❌ brauchen wir hier nicht

*/

/* ------------------------------------------------------------------------ */
/* Variables
/* ------------------------------------------------------------------------ */

    var max_newestSportVideos = "";
    var max_sportChallenges = "";

/* ------------------------------------------------------------------------ */
/* Windows on Load | Sport
/* ------------------------------------------------------------------------ */

window.addEventListener( 'load', async ()=> {


    /* ------------------------------------------------ */
    /* Get Max Items of ( newest, challenges )
    /* ------------------------------------------------ */

      max_newestSportVideos = await get_maxItems_from_newestSportVideos();
      console.log("🔥max_newestSportVideos🔥 = " + max_newestSportVideos )

      // global fixed +1 because of "30 sport videos link challenge" ,
      // all others sport challenges will be count from "data_3_videos_sport_challenges"
      max_sportChallenges  = await get_maxItems_from_sportChallenges() + 1;
      console.log("🔥max_sportChallenges🔥 = " + max_sportChallenges )



    return new Promise(resolve => {
            resolve();
        })


} )
