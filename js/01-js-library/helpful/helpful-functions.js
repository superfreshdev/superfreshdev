//console.log('[🟡|js-library| ➡️ helpful-functions.js]')

/* ------------------------------------------------------------------ */
/* SET | Functions 
/* ------------------------------------------------------------------ */

function getAudioObject ( strAudioSrc  ) {

    // ⚠️ - acutally not secure developed 
    return new Audio( strAudioSrc )

}

function setAttrSrc( element , strSrc ) {

    // ⚠️ - acutally not secure developed 
    element.setAttribute('src',strSrc);
}


/* ------------------------------------------------------------------ */
/* GET | Functions 
/* ------------------------------------------------------------------ */

function getYear() {
    
    return new Date().getFullYear();
}


/* ------------------------------------------------------------------ */
/* printTwoFormattedNumber
/* ------------------------------------------------------------------ */

function printTwoFormattedNumber( number ) {

    var twoFormattedNumber = "";

    if( number <= 9 ) {

        twoFormattedNumber = "0"+number;
        return twoFormattedNumber;

    }

    return number;


}

