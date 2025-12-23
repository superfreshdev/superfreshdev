// console.log("🟨 get-info-from-domElements.js")



/* ----------------------------------------------------------------- */
/* GET | Length from Dom Elements
/* ----------------------------------------------------------------- */

async function get_length_from_domElements( domElements ) {

  // if not changed, not exists -1
  var countDomElements = "-1";

  if( domElements.length != null && domElements.length != undefined ) {

    countDomElements = domElements.length;

  }

  return new Promise(resolve => {
        resolve(countDomElements);
      })

}

/* ----------------------------------------------------------------- */
/* Get | Checked Index from Checked Elements (radio,checkbox)
/* ----------------------------------------------------------------- */

async function get_checked_index_from( checkedElements ) {

  var checked_index = -1;

  for( let i=0; i < checkedElements.length; i++ ) {


    if( checkedElements[i].checked == true ) {

      checked_index = i;
      // jump out from loop
      i = checkedElements.length;

    }

  }

   return new Promise(resolve => {
        resolve(checked_index);
      })

}

/* ----------------------------------------------------------------- */
/* Get | Checked Index Otherwise IndexZero
/* ----------------------------------------------------------------- */

async function get_checked_index_otherwise_get_index_zero( checkedElements ) {

  // not changed, default index = 0
  var checked_index = 0;

  for( let i=0; i < checkedElements.length; i++ ) {


    if( checkedElements[i].checked == true ) {

      checked_index = i;
      // jump out from loop
      i = checkedElements.length;

    }

  }

   return new Promise(resolve => {
        resolve(checked_index);
      })

}
