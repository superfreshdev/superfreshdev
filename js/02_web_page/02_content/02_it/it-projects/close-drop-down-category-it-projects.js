// console.log("🟨 close-drop-down-category-it-projects.js")


/* ----------------------------------------------------------------- */
/*  DOM Elements
/* ----------------------------------------------------------------- */

// checkbox selected category ( open,close )
var chk_selected_category_it_projects = document.getElementById("chk-selected-category-it-projects");

// radios category it projects ( top, more )
var radios_category_it_projects = [

  document.getElementById("radio-category-top-it-projects"),
  document.getElementById("radio-category-more-it-projects")

]

/* ----------------------------------------------------------------- */
/* Events
/* ----------------------------------------------------------------- */

// unset checkbox if radio state changed

for( let i=0; i < radios_category_it_projects.length; i++ ) {

  radios_category_it_projects[i].addEventListener( "change" , ()=> {

    // console.log("🚀 Changed = " + i )
    chk_selected_category_it_projects.checked = false;

  })



}
