// console.log("🟨 sport-3er-videos-dyn-layout-fix.js")

/*

  🟥 to Do:

  Problem:
  Grid dont delete row & col gap if there is only
  one element - result is that we have an space
  that we dont like to have

  Solution: dyn. by java script to check if there is one or 2 elements

*/

/* ----------------------------------------------------------------- */
/*  Var & Dom Elements
/* ----------------------------------------------------------------- */

const all_sport_3_videos_containers = document.querySelectorAll(".sport-3-videos-container");
console.log("✳️ Lenght (3er) = " + all_sport_3_videos_containers.length )


// console.log("😡 Lenght (Divs) = " + all_sport_3_videos_containers[1].querySelectorAll("div").length )
// change border
// all_sport_3_videos_containers[1].querySelector("div:nth-of-type(1)").style.border = "10px solid red";

// 🟥 Problem: Find solution to get count child elements , internet says = filter by display none

// fixed
// all_sport_3_videos_containers[1].style.columnGap = "0px";
// all_sport_3_videos_containers[1].style.rowGap = "0px";

//fixed
// all_sport_3_videos_containers[2].style.rowGap = "0px";

// console.log("🎻 Lenght (Divs) = " + all_sport_3_videos_containers[1].querySelectorAll(".sport-video-link-box-3er-layout").length )

// console.log("🎻 Lenght (Divs) = " + all_sport_3_videos_containers[1].querySelectorAll(".sport-video-link-box-3er-layout").children.length )

/* ----------------------------------------------------------------- */
/*  Functions
/* ----------------------------------------------------------------- */
