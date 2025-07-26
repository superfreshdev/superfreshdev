// console.log('🟡:js-library/dom-element-operations/create-dom-elements/create-imgs.js')


/* ----------------------------------------------------------------------------------- */
/* Create Img ( img path & class name )
/* ----------------------------------------------------------------------------------- */

function createImg( imgPath, className ) {

    var newImg = document.createElement('img');

    newImg.setAttribute('src', imgPath );

    newImg.setAttribute('alt', 'img');

    if( className != undefined ) {

        newImg.classList.add( className )
    }

    return newImg;

}
