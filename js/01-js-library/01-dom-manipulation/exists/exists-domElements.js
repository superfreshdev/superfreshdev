// console.log("🟨 exists-domElements.js")


/* ----------------------------------------------------------------- */
/* Exist | Radios
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
