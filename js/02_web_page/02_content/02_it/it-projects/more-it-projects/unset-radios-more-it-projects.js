// console.log("🟨 unset-radios-more-it-projects.js")


/* ----------------------------------------------------------------- */
/*  DOM Elements
/* ----------------------------------------------------------------- */

// checkbox it docs ( open,close )
var chk_more_it_projects = document.getElementById("chk-more-it-projects");

// radios more it projects ( exercises, leetcode, mini-projects )
var radios_more_it_projects = [

  document.getElementById("radio-more-it-project-exercices"),
  document.getElementById("radio-more-it-project-leetcode"),
  document.getElementById("radio-more-it-project-mini-projects")
]



/* ----------------------------------------------------------------- */
/* Events
/* ----------------------------------------------------------------- */

// unset radio to unshown content
chk_more_it_projects.addEventListener( "change" , ()=> {

  // console.log("🚀 Changed = ")

  /* ------------------------------------------------------------------------------- */
  /* Unset Radios IT More Projects ( exercises, leetcode, mini-projects )
  /* ------------------------------------------------------------------------------- */

  for( let i=0; i < radios_more_it_projects.length; i++ ) {

    // console.log("Runtime = " + i )

    if( radios_more_it_projects[i].checked == true ) {

      // alert(" Index = checked = " + i)

      // unset checked radio
     radios_more_it_projects[i].checked = false;

    }

  }

})
