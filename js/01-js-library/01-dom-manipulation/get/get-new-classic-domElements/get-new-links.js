// console.log("🟨 get-new-links.js")



/* ----------------------------------------------------------------------------------- */
/* Get New | Link | linkPath
/* ----------------------------------------------------------------------------------- */

async function get_new_link_with_path( linkPath ) {

    var newLink = document.createElement('a');

    // set attribut src path
    newLink.setAttribute( 'href' , linkPath );

    // set attribut target for new tab
    newLink.setAttribute( 'target' , '_blank' );

    return new Promise(resolve => {
      resolve( newLink );
    })

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
