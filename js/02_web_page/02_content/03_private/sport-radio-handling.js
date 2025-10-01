// console.log("🟨 sport-radio-handling.js")


/* ----------------------------------------------------------------- */
/*  DOM Elements
/* ----------------------------------------------------------------- */

// checkbox sport content selected
var chk_sport_content = document.getElementById("chk-sport-category-selected-private");

// radios sport content categories ( choose 1, choose 2 )
var radios_sport_content_categories = [

  document.getElementById("radio-sport-category-challenges"),
  document.getElementById("radio-sport-category-training-plans"),

]



/* ----------------------------------------------------------------- */
/* Function Events
/* ----------------------------------------------------------------- */

// close nav by setting new radio

for( let i=0; i < radios_sport_content_categories.length; i++ ) {

  // Add Change Listener to unset sub it docs
  radios_sport_content_categories[i].addEventListener( "change" , ()=> {

    // close nav
    chk_sport_content.checked = false;

  });


}


/* ----------------------------------------------------------------- */
/* Events ⁉️ Brauch ich das ????
/* ----------------------------------------------------------------- */

// unset radio to unshown content
// chk_it_docs.addEventListener( "change" , ()=> {

//   // console.log("🚀 Changed = ")

//   /* --------------------------------------------------------------- */
//   /* [1/2] | Unset Radios It Docs ( frontend, backend, ai )
//   /* --------------------------------------------------------------- */

//   for( let i=0; i < radios_it_docs.length; i++ ) {

//     // console.log("Runtime = " + i )

//     if( radios_it_docs[i].checked == true ) {

//       // alert(" Index = checked = " + i)

//       // unset checked radio
//       radios_it_docs[i].checked = false;

//     }

//   }

//   /* --------------------------------------------------------------- */
//   /* [2/2] | Unset Radios Sub It Docs ( from frontend, backend )
//   /* --------------------------------------------------------------- */

//   for( let i=0; i < radios_sub_it_docs.length; i++ ) {

//     // console.log("Runtime = " + i )

//     if( radios_sub_it_docs[i].checked == true ) {

//       // alert(" Index = checked = " + i)

//       // unset checked radio
//       radios_sub_it_docs[i].checked = false;

//     }

//   }


// })
