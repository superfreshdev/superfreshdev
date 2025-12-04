// console.log("🟨 get_new_elements.js")


/* ----------------------------------------------------------------- */
/* 🟩 Get New Label
/* ----------------------------------------------------------------- */

function get_new_label( for_txt, css_class ) {

  // console.log("### get_new_label")

  const new_label = document.createElement("label");

  new_label.setAttribute("for", for_txt);
  new_label.setAttribute("class", css_class);

  return new_label;

}

/* ----------------------------------------------------------------- */
/* 🟩 Get New Radio
/* ----------------------------------------------------------------- */

function get_new_radio( id, name ) {

  // console.log("### get_new_radio")

  const new_radio = document.createElement("input");

  new_radio.setAttribute("type", "radio");
  new_radio.setAttribute("id", id);
  new_radio.setAttribute("name", name);

  return new_radio;

}

/* ----------------------------------------------------------------- */
/* 🟥 Get New Div
/* ----------------------------------------------------------------- */


/* ----------------------------------------------------------------- */
/* 🟥 Get New Div ( class, text )
/* ----------------------------------------------------------------- */
