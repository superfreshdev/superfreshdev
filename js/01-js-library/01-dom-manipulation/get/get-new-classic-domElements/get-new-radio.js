// console.log("🟨 get-new-radio.js")


/* ----------------------------------------------------------------- */
/* Get New | Radio
/* ----------------------------------------------------------------- */

async function get_new_radio( id, name, checkedState ) {

  // console.log("➡️ get_new_radio()")

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

  return new Promise(resolve => {
      resolve(new_radio);
  })

}
