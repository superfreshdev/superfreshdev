// console.log("🟨 update_dom_elements.js")



/* ----------------------------------------------------------------- */
/* Update | Text to Element
/* ----------------------------------------------------------------- */

function update_text_to_element ( text, element ) {

  element.innerText = text;

}


/* ----------------------------------------------------------------- */
/* Update | Text
/* ----------------------------------------------------------------- */

// ❌ old
function update_text( textElement, text ) {

  textElement.innerText = text;

}

/* ----------------------------------------------------------------- */
/* Update | Img Src + Css Class
/* ----------------------------------------------------------------- */

function update_img_src_and_class( imgElement, path, cssClass ) {

  imgElement.src = path;

  imgElement.style.height = cssClass;

}
