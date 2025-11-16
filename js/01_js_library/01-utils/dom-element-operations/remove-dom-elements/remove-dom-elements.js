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
