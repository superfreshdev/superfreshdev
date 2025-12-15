// console.log("🟨 add-layout-domElements-to.js")


/* ------------------------------------------------------------------- */
/* Add | Header Img Text Append To
/* ------------------------------------------------------------------- */

  async function add_headerImgText_append_to( imgPath, imgClass, divText, addPoint ) {


    // console.log("➡️ add_headerImgText_append_to()")

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
      // Add Final "newHeader" to "addPoint"
      /* -------------------------------------- */

      addPoint.appendChild( newHeader )


      return new Promise(resolve => {
        resolve();
      })


  }
