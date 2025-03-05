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

// IT Docs Counter 
var spanItDocsDone = document.getElementById('js-counter-it-doc-done');
var spanItDocsInProgress = document.getElementById('js-counter-it-doc-in-progress');
var spanItDocsComingSoon = document.getElementById('js-counter-it-doc-coming-soon');


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
    setEnglishFormattedDate( day, month, year )

    yearBodyFooter.innerText = getYear();
    
    /* ------------------------------------------------------------------- */
    /* Set Counted Number of It Docs, done, in progress, coming soon
    /* ------------------------------------------------------------------- */

    spanItDocsDone.innerText = document.querySelectorAll('#open-close-smooth-done-it-docs .it-doc-item-card').length;
    spanItDocsInProgress.innerText =  document.querySelectorAll('#open-close-smooth-in-progress-it-docs .it-doc-item-card').length;
    spanItDocsComingSoon.innerText =  document.querySelectorAll('#open-close-smooth-coming-soon-it-docs .it-doc-item-card').length;

    
} )

   

/* ------------------------------------------------------------ */
/* Execute 
/* ------------------------------------------------------------ */