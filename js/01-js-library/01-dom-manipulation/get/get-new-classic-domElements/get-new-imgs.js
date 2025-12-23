// console.log("🟨 get-new-imgs.js")


/* ----------------------------------------------------------------------------------- */
/* Get New | Img | CSS Class
/* ----------------------------------------------------------------------------------- */

  async function get_new_imgClass( imgPath, cssClass ) {

    var newImg = document.createElement('img');

      newImg.setAttribute('src', imgPath );

      newImg.setAttribute('alt', 'img');

      if( cssClass != undefined ) {

          newImg.classList.add( cssClass )
      }

      return new Promise(resolve => {
        resolve( newImg );
      })

  }

/* ----------------------------------------------------------------------------------- */
/* Get New | Img
/* ----------------------------------------------------------------------------------- */

async function get_new_img( imgPath ) {

   var newImg = document.createElement('img');

    newImg.setAttribute('src', imgPath );

    newImg.setAttribute('alt', 'img');

    return new Promise(resolve => {
      resolve( newImg );
    })

}
