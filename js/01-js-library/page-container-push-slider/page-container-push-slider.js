console.log("(🟨Lib) page-container-push-slider.js ")


/* ------------------------------------------------------ */
/* Function:
/* > Handle correct Page Push Slide by Clicked Index
/* ------------------------------------------------------ */

// slides, currentIndex, nextIndex

/*

  1. Calc slide direction ( async resolve )
  2. to slide

*/


  /*

      1. upateIndexSlide
      2. startPushSlide

  */

  /* ---------------------------------------------------------------------- */
  /* Update Index Slide
  /* ---------------------------------------------------------------------- */

  function getNewIndexSlide( currentIndex, newIndex ) {

    /* reminder:
       check only new index slide
    */

    if( newIndex !== currentIndex ) {

      return newIndex;

    } else {

      return -1;

    }

  }

  /* ---------------------------------------------------------------------- */
  /* Do Push Slide
  /* ---------------------------------------------------------------------- */

  function doPushSlide( slides, currentIndex, newIndex ) {


    console.log("---------------------")
    console.log("📏|slides.length= " + slides.length )
    console.log("📏|currentIndex= " + currentIndex )
    console.log("📏|newIndex= " + newIndex )
    console.log("---------------------")

    /* -------------------------------------------- */
    /* Step 1: Style Slide Push Direction
    /* -------------------------------------------- */

    const currentPage = slides[currentIndex];
    const nextPage = slides[newIndex]

    // Multiplicator for Slide Direction
    const direction = newIndex > currentIndex ? 1 : -1;

    // Add Start Translate to 'nextPage'
    nextPage.style.transition = 'none';
    nextPage.style.transform = `translateX(${100 * direction}%)`;
    nextPage.style.zIndex = 3;

    // Fore Reflow ( Web-Browser )
    // force Web-Browser to calculate
    // the next Slide Element again to
    // register the start transition
    // why ?
    // without that we lost / overwrite our
    // start transition & in the end we dont get
    // any transition
    void nextPage.offsetWidth;

    // add after new browser calc new transistion effect
    currentPage.style.transition = 'transform .5s ease';
    nextPage.style.transition = 'transform .5s ease';


    /* -------------------------------------------- */
    /* Step 2: Start Push Slide
    /* -------------------------------------------- */

    // Add End Translate to 'currentPage' from 'left to right' or 'right to left'
    currentPage.style.transform = `translateX(${-100 * direction}%)`;

    // Add End Translate to 'newPage' (100% -> 0% or -100% -> 0%)
    nextPage.style.transform = 'translateX(0)';


    /* -------------------------------------------- */
    /* Step 3: Update New Slide
    /* -------------------------------------------- */

      // reminder: wait 500ms, then start
      // the browser need some time to recalc by 'nextPage.offsetWidth'
      // & do translate

      setTimeout(() => {

        /* ------------------------------------------------------------------ */
        /* Step 1: Unshown Old Slide
        /* ------------------------------------------------------------------ */

        currentPage.classList.remove('active');

        currentPage.style.transition = 'none';
        currentPage.style.transform = 'translateX(100%)';
        currentPage.style.zIndex = 1;

        /* ------------------------------------------------------------------ */
        /* Step 2: Show New Slide
        /* ------------------------------------------------------------------ */

        nextPage.classList.add('active');
        nextPage.style.zIndex = 2;




      }, 500)




  }



  /* ------------------------------------------------------- */
  /* Function:
  /* Get New Current Index
  /* ------------------------------------------------------- */
  function getNewClickedIndex ( currentIndex, clickedIndex ) {

    console.log("🦍 currentIndex = " + currentIndex )
    console.log("🦍 clickedIndex = " + clickedIndex )

    if( clickedIndex != currentIndex ) {

      console.log( " Next Index = " + clickedIndex )

      return clickedIndex;

    } else {

      return -1;

    }

  }


  async function goToSlide( slidePages, currentIndex , clickedIndex ) {

    console.log( "Ich war drin" )

    var currentIndex = currentIndex;
    var nextIndex = clickedIndex;

    /* ------------------------------------------------------ */
    /* Step 1 | Handle only New Cklick
    /* ----------------------------------------------------- */

    if (nextIndex === currentIndex || nextIndex < 0 || nextIndex >= slidePages.length) return;

    /* ------------------------------------------------------ */
    /* Step 2 | Get Current & Next Page
    /* ------------------------------------------------------ */

    const currentPage = slidePages[currentIndex];
    const nextPage = slidePages[nextIndex]

    /* ------------------------------------------------------ */
    /* Step 3 | Get Slide Direction 1=right,-1=left
    /* ------------------------------------------------------ */

    const direction = nextIndex > currentIndex ? 1 : -1;

    /* ------------------------------------------------------ */
    /* Step 4 | Get Dyn. Start Transition Position
                for next Slide ( 100% = right / -100% = left )
    /* ------------------------------------------------------ */

    nextPage.style.transition = 'none';
    nextPage.style.transform = `translateX(${100 * direction}%)`;
    nextPage.style.zIndex = 3;

    /* ------------------------------------------------------ */
    /* Step 5 | Fore Reflow ( Web-Browser )
                force Web-Browser to calculate
                the next Slide Element again to
                register the start transition
                why ?
                without that we lost / overwrite our
                start transition & in the end we dont get
                any transition
    /* ------------------------------------------------------ */

    void nextPage.offsetWidth;

    /* ------------------------------------------------------ */
    /* Step 6 | Add new transition to current & next page
    /* ------------------------------------------------------ */

    currentPage.style.transition = 'transform .5s ease';
    nextPage.style.transition = 'transform .5s ease';

    /* ------------------------------------------------------ */
    /* Step 7 | Handle correct slide for current & next
                - current can slide 100% or -100%
                - next will only slide to 0, the showing page
    /* ------------------------------------------------------ */

    currentPage.style.transform = `translateX(${-100 * direction}%)`;
    nextPage.style.transform = 'translateX(0)';

    /* ------------------------------------------------------ */
    /* Step 8 | Update new current index
    /* ------------------------------------------------------ */

    currentIndex = nextIndex;

    /* ------------------------------------------------------ */
    /* Step 9 | Wait 500ms, & then do new slide
    /* ------------------------------------------------------ */

    // reminder: do only return if the slide is finished

    // const resolved = await start_push_slide( currentPage, nextPage );

    // console.log("⁉️ = " + resolved )

    if( "resolved" == await start_push_slide( currentPage, nextPage ) ) {

      return currentIndex;

    } else {

      return -1;

    }


    // return await start_push_slide() ;

  }




  function start_push_slide( currentPage, nextPage ) {

    return new Promise((resolve) => {

      /* ----------------------------------------- */
      /* Wait 500ms, then start push slide
      /* ----------------------------------------- */
      setTimeout(() => {

        /* ------------------------------------------------------------------ */
        /* Step 1: Unshown Old Slide
        /* ------------------------------------------------------------------ */

        currentPage.classList.remove('active');

        currentPage.style.transition = 'none';
        currentPage.style.transform = 'translateX(100%)';
        currentPage.style.zIndex = 1;

        /* ------------------------------------------------------------------ */
        /* Step 2: Show New Slide
        /* ------------------------------------------------------------------ */

        nextPage.classList.add('active');
        nextPage.style.zIndex = 2;

        /* ------------------------------------------------------------------ */
        /* Step 3: Send Resolve ( finish state )
        /* ------------------------------------------------------------------ */
        resolve("resolved");

      }, 500)


    })



  }
