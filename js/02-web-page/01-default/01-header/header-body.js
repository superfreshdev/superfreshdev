// console.log("🟡 header-body.js")

/* ----------------------------------------- */
/* ⚠️ Clean Code bitte machen
/* ----------------------------------------- */

/* -------------------------------------------------------- */
/* DOM Elements
/* -------------------------------------------------------- */

  const body_page_slides = document.querySelectorAll("#main-body > .push-slider:nth-of-type(1) .push-content-slide");
  const radios_body_header =  document.querySelectorAll("input[name='name-radio-nav-header-body']");

/* ------------------------------------------------------ */
/* Variables
/* ------------------------------------------------------ */

  // default at the beginning
  // if currentIndex dont will be set by finding checked radio than
  // it will use this value of 0, that will be set the first page
  var currentIndex = 0;
  var nextIndex = 0;


/* ------------------------------------------------------ */
/* Add | Radio Change Listeners
/* ------------------------------------------------------ */

  for( let clickedIndex=0; clickedIndex < radios_body_header.length ; clickedIndex++ ) {


    // add changek listener
    radios_body_header[clickedIndex].addEventListener( 'change', () => {

      console.log( "⚡ Radio Changed = " + clickedIndex )

        /* ----------------------------------------------------- */
        /* Step 1: Do Push Slide
        /* ----------------------------------------------------- */

        doPushSlide( body_page_slides, currentIndex, clickedIndex )

        /* ----------------------------------------------------- */
        /* Step 2: Update new Current Index
        /* ----------------------------------------------------- */

        currentIndex = clickedIndex;


    } )

  }

/* ------------------------------------------------------ */
/* Execute (Relaod Web-Page)
/* ------------------------------------------------------ */

  // Set the content by find radio checked or set default index 0

  for( let settedIndex=0; settedIndex < radios_body_header.length ; settedIndex++ ) {


    if( radios_body_header[settedIndex].checked == true ) {

        // console.log("🟣🟣🟣 Start Page = " + settedIndex )

        /* ----------------------------------------------------- */
        /* Step 1: Do Push Slide
        /* ----------------------------------------------------- */

        doPushSlide( body_page_slides, currentIndex, settedIndex )

        /* ----------------------------------------------------- */
        /* Step 2: Update new Current Index
        /* ----------------------------------------------------- */

        currentIndex = settedIndex;

    }

  }
