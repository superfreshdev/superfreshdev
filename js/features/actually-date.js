console.log('🟡 actually-date.js')

/* ------------------------------------------------------------ */
/* Variables
/* ------------------------------------------------------------ */ 

/* ------------------------------------------------------------ */
/* Functions
/* ------------------------------------------------------------ */ 

function getEnglishFormattedDate( dayEl, monthEl, yearEl ) {

    const date = new Date();
    // console.log('📆: ' + date)

    // set day 
    dayEl.innerText = date.getDate() + getEnglishDaySuffix( date.getDate() );
    // set month ( 0 - 11 )
    monthEl.innerText = getEnglishShortMonthName( date.getMonth() );
    // set year
    yearEl.innerText = date.getFullYear();
}


/* ------------------------------------------------------------ */
/* Events  
/* ------------------------------------------------------------ */ 

/* ------------------------------------------------------------ */
/* Execute 
/* ------------------------------------------------------------ */

