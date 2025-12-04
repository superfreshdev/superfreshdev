// console.log("🟨 add_dom_elements.js")


/* ----------------------------------------------------------------- */
/* Add New | Radio to
/* ----------------------------------------------------------------- */

function add_new_radio_to( id, name, add_point ) {

  // console.log("### add_radio_element_to")

  const new_radio = document.createElement("input");

  new_radio.setAttribute("type", "radio");
  new_radio.setAttribute("id", id);
  new_radio.setAttribute("name", name);

  // add to add point at the beginning
  add_point.prepend(new_radio)

}

/* ----------------------------------------------------------------- */
/* Add | Div | to
/* ----------------------------------------------------------------- */

function add_new_div_to( css_id, css_class, title, add_point ) {

  // console.log("### add_new_div_to")

  const new_div = document.createElement("div");

  new_div.setAttribute("id", css_id);
  new_div.setAttribute("class", css_class);

  new_div.innerText = title;

  // add new div "append" to add_point
  add_point.appendChild( new_div );

}

/* ----------------------------------------------------------------- */
/* Add | Img | to
/* ----------------------------------------------------------------- */

function add_new_img_to( img_src, css_id, css_class, add_point ) {

  // console.log("### add_new_div_to")

  const new_img = document.createElement("img");

  new_img.setAttribute("src", img_src);
  new_img.setAttribute("id", css_id);
  new_img.setAttribute("class", css_class);
  new_img.setAttribute("alt", "img");

  // add new div "append" to add_point
  add_point.appendChild( new_img );

}

/* ----------------------------------------------------------------- */
/* Add Element To Add Point ( append, prepend )
/* ----------------------------------------------------------------- */

// append
function add_element_to_add_point_append( newElement, add_point ) {

  add_point.appendChild( newElement );

}

// prepend
function add_element_to_add_point_prepend( newElement, add_point ) {

  add_point.prepend( newElement );

}
