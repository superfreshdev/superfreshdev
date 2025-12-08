// console.log('🟡:js-library/dom-element-operations/create-dom-elements/create-divs.js')


/* ----------------------------------------------------------------------------------- */
/* Create Div ( only text )
/* ----------------------------------------------------------------------------------- */

function createDivText( text ) {

    var newDiv = document.createElement('div');
    var newTextNode = document.createTextNode( text );

    // add text to div
    newDiv.appendChild( newTextNode );

    return newDiv;

}

/* ----------------------------------------------------------------------------------- */
/* Create Div ( class name )
/* ----------------------------------------------------------------------------------- */

function createDivClass( className) {

    var newDiv = document.createElement('div');

    // add class name
    newDiv.classList.add( className );

    return newDiv;

}

function get_new_created_divClass( className) {

    var newDiv = document.createElement('div');

    // add class name
    newDiv.classList.add( className );

    return newDiv;

}

/* ----------------------------------------------------------------------------------- */
/* Create Div ( class name & text )
/* ----------------------------------------------------------------------------------- */

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


// 🟣 Auslagern -> create-header.js

/* ----------------------------------------------------------------------------------- */
/* Create Header ( class name & text )
/* ----------------------------------------------------------------------------------- */

function createHeaderClassText( className, text ) {

    var newHeader = document.createElement('header');

    if( className != undefined || text == "" ) {

        // create new text node
        var newTextNode = document.createTextNode( text );

        // add text node to header
        newHeader.appendChild( newTextNode );

        // add class name
        newHeader.classList.add( className );

        return newHeader;

    } else {

        console.log("🔴: Dont allow to create Header Class Dom Element without giving className or text ");

        return -1;
    }

}

/* ----------------------------------------------------------------------------------- */
/* Create Header ( class name )
/* ----------------------------------------------------------------------------------- */


function createHeaderClass( className) {

    var newHeader = document.createElement('header');

    // add class name
    newHeader.classList.add( className );

    return newHeader;

}

/* ----------------------------------------------------------------------------------- */
/* Create Header ( wihtout anything )
/* ----------------------------------------------------------------------------------- */

// function createHeaderClass( ) {

//     var newHeader = document.createElement('header');

//     return newHeader;

// }
