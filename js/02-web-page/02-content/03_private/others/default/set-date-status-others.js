// console.log("🟨 set-date-status-others.js")


/* -------------------------------------------------------------------------- */
// ⚠️ Clean Code bitte in Zukunft machen + auslagern
/* -------------------------------------------------------------------------- */

/* ----------------------------------------------------------------- */
/*  Variables
/* ----------------------------------------------------------------- */

  var status_dates_others = [];

/* ----------------------------------------------------------------- */
/*  DOM Elements
/* ----------------------------------------------------------------- */

  // Add all class-css-selector to Variable
  status_dates_others = document.getElementsByClassName("js-status-date-others");

  // console.log( "➡️➡️➡️ " + status_dates_others.length )

/* ----------------------------------------------------------------- */
/*  Functions
/* ----------------------------------------------------------------- */

  // Set Actually Date
  for( let i=0; i < status_dates_others.length; i++ ) {

    status_dates_others[i].innerText = getDay() + "." + getMonth() + "." + getYear();

  }
