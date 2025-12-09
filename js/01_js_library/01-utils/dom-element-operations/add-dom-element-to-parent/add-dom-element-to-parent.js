// console.log('🟡:js-library/dom-element-operations/add-dom-element-to-parent/add-dom-element-to-parent.js')



/* ----------------------------------------------------------------------------------- */
/* Add new Dom Element to Parent Dom Element
/* ----------------------------------------------------------------------------------- */

function addNewDomElementToParent( newDomElement, domParentElement ) {

  domParentElement .appendChild( newDomElement );

}

/* ------------------------------------------------------------------- */
/* ❌❌❌ Muss gelöscht werden, wo es verwendet wird
/* ------------------------------------------------------------------- */

function addDomElementToParent( domElement, domParent ) {

    domParent.appendChild( domElement );

}

/* ------------------------------------------------------------------- */
/* Async Create | Header | Img & ( Div + Text )
/* ------------------------------------------------------------------- */

  async function async_create_header_img_divText_to( imgPath, imgClass, divText, parent ) {

          console.log("➡️ async_create_header_img_div_to()")


          // create header
          var newHeader = document.createElement("header");

          // create child | img
          var newImg = document.createElement("img");
          newImg.setAttribute("src", imgPath);
          newImg.setAttribute("class", imgClass);
          newImg.setAttribute("alt", "img");

          // Add "newImg" to "newHeader"
          newHeader.appendChild( newImg )

          // create child | div
          var newDiv = document.createElement("div");
          newDiv.innerText = divText;

          // Add "newDiv" to "newHeader"
          newHeader.appendChild( newDiv)

          /* -------------------------------------- */
          // Add Final "newHeader" to parent
          /* -------------------------------------- */

          parent.appendChild( newHeader )


          return new Promise(resolve => {
            resolve();
          })

  }
