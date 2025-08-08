//console.log('[🟡|default| ➡️ windowsOnLoad.js]')

/* ------------------------------------------------------------ */
/* DOM Elements
/* ------------------------------------------------------------ */

    /* --------------------------------------------------- */
    /* Date | About Welcome
    /* --------------------------------------------------- */

    var day = document.getElementById('js-txt-day');
    var month = document.getElementById('js-txt-month');
    var year = document.getElementById('js-txt-year');


/* ------------------------------------------------------------ */
/* Event ( Windows on Load )
/* ------------------------------------------------------------ */

// reminder: by every reload it will execute this event

window.addEventListener( 'load', ()=> {


    /* ---------------------------------------------- */
    /* Date | About Welcome
    /* ---------------------------------------------- */

    updateShortDateStamp( day, month, year )


} )
