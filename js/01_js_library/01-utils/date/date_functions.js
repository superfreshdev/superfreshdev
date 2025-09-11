console.log('🟨(js-lib|utils|date) | date_functions.js]')


/* ------------------------------------------------------------------------------- */
/* Functions
/* ------------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------------- */
/* getYear
/* > print the full year, eg. 2025
/* ------------------------------------------------------------------------------- */

function getYear() {

    return new Date().getFullYear();
}

/* ------------------------------------------------------------------------------- */
/* printShortDateStyle
/* > print 3 Dom Elements by e.g 1st Mar 2025
/* ------------------------------------------------------------------------------- */

function printShortDateStyle( dayElement, monthElement, yearElement ) {

  const date = new Date();
  // console.log('📆: ' + date)

  // set day ( nr + string suffix )
  dayElement.innerText = date.getDate() + getEnglishDaySuffix( date.getDate() );

  // set month ( 0 - 11 )
  monthElement.innerText = getEnglishShortMonthName( date.getMonth() );

  // set year
  yearElement.innerText =  date.getFullYear();

}
