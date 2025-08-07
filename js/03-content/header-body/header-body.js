console.log("🟨 header-body.js ")


/* -------------------------------------------------------- */
/* DOM Elements
/* -------------------------------------------------------- */

const body_slides = document.querySelectorAll('.push-page-slide');
const header_body_links =  document.querySelectorAll('.label-nav-header-body');

/* ------------------------------------------------------ */
/* Variables
/* ------------------------------------------------------ */

// default at the beginning
var currentIndex = 0;
var nextIndex = 0;

/* ------------------------------------------------------ */
/* Functions
/* ------------------------------------------------------ */

// -

/* ------------------------------------------------------ */
/* Button Click | Event Listeners
/* ------------------------------------------------------ */

for( let clickedIndex=0; clickedIndex < header_body_links.length ; clickedIndex++ ) {


  header_body_links[clickedIndex].addEventListener( 'click', () => {

    console.log( "⚡ Link clicked = " + clickedIndex )

      /* ----------------------------------------------------- */
      /* Step 1: Do Push Slide
      /* ----------------------------------------------------- */

      doPushSlide( body_slides, currentIndex, clickedIndex )

      /* ----------------------------------------------------- */
      /* Step 2: Update new Current Index
      /* ----------------------------------------------------- */

      currentIndex = clickedIndex;


  } )
}
