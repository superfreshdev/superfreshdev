// console.log("🟨 radio_checks.js")


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
/* Get | Setted Radio Index
/* ----------------------------------------------------------------- */

function get_setted_radio_index( radios ) {

  for( let i=0; i < radios.length; i++ ) {


    if( radios[i].checked == true ) {
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
