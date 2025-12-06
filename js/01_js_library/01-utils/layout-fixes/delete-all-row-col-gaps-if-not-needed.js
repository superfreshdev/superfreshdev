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
/*  Functions
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
