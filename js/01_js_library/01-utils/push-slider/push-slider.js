// console.log("🟡(Lib) push-slider.js ")


/* ---------------------------------------------------------------------- */
/* Function:
/* Do Push Slide
/* ---------------------------------------------------------------------- */

function doPushSlide( slides, currentIndex, newIndex ) {


  // termination condition, dont allow same index for new sliding
  if( newIndex === currentIndex ) return;

  // console.log("---------------------")
  // console.log("📏|slides.length= " + slides.length )
  // console.log("📏|currentIndex= " + currentIndex )
  // console.log("📏|newIndex= " + newIndex )
  // console.log("---------------------")

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

  // Add End Translate to 'newPage' (100% -> 0% or -100% -> 0%)
  nextPage.style.transform = 'translateX(0)';


  // Add End Translate to 'currentPage' from 'left to right' or 'right to left'
  currentPage.style.transform = `translateX(${-100 * direction}%)`;


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
