console.log("🟨 set-unfinished-to-all.js")


/* ----------------------------------------------------------------- */
/*  DOM Elements
/* ----------------------------------------------------------------- */

var unfinished_date_elements = document.getElementsByClassName("js-date-info-working-status");

console.log("Mongos = " + unfinished_date_elements.length )

/* ----------------------------------------------------------------- */
/*  Execute
/* ----------------------------------------------------------------- */

// Set actually date to unfinished elements

// unfinished_date_elements.forEach(unfinished_item => {

//    unfinished_item.innerText = "Verrückte Mongo 🥭";

// });

for( let i=0; i < unfinished_date_elements.length; i++ ) {

  unfinished_date_elements[i].innerText = printDate();

}

//

console.log("🥭 Year = " + new Date().getFullYear() );

console.log("🥭 Month = " + ( new Date().getMonth() + 1) );

console.log("🥭 Day = " + new Date().getDate() );
