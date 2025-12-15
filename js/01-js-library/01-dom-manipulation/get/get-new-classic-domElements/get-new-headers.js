// console.log("🟨 get-new-headers.js")


/* ----------------------------------------------------------------------------------- */
/* Create Header ( class name )
/* ----------------------------------------------------------------------------------- */

function get_new_headerClass( cssClass ) {

    var newHeader = document.createElement('header');

    // add class name
    newHeader.classList.add( cssClass );

    return newHeader;

}
