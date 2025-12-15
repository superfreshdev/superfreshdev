// console.log("🟨 set-domElements.js")


/* --------------------------------------------------------------------- */
/* SET | Attribute | to Dom Element
/* --------------------------------------------------------------------- */

async function set_attribute_to( attrName, attrValue, domElement ) {

  domElement.setAttribute( attrName, attrValue );

   return new Promise(resolve => {
          resolve();
        })

}

/* --------------------------------------------------------------------- */
/* SET | Text | to Dom Element
/* --------------------------------------------------------------------- */

async function set_text_to_domElement( domElement, newText ) {

  domElement.innerText = newText;

  return new Promise(resolve => {
          resolve();
        })

}

/* ----------------------------------------------------------------- */
/* Set | Radio Element Checked
/* ----------------------------------------------------------------- */

async function set_radioElement_checked( radioElement ) {

  radioElement.checked = true;

   return new Promise(resolve => {
          resolve();
        })

}

/* ----------------------------------------------------------------- */
/* Set | Radio Element Checked by Index
/* ----------------------------------------------------------------- */

async function set_radioElement_checked_by_index( radioElement, index ) {

  radioElement[index].checked = true;

   return new Promise(resolve => {
          resolve();
        })

}

/* --------------------------------------------------------------------- */
/* SET | Index Zero Checked by Any Checked
/* --------------------------------------------------------------------- */

async function set_indexZero_checked_by_any_checked( checkedElements ) {

   var foundChecked = 0

    if( checkedElements.length != null && checkedElements.length != undefined ) {


        for( let i=0; i < checkedElements.length; i++ ) {

            if( checkedElements[i].checked == true ) {

                // manuel html checked was found & exit
                i = checkedElements.length;
                foundChecked = 1;
            }
        }

        if( foundChecked == 0 ) {

            // not manuel html checked found , set checked default index 0
            checkedElements[0].checked = true;
        }


    } else {

        return '🔴: given element is null/undefined'

    }

    return new Promise(resolve => {
          resolve();
        })

}
