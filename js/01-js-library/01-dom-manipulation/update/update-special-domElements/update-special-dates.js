// console.log("🟨 update-special-dates.js")


/* ----------------------------------------------------------------- */
/* 🟥 Update | Date Element by 3 Elements (day,month,yera)
/* > Update 3 Dom Elements by e.g 1st Mar 2025
/* ----------------------------------------------------------------- */

  async function update_dateElement_by_shortStyle( dayElement, monthElement, yearElement ) {


      const date = new Date();
      // console.log('📆: ' + date)

      // set day ( nr + string suffix )
      dayElement.innerText = date.getDate() + get_english_suffix_day( date.getDate() );

      // set month ( 0 - 11 )
      monthElement.innerText = get_english_short_month_name( date.getMonth() );

      // set year
      yearElement.innerText =  date.getFullYear();


      return new Promise(resolve => {
              resolve();
            })

  }
