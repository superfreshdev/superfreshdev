// console.log("🟨 delete-all-row-col-gaps-if-not-needed.js")

/*

  🤬 Problem:
  Grid dont delete row & col gap if there is only
  one element - bad view is that we have an space
  that we dont like to have

  ➡️ Solution:
  dyn. by java script to check if there is 1 or 2 elements
  and then delete dyn. row or col gap css settings

  Its an async await function because
  we should call it after dyn. creating
  gridLayouts with there elements.
  Before an gridLayout dont exist.

*/

/* ----------------------------------------------------------------- */
/*  🥶🥶🥶 Testing | Variables
/* ----------------------------------------------------------------- */

  // test
  const sport_3_videos_containers_new = document.querySelectorAll(".sport-3-videos-link-container");




/* ----------------------------------------------------------------- */
/*  Functions
/* ----------------------------------------------------------------- */


  /* ----------------------------------------------------------------- */
  /* Delete All Row Col Gaps | If not needed
  /* ----------------------------------------------------------------- */

  async function delete_all_row_col_gaps_if_not_needed( gridLayouts ) {

    console.log("➡️ delete_all_row_col_gaps_if_not_needed() ")

    // console.log("gridLayout(Lenght): " +  gridLayouts.length )
    // console.log("strGridElements: " + strGridElements )

    var maxGridLayouts = gridLayouts.length;

    /* ----------------------------------------------------------------- */
    //  Step 1:
    //  Counts in all Grid Layouts if 1 or 2 element exists
    //  if only 1 = delete row & col gap
    //  if only 2 = delete row gap
    //
    //  it checks on style "display=none" too, because
    //  default elements exist if they are display=none but
    //  we want display=none handle like dont exist, so thats
    //  why we should work with an filter
    /* ----------------------------------------------------------------- */

    for( let i=0; i < maxGridLayouts; i++ ) {

      console.log("GridLayout Nr." + i + " | " + gridLayouts[i] );

      // Count Dom Visible Child Elements
      var visible_children = [...gridLayouts[i].children].filter(el =>
        window.getComputedStyle(el).display !== "none");

      // delete row / col gap
      switch( visible_children.length ) {

        case 1:

          // delete | row & col gap
          // console.log(i + " = " + visible_children.length + " | Delete | row & col ");

          gridLayouts[i].style.rowGap = "0px";
          gridLayouts[i].style.columnGap = "0px";
          break;

        case 2:

          // delete | row gap
          // console.log(i + " = " + visible_children.length + " | Delete | row ");

          gridLayouts[i].style.rowGap = "0px";
          break;

      }

    }

    return new Promise(resolve => {
        resolve();
    })

  }

  /* ----------------------------------------------------------------- */
  /* Add Media Query | To Set Col Gap
  /* ----------------------------------------------------------------- */

  function add_media_query_to_set_col_gap( gridLayouts, strWidth, setStrColCapEm, resetStrColGapEm ) {

    console.log("➡️ add_media_query_to_set_col_gap")

    /* Info:

      > Dont delete col gap anymore by only one element
        if we reach the screen width size (strWidth)-
        Because we dont like that the one element
        is bigger than an layout which 3 elements
        with there col gaps - we like the structure
        be the same and looks clean.

    */

    var maxGridLayouts = gridLayouts.length;
    // console.log("gridLayouts(lenght) = " + maxGridLayouts )
    // console.log("strWidth = " + strWidth )

    /* ----------------------------------------------------------------- */
    // Step 1:
    // Create Media Query Width Point
    /* ----------------------------------------------------------------- */

    // console.log("🥶 = " + "(min-width:"+strWidth+")")
    var media_query_width = window.matchMedia("(min-width:"+strWidth+")")

    /* ----------------------------------------------------------------- */
    // Step 2:
    // Add Media Query Change Listener by given media query width
    /* ----------------------------------------------------------------- */

    media_query_width.addEventListener("change", ()=> {

      // media query width was reached
      if( media_query_width.matches ) {

        // window.alert("🥶🥶🥶 | U Reach = " + strWidth )

        for( let i=0; i < maxGridLayouts; i++ ) {

          // console.log("GridLayout Nr." + i + " | " + gridLayouts[i] );

          // Count Dom Visible Child Elements
          var visible_children = [...gridLayouts[i].children].filter(el =>
            window.getComputedStyle(el).display !== "none");

          // delete only col gap by grid layouts with only one lement
          if( visible_children.length == 1 ) {

            gridLayouts[i].style.columnGap = setStrColCapEm;

          }

        }

      } else {

        // delete this col gap again because width screen get smaller to mobile
        // window.alert("🤬🤬🤬 | Reach Down = "  )

         for( let i=0; i < maxGridLayouts; i++ ) {

          // console.log("GridLayout Nr." + i + " | " + gridLayouts[i] );

          // Count Dom Visible Child Elements
          var visible_children = [...gridLayouts[i].children].filter(el =>
            window.getComputedStyle(el).display !== "none");

          // delete only col gap by grid layouts with only one lement
          if( visible_children.length == 1 ) {

            gridLayouts[i].style.columnGap = resetStrColGapEm;

          }

        }

      }


    })

  }

  /* ----------------------------------------------------------------- */
  /* Add Window Load Media Query | To Set Col Gap
  /* ----------------------------------------------------------------- */

  // Because by reload we need to check too

  function add_window_load_media_query_to_set_col_gap( gridLayouts, width , setStrColCapEm, resetStrColGapEm ) {

    console.log("➡️ add_window_load_media_query_to_set_col_gap")

    var maxGridLayouts = gridLayouts.length;

    var window_load_width = "";



    window.addEventListener("load", ()=> {

      window_load_width = screen.width;

      window.alert("Hahah, u load me= " + window_load_width  )

       // if reached break point
       if( window_load_width >= width ) {

        // window.alert("🥶🥶🥶 | U Reach = " + strWidth )

        for( let i=0; i < maxGridLayouts; i++ ) {

          // console.log("GridLayout Nr." + i + " | " + gridLayouts[i] );

          // Count Dom Visible Child Elements
          var visible_children = [...gridLayouts[i].children].filter(el =>
            window.getComputedStyle(el).display !== "none");

          // delete only col gap by grid layouts with only one lement
          if( visible_children.length == 1 ) {

            gridLayouts[i].style.columnGap = setStrColCapEm;

          }

        }

      } else {

        // delete this col gap again because width screen get smaller to mobile
        // window.alert("🤬🤬🤬 | Reach Down = "  )

         for( let i=0; i < maxGridLayouts; i++ ) {

          // console.log("GridLayout Nr." + i + " | " + gridLayouts[i] );

          // Count Dom Visible Child Elements
          var visible_children = [...gridLayouts[i].children].filter(el =>
            window.getComputedStyle(el).display !== "none");

          // delete only col gap by grid layouts with only one lement
          if( visible_children.length == 1 ) {

            gridLayouts[i].style.columnGap = resetStrColGapEm;

          }

        }

      }

    })

  }



  add_window_load_media_query_to_set_col_gap( sport_3_videos_containers_new, "450", "1em", "0em" );






  add_media_query_to_set_col_gap( sport_3_videos_containers_new, "450px", "1em", "0em" )
