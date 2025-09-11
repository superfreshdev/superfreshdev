console.log("🟡 header-body.js")

/* ----------------------------------------- */
/* ⚠️ Clean Code bitte machen
/* ----------------------------------------- */


/* -------------------------------------------------------- */
/* DOM Elements
/* -------------------------------------------------------- */

const body_slides = document.querySelectorAll('#body-push-page-slider .push-content-slide');
const header_body_links =  document.querySelectorAll('.label-nav-header-body');

// radio of nav header
const radios_body_header = document.querySelectorAll("input[name='name-radio-nav-header-body']");

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
/* Events
/* ------------------------------------------------------ */

/* ------------------------------------------------------ */
/* Radio Change
/* ------------------------------------------------------ */

for( let clickedIndex=0; clickedIndex < radios_body_header.length ; clickedIndex++ ) {


  // add changek listener
  radios_body_header[clickedIndex].addEventListener( 'change', () => {

    console.log( "⚡ Radio Changed = " + clickedIndex )

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

/* ------------------------------------------------------ */
/* Execute
/* ------------------------------------------------------ */

    // Set the content by radio checked

    for( let clickedIndex=0; clickedIndex < radios_body_header.length ; clickedIndex++ ) {


    if( radios_body_header[clickedIndex].checked == true ) {

        console.log("🟣🟣🟣 Start Page = " + clickedIndex )

        /* ----------------------------------------------------- */
        /* Step 1: Do Push Slide
        /* ----------------------------------------------------- */

        doPushSlide( body_slides, currentIndex, clickedIndex )

        /* ----------------------------------------------------- */
        /* Step 2: Update new Current Index
        /* ----------------------------------------------------- */

        currentIndex = clickedIndex;

    }

    }
