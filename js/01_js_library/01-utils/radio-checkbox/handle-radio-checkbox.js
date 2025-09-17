//console.log('[🟡|js-library| ➡️ handle-radio-checkbox.js]')


/* ----------------------------------------------------------------- */
/*  Functions
/* ----------------------------------------------------------------- */

/* ---------------------------------------------- */
/* Get Index of Unset Radio
/* ---------------------------------------------- */

function getUnsetRadioIndex( radios ) {

  // console.log( "Length(radios) = " + radios.length )

  for( let i=0; i < radios.length; i++ ) {

    if( radios[i].checked == true ) {
      return i;
    }

  }

  // no setted index found
  return -1;

}


/* ---------------------------------------------- */
/* Unset Radio
/* ---------------------------------------------- */

function unsetRadio( radios ) {

  // console.log("radio.length = " + radios.length )

  for( let i=0; i < radios.length; i++ ) {

    if( radios[i].checked == true ) {

      // console.log("Index = " + i)
      radios[i].checked = false;

      return;

    }

  }

  return -1;

}
