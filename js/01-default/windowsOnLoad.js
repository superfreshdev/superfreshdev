console.log('[🟡|default] = windowsOnLoad.js')

/* ------------------------------------------------------------ */
/* Variables
/* ------------------------------------------------------------ */ 

// About Page: Actually Date Elements
var day = document.getElementById('js-txt-day');
var month = document.getElementById('js-txt-month');
var year = document.getElementById('js-txt-year');

// Body Footer: Year Element 
var yearBodyFooter = document.getElementById('js-txt-year-copyright');

/* ------------------------------------------------------------ */
/* Functions
/* ------------------------------------------------------------ */ 

/* ------------------------------------------------------------ */
/* Events  
/* ------------------------------------------------------------ */ 

window.addEventListener( 'load', ()=> {

    /* ---------------------------------------------- */
    /* Set Actually Date About
    /* ---------------------------------------------- */
    // setEnglishFormattedDate( day, month, year )

    yearBodyFooter.innerText = getYear();
    
    
} )

   

/* ------------------------------------------------------------ */
/* Execute 
/* ------------------------------------------------------------ */