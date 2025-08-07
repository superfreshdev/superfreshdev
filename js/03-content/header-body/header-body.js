console.log("🟨 header-body.js ")


/* -------------------------------------------------------- */
/* DOM Elements
/* -------------------------------------------------------- */

const body_slides = document.querySelectorAll('.push-page-slide');
const header_body_links =  document.querySelectorAll('.label-nav-header-body');

/* ------------------------------------------------------ */
/* Variables
/* ------------------------------------------------------ */

var currentIndex = 0;
var nextIndex = 0;

/* ------------------------------------------------------ */
/* Functions
/* ------------------------------------------------------ */

// header_body_links[0].style.display = "none";

/* ------------------------------------------------------ */
/* Button Click | Event Listeners
/* ------------------------------------------------------ */

/*


   ⚠️ Challenge

   > Universell content-push-slider
   > content-slide

   > content-push-slider.js => Übergabe verarbeiten und CurrentIndex zurück geben ( async await )
   > header-body.js => DOM Elements & Event Handler


*/


for( let clickedIndex=0; clickedIndex < header_body_links.length ; clickedIndex++ ) {


  header_body_links[clickedIndex].addEventListener( 'click', () => {

    console.log( "⚡ Link clicked = " + clickedIndex )

    /* ----------------------------------------------------- */
    /* Step 1: Check only New Clicked Index
    /* ----------------------------------------------------- */

    if( currentIndex != clickedIndex ) {


      // console.log("🟩 do Slide ")
      // console.log("currentIndex= " + currentIndex)
      // console.log("clickedIndex= " + clickedIndex)


      /* ----------------------------------------------------- */
      /* Step 2: Do Push Slide
      /* ----------------------------------------------------- */

      // Async Await ... do Push Slide & if resolve than u allow to update currentIndex

      doPushSlide( body_slides, currentIndex, clickedIndex )


      /* ----------------------------------------------------- */
      /* Step 3: Update new Current Index
      /* ----------------------------------------------------- */

      /*
          ⚠️ Vielleicht braust du das garnicht
          reminder:
          after do push slide we allow to update new current index
          because without async / promise
      */

        currentIndex = clickedIndex;

      // setTimeout(() => {



      // }, 2000)




    }







    // if index -1 do no slide because u clicked the same index






    /* ------------------------------------ */
    /* Async Await Solution
    /* ------------------------------------ */

    // Wait of new 'new current index' result
    // active_index_header_body_link = goToSlide( body_slides, active_index_header_body_link, clickedIndex )



    /* ------------------------------------ */
    /* Timeout Solution
    /* ------------------------------------ */

    // active_index_header_body_link = goToSlide( body_slides , active_index_header_body_link , clickedIndex );

    // setTimeout(() => {

    //    console.log("(header-body.js) | active_index = " + active_index_header_body_link )

    // }, 2000);


  } )
}


/* ----------------------------------------------------------------- */
/* Async Function
/* ----------------------------------------------------------------- */

async function async_go_to_slide( content_slides, currentIndex, clickedIndex ) {

  console.log("async process > go to slide ... ➡️")

  const new_current_index = await goToSlide( content_slides, currentIndex, clickedIndex );

  console.log("async process > go to slide | Finished 🛑")

  console.log("(header-body.js) | active_index = " + new_current_index )

  return new_current_index;

}
