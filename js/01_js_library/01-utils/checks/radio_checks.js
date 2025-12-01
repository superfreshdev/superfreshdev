console.log("🟨 radio_checks.js")


// 🟣 Exist
/* ----------------------------------------------------------------- */
/* Check | Exist Given Radios
/* ----------------------------------------------------------------- */

function exist_radios( radio_name_group ) {

  // create radio name dummy to find
  var radios = document.querySelectorAll(`input[name='${radio_name_group}']`);

  if( radios.length > 0 ) {
    // console.log("🟩 Exist ")
    return true;

  } else {
    // console.log("🟥 Dont Exist ")
    return false;
  }

}

/* ----------------------------------------------------------------- */
/* Check | G
/* ----------------------------------------------------------------- */



/* ----------------------------------------------------------------- */
/* Get | Setted Radio Index
/* ----------------------------------------------------------------- */

function get_setted_radio_index( radio_name ) {

  var radio_elements = document.querySelectorAll(`input[name='${radio_name}']`);

  for( let i=0; i < radio_elements.length; i++ ) {


    if( radio_elements[i].checked == true ) {
      // console.log("🟩 Checked Index = " + i)
      return i;

    }

  }

  // not exist
  return -1;

}


/* ----------------------------------------------------------------- */
/* Set | Radio Index
/* ----------------------------------------------------------------- */
