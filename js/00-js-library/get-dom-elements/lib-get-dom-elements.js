console.log('[🟡|js-library| ➡️ lib-get-dom-elements.js]')


/* ----------------------------------------------------------------------------------- */
/* ⬅️ GET | Functions
/* ----------------------------------------------------------------------------------- */



/* --------------------------------------------------------------------- */
/* GET | Checked Index 
/* --------------------------------------------------------------------- */

function getCheckedIndex( domElements ) {

    var checkedIndex = 0

    if( domElements.length != null && domElements.length != undefined ) {


        for( let i=0; i < domElements.length; i++ ) {

            if( domElements[i].checked == true ) {

                // checked index was found
                checkedIndex = i;
                // exit for loop 
                i = domElements.length;
            } 
        }

        return checkedIndex;

    
    } else {

        // domElements was not found 
        return -1;
    }

}