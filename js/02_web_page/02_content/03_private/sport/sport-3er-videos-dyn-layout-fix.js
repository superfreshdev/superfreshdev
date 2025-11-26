// console.log("🟨 sport-3er-videos-dyn-layout-fix.js")

/*

  Problem:
  Grid dont delete row & col gap if there is only
  one element - bad view is that we have an space
  that we dont like to have

  Solution: dyn. by java script to check if there is 1 or 2 elements
  and then delete dyn. row or col gap css settings

*/

/* ----------------------------------------------------------------- */
/*  Var & Dom Elements
/* ----------------------------------------------------------------- */

const sport_3_videos_containers = document.querySelectorAll(".sport-3-videos-container");
// console.log("✳️ Max Count (3er) = " + sport_3_videos_containers.length )

/* ----------------------------------------------------------------- */
/*  Functions
/* ----------------------------------------------------------------- */

function delete_row_col_gaps_by_grid_layouts( gridLayoutElements, cssChildElementSelector ) {

  /* ----------------------------------- */
  /* Step 1/1
  /* ----------------------------------- */
  /*
      Count visible child elements & it works too,
      if on the DOM is for example only 1 created child element
  */

  const all_grid_layouts = gridLayoutElements;

  for( let i=0; i < all_grid_layouts.length; i++ ) {


    // Count Dom Visible Child Elements
    var visible_children = [...all_grid_layouts[i].children].filter(el =>
      window.getComputedStyle(el).display !== "none");

    // delete row / col gap
    switch( visible_children.length ) {

      case 1:
        // delete | row & col gap
        // console.log(i + " = " + visible_children.length + " | Delete | row & col ");

        all_grid_layouts[i].style.rowGap = "0px";
        all_grid_layouts[i].style.columnGap = "0px";
        break;

      case 2:
        // delete | row gap
        // console.log(i + " = " + visible_children.length + " | Delete | row ");

        all_grid_layouts[i].style.rowGap = "0px";
        break;

    }


  }

}

/* ----------------------------------------------------------------- */
/*  Execute
/* ----------------------------------------------------------------- */

delete_row_col_gaps_by_grid_layouts( sport_3_videos_containers, ".sport-video-link-box-3er-layout" )
