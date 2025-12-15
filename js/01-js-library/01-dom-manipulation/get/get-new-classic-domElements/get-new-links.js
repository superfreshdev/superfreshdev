// console.log("🟨 get-new-links.js")



/* ----------------------------------------------------------------------------------- */
/* Get New | Link | linkPath
/* ----------------------------------------------------------------------------------- */

function get_new_link_by_onlyPath( linkPath ) {

    var newLink = document.createElement('a');
    var linkTextNode = document.createTextNode('Link');

    // add css padding for better layout
    newLink.style.padding = "0 6px";

    newLink.appendChild( linkTextNode );

    // set attribut src path
    newLink.setAttribute( 'href' , linkPath );

    // set attribut target for new tab
    newLink.setAttribute( 'target' , '_blank' );

    return newLink;

}

/* ----------------------------------------------------------------------------------- */
/* Get New | Link | linkPath, text
/* ----------------------------------------------------------------------------------- */


function get_new_link_pathText( linkPath, text  ) {

    var newLink = document.createElement('a');
    var linkTextNode = document.createTextNode('Link');

    // add css padding for better layout
    newLink.style.padding = "0 6px";

    newLink.appendChild( linkTextNode );

    // set attribut src path
    newLink.setAttribute( 'href' , linkPath );

    // set attribut target for new tab
    newLink.setAttribute( 'target' , '_blank' );

    return newLink;

}
