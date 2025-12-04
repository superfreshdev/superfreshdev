// console.log("🟨 update_dom_elements.js")


/* ----------------------------------------------------------------- */
/* Update | Text
/* ----------------------------------------------------------------- */

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
