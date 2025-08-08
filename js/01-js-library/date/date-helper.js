console.log('🟡(js-lib) | date-helper.js]')


/* ------------------------------------------------------------------ */
/* GET | Year
/* ------------------------------------------------------------------ */

function getYear() {

    return new Date().getFullYear();
}

/* ------------------------------------------------------------------ */
/* Update | Short Actually Date Stamp
/* ------------------------------------------------------------------ */

function updateShortDateStamp( dayElement, monthElement, yearElement ) {

  const date = new Date();
  // console.log('📆: ' + date)

  // set day ( nr + string suffix )
  dayElement.innerText = date.getDate() + getEnglishDaySuffix( date.getDate() );

  // set month ( 0 - 11 )
  monthElement.innerText = getEnglishShortMonthName( date.getMonth() );

  // set year
  yearElement.innerText =  date.getFullYear();

}
