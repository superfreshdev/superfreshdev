// console.log("🟨 get-new-imgs.js")


/* ----------------------------------------------------------------------------------- */
/* Get New | Img | CSS Class
/* ----------------------------------------------------------------------------------- */

function get_new_imgClass( imgPath, cssClass ) {

   var newImg = document.createElement('img');

    newImg.setAttribute('src', imgPath );

    newImg.setAttribute('alt', 'img');

    if( cssClass != undefined ) {

        newImg.classList.add( cssClass )
    }

    return newImg;

}
