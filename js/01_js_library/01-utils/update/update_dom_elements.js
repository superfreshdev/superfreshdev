// console.log("🟨 update_dom_elements.js")


/* ----------------------------------------------------------------- */
/* Update | Text
/* ----------------------------------------------------------------- */

function update_text( textElement, text ) {

  textElement.innerText = text;

}

/* ----------------------------------------------------------------- */
/* Update | Img Src & Size by CSS Class Selector
/* ----------------------------------------------------------------- */

function update_img_src_and_size( imgElement, path, cssImgSize ) {

  imgElement.src = path;

  imgElement.style.height = cssImgSize;

}
