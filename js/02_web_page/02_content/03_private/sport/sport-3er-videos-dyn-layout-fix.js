// console.log("🟨 sport-3er-videos-dyn-layout-fix.js")

/*

  🟥 to Do:

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
console.log("✳️ Max Count (3er) = " + sport_3_videos_containers.length )

// Only Dom Exist Count
const childs_of_sport_3_videos = sport_3_videos_containers[1].querySelectorAll(".sport-video-link-box-3er-layout").length;
console.log("✳️ Max Childs [1] (3er) = " + childs_of_sport_3_videos )

// Only Dom Visible Count
const visible_children = [...sport_3_videos_containers[1].children].filter(el =>
  window.getComputedStyle(el).display !== "none");

console.log(visible_children.length); // → 2

/* ------------------------------ */

delete_row_col_gaps_by_grid_layouts( sport_3_videos_containers, ".sport-video-link-box-3er-layout" )

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

  console.log("=> 🐦‍🔥 " + cssChildElementSelector )

}


























// Solution filter = display = none und dont exist

// manipuliate
// all_sport_3_videos_containers[1].querySelector("div").style.border = "10px solid red";

// all_sport_3_videos_containers[1].style.backgroundColor = "red";
// all_sport_3_videos_containers[1].style.rowGap = "0px";
// all_sport_3_videos_containers[1].style.columnGap = "0px";
