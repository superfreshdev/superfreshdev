//console.log('[🟡|js-library|createDomElements| ➡️ create-Div-Elements.js]')

/* ----------------------------------------------------------------------------------- */
/* Create DOM Element 
/* ----------------------------------------------------------------------------------- */

function createDivText( text ) {

    var newDiv = document.createElement('div');
    var newTextNode = document.createTextNode( text );

    // add text to div 
    newDiv.appendChild( newTextNode );

    return newDiv;
   
}

function createDivClassText( className, text ) {

    var newDiv = document.createElement('div');

    if( text != undefined ) {

        var newTextNode = document.createTextNode( text );
        // add text to div 
        newDiv.appendChild( newTextNode );
    }
    

    // add class name 
    newDiv.classList.add( className );

    return newDiv;

}

function createImg( imgPath, className ) {

    var newImg = document.createElement('img');

    newImg.setAttribute('src', imgPath );

    newImg.setAttribute('alt', 'img');

    if( className != undefined ) {

        newImg.classList.add( className )
    }

    return newImg;

}


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


/* ----------------------------------------------------------------------------------- */
/* Add DomElement to Parent Element
/* ----------------------------------------------------------------------------------- */


function addDomElementToParent( domElement, domParent ) {

    domParent.appendChild( domElement );

}