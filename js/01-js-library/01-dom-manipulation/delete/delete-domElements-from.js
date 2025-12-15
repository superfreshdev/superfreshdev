// console.log("🟨 delete-domElements-from.js")



  /* ----------------------------------------------------------------------------------- */
  /* Delete | Dom Elements from
  /* ----------------------------------------------------------------------------------- */

    // single
    async function delete_domElement_from( deleteSelector, parent ) {

      // console.log("➡️ delete_domElement_from()")
      // console.log("deleteSelector = " + deleteSelector )

      var deleteElement = parent.querySelector( deleteSelector )

      // Check if exist, if yes than delete
      if( deleteElement != null ) {

        // console.log("🟥 Delete , because it exist")
        deleteElement.remove();

      }

       return new Promise(resolve => {
          resolve();
        })

    }

    // all
    async function delete_domElements_from( deleteSelector, parent ) {

      // find all dom elements to delete
      var selectorElements = parent.querySelectorAll( deleteSelector )

      // count all delete elements
      var deleteElements = selectorElements.length;

      // delete only by minimum found 1
      if( deleteElements > 0 ) {

        console.log( "🔥 to delete = " + deleteElements )

        for( let i=0; i < deleteElements; i++ ) {

          console.log( i + ": Delete= " + selectorElements[i].innerHTML )

          selectorElements [i].remove();
        }

      } else {

        console.log( "🌵 nothing to delete = " + deleteElements )

      }

      return new Promise(resolve => {
          resolve();
        })

    }


  /* ----------------------------------------------------------------------------------- */
  /* Delete | Img from Parent
  /* ----------------------------------------------------------------------------------- */

  async function delete_imgElement_from( parent ) {

    // look for img and remove
    // console.log("➡️ HTML-Element = " + parent )
    var delete_img_Element = parent.querySelector("img");

    // delete img
    if( delete_img_Element != null ) {

        // console.log("❌ Delete IMG ")
        delete_img_Element.remove();

    }

    return new Promise(resolve => {
        resolve();
      })

  }
