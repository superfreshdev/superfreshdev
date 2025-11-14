// console.log("🟨 set-date-mini-games.js")


/* ----------------------------------------------------------------- */
/*  Variables
/* ----------------------------------------------------------------- */

var date_under_construction_mini_games = "";

/* ----------------------------------------------------------------- */
/*  DOM Elements
/* ----------------------------------------------------------------- */

date_under_construction_mini_games = document.getElementById("js-construction-mini-games");

/* ----------------------------------------------------------------- */
/*  Set Actually Date
/* ----------------------------------------------------------------- */

date_under_construction_mini_games.innerText = getDay() + "." + getMonth() + "." + getYear();
