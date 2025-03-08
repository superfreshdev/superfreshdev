console.log('[🟡|js-library| ➡️ lib-set-dom-elements.js]')

/* ----------------------------------------------------------------------------------- */
/* ➡️ SET | Functions 
/* ----------------------------------------------------------------------------------- */


/* --------------------------------------------------------------------- */
/* SET | Attribute 
/* --------------------------------------------------------------------- */

function setValueAttribute( strAttrName, strAttrValue, domElement ) {

    // ⚠️ Not Secure Routine programmed > to do in future

    domElement.setAttribute( strAttrName, strAttrValue );

}

/* --------------------------------------------------------------------- */
/* SET | Text
/* --------------------------------------------------------------------- */

function setTextToDomElement( strText , domElement ) {

    // ⚠️ Not Secure Routine programmed > to do in future
    domElement.innerText = strText;

}



/* --------------------------------------------------------------------- */
/* SET | Default Checked by Index 0
/* --------------------------------------------------------------------- */

function setDefaultCheckedElement( checkedElements ) {

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

        return '🔴:Error:[setDefaultCheckedElement()]: given element is null/undefined'

    }

}


