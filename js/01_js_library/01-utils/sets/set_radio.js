console.log("🟨 set_radio.js")


/* ----------------------------------------------------------------- */
/* Set | First Radio if any sets
/* ----------------------------------------------------------------- */

function set_first_radio_by_any_sets( radios_name_group ) {

  // console.log("🦧 set_first_radio_by_any_sets: ")

  // Step 0:
  // default check if radios exist
  if ( exist_radios( radios_name_group ) == false ) {

    console.log("🟥 radios dont exists")
    return -1;

  }

  // Step 1:
  // if any radio is checked,
  // than set the first one
  // console.log(" Set Modus")

  const set_first_radio = document.querySelectorAll(`input[name='${radios_name_group}']`)[0];
  set_first_radio.checked = true;

}

/* ----------------------------------------------------------------- */
/* Set | Radio Index
/* ----------------------------------------------------------------- */

function set_radio( radioElement ) {

  radioElement.checked = true;

}
