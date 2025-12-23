// console.log("🟨 add-classic-domElements-to.js")


/* ----------------------------------------------------------------- */
/* Add New | Radio to (prepand)
/* ----------------------------------------------------------------- */

function add_new_radio_prepand_to( id, name, checkedState, addPoint ) {

  // console.log("➡️ add_new_radio_prepand_to()")

  const new_radio = document.createElement("input");

  // set checked state if was giving
  if( checkedState != "") {

    // checked only by given true
    if( checkedState === "true" ) {

      new_radio.setAttribute("checked","");

    }

  }

  new_radio.setAttribute("type", "radio");
  new_radio.setAttribute("id", id);
  new_radio.setAttribute("name", name);

  // add "new_radio" prepand to "addPoint"
  addPoint.prepend(new_radio)

}


/* ----------------------------------------------------------------- */
/* Add New | Div | Append To
/* ----------------------------------------------------------------- */

function add_new_div_append_to( cssId, cssClass, text, addPoint ) {

  // console.log("➡️ add_new_div_append_to()")

  const new_div = document.createElement("div");

  // optional
  if( cssId != "") {
    new_div.setAttribute("id", cssId);
  }

  // optional
  if( cssClass != "") {
     new_div.setAttribute("class", cssClass);
  }

  new_div.innerText = text;

  // add "new_div" append to "addPoint"
  addPoint.prepend(new_div)

}


/* ----------------------------------------------------------------- */
/* Add New | Img | Append To
/* ----------------------------------------------------------------- */

function add_new_img_append_to( imgSrc, cssId, cssClass, addPoint ) {

  // console.log("➡️ add_new_img_append_to()")

  const new_img = document.createElement("img");

  new_img.setAttribute("src", imgSrc);
  new_img.setAttribute("id", cssId);
  new_img.setAttribute("class", cssClass);
  new_img.setAttribute("alt", "img");

  // add "new_img" append to "addPoint"
  addPoint.appendChild( new_img );

}
