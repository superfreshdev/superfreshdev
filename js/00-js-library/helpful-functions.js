console.log('[🟡|js-library| ➡️ helpful-functions.js]')

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


