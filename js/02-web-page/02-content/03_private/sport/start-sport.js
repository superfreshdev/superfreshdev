// console.log("🟨 start-sport.js")


/* ------------------------------------------------------------------------------------------------ */
/* Async | Start Build Sport
/* ------------------------------------------------------------------------------------------------ */

  async function start_build_sport() {

    console.log("➡️ start_build_sport()")

    /* ------------------------------------------------------------------------------------------------------------- */
    // 🟩 Step 1:
    // Update View | Header Nav | Sport Categories
    /* ------------------------------------------------------------------------------------------------------------- */

        await update_view_header_nav_sportCategories();


    /* ------------------------------------------------------------------------------------------------------------- */
    // ➡️🟥 Step 2:
    // 2.1 Create View | Sport Challenges Nav ( radios, labels, radio change listener, ... )
    // 2.2 Add         | Radio Change Listeners Sport "Challenges" ( set challenge content )
    /* ------------------------------------------------------------------------------------------------------------- */

      /* ----------------------------------------------------------------------------------------------- */
      /* 🟩 2.1 Create View | Sport Challenges Nav  ( radios, labels, radio change listener, ... )
      /* ----------------------------------------------------------------------------------------------- */

        // create_view_nav_sport_challenges()
        await create_view_sport_challenges_nav()

      /* ----------------------------------------------------------------------------------------------- */
      /* ➡️🟥 2.2 Add | Radio Change Listeners | Sport Challenges
      /* ----------------------------------------------------------------------------------------------- */

        await add_radio_change_listener_sport_challenges()


    /* ------------------------------------------------------------------------------------------------------------- */
    // ➡️🟥 Step 3:
    // Add | Radio Change Listeners | Sport Categories
    /* ------------------------------------------------------------------------------------------------------------- */

      // global
      await add_radio_change_listeners_sportCategories( radios_sport_categories );


    /* ------------------------------------------------------------------------------------------------------------- */
    // 🟥 Step 4:
    // 4.1 Add Grid Layout Layout Fixes to "3...." ( colg,row gaps by 1 or 2 elements )
    // 4.2 Add Media Query Width Listener for Grid Layout Fixes
    // 4.3 Add Window Load Width for Grid Layout Fixes
    /* ------------------------------------------------------------------------------------------------------------- */

      /* ------------------------------------------------------------- */
      /* 🟥 4.1 Add Grid Layout Fixes to "3..."
      /* ------------------------------------------------------------- */

      /* ------------------------------------------------------------- */
      /* 🟥 4.2 Add Media Query Width Listener for Grid Layout Fixes
      /* ------------------------------------------------------------- */

      /* ------------------------------------------------------------- */
      /* 🟥 4.3 Add Window Load Width for Grid Layout Fixes
      /* ------------------------------------------------------------- */


    return new Promise(resolve => {
          resolve();
    })


  }

/* ------------------------------------------------------------ */
/* ➡️ Start Sport
/* ------------------------------------------------------------ */

  start_build_sport();

















// ❌❌❌ Trash to check which u need
/*

    Bewusst nicht in Windows Load Event da wir nicht
    warten wollen bis das alles fertig ist ... da
    wir als Startseite sowieso unsere About Seite sehen ...
    damit verhindern wir unntöige wartezeit für ein Inhat
    den wir sowieso nicht als erstes sehen ...

    1. update_sport_categroies_header_nav()
          - update
          - create sport challenges
          - add radio change listener to create content
              - if content exist dont create again ( check exist & display=none )

    -----------------------------------------------------------------------------

    2.1 Default Delete col & row gap from grid layout = 3 ...

    2.2 Windows Load Event
        - Widht Size -> Delete col & row gap from grid layout = 3 ...

    2.3 Media Query Event by Width
        - Widht Size -> Delete col & row gap from grid layout = 3 ...

*/
