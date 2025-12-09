// console.log("🟨 remove-dom-elements.js")


/* ----------------------------------------------------------------- */
/*  Remove Img | in Element
/* ----------------------------------------------------------------- */

function remove_img_in_element( element ) {

  // look for img and remove
  // console.log("➡️ HTML-Element = " + element )
  var delete_img_Element = element.querySelector("img");

  // delete img
  if( delete_img_Element != null ) {

      console.log("❌ Delete IMG ")
      delete_img_Element.remove();

  }

}

/* ----------------------------------------------------------------- */
/*  Remove Element From Parent
/* ----------------------------------------------------------------- */

 function delete_element_from_parent( deleteElement_fromParent ) {

  console.log("➡️ delete_element_from_parent()")

  console.log("deleteElement_fromParent, = " + deleteElement_fromParent )


  // Check if exist, if yes than delete
  if( deleteElement_fromParent != null ) {

    console.log("🟥 Delete , because it exist")
    deleteElement_fromParent.remove();

  }

}
