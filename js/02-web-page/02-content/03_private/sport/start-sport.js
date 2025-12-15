// console.log("🟨 start-sport.js")


/* ------------------------------------------------------------------------------------------------------------- */
// ➡️🟥 Step 1:
// 1.1 Update Views    | Header + Nav of Sport Categories
// 1.2 Create Elements | Nav of Sport Challenges ( radios, labels, radio change listener, ... )
/* ------------------------------------------------------------------------------------------------------------- */

  /* ----------------------------------------------------------------------------------------------- */
  /* 1.1 Update Views    | Header + Nav of Sport Categories
  /* ----------------------------------------------------------------------------------------------- */

    update_sport_categegories_header_nav();

  /* ----------------------------------------------------------------------------------------------- */
  /* 1.2 Create Elements | Nav of Sport Challenges ( radios, labels, radio change listener, ... )
  /* ----------------------------------------------------------------------------------------------- */

    update_sport_challenges_nav()


/* ------------------------------------------------------------------------------------------------------------- */
// ➡️🟥 Step 2:
// 1.1 Add Grid Layout Layout Fixes to "3...." ( colg,row gaps by 1 or 2 elements )
// 1.2 Add Media Query Width Listener for Grid Layout Fixes
// 1.3 Add Window Load Width for Grid Layout Fixes
/* ------------------------------------------------------------------------------------------------------------- */

  /* ------------------------------------------------------------- */
  /* 1.1 Add Grid Layout Fixes to "3..."
  /* ------------------------------------------------------------- */

  /* ------------------------------------------------------------- */
  /* 1.2 Add Media Query Width Listener for Grid Layout Fixes
  /* ------------------------------------------------------------- */

  /* ------------------------------------------------------------- */
  /* 1.3 Add Window Load Width for Grid Layout Fixes
  /* ------------------------------------------------------------- */


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
