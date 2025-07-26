// console.log('🟡:js-library/dom-element-operations/create-dom-elements/create-links.js')


/* ----------------------------------------------------------------------------------- */
/* Create Link ( link path )
/* ----------------------------------------------------------------------------------- */

function createLink( linkPath ) {

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
