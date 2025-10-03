// console.log('🟨(js-lib|utils|date) | date_print_styles.js]')


/* ------------------------------------------------------------------------------- */
/* Functions
/* ------------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------------- */
/* getEnglishDaySuffix
/* > print day index to  1st, 2nd, 3rd, 4th, 5th,...
/* ------------------------------------------------------------------------------- */

function getEnglishDaySuffix( day ) {

    switch( day ) {

        case 1:
            return "st"
        case 2:
           return "nd"
        case 3:
            return "rd"
        default:
            return "th"

    }
}

/* ------------------------------------------------------------------------------- */
/* getEnglishShortMonthName
/* > print month index to short month name
/* > e.g 0=Jan, 1=Feb, 2=Mar, 4=Apr, ...
/* ------------------------------------------------------------------------------- */

function getEnglishShortMonthName( month ) {

    switch( month ) {

        case 0:
            return "Jan"
        case 1:
           return "Feb"
        case 2:
            return "Mar"
        case 3:
            return "Apr"
        case 4:
            return "May"
        case 5:
            return "Jun"
        case 6:
            return "Jul"
        case 7:
            return "Aug"
        case 8:
            return "Sep"
        case 9:
            return "Okt"
        case 10:
            return "Nov"
        case 11:
            return "Dec"

        default:
            return "-1"

    }
}

/* ------------------------------------------------------------------------------- */
/* printFullMonthNameAndShorYear
/* > print full month name & short year for example 2025 = 25.
/* ------------------------------------------------------------------------------- */

function printFullMonthNameAndShorYear( indexMonth, year ) {

    var strMonth = "";
    var strYear = year.toString();

    switch( indexMonth ) {

        case 0:
            strMonth = "January"
            break;
        case 1:
            strMonth = "February"
            break;
        case 2:
            strMonth = "March"
            break;
        case 3:
            strMonth = "April"
            break;
        case 4:
            strMonth = "May"
            break;
        case 5:
            strMonth = "June"
            break;
        case 6:
            strMonth = "July"
            break;
        case 7:
            strMonth = "August"
            break;
        case 8:
            strMonth = "September"
            break;
        case 9:
            strMonth = "October"
            break;
        case 10:
            strMonth = "November"
            break;
        case 11:
            strMonth = "December"
            break;

        default:
            strMonth = "-1"

    }

    // cut shot year in last 2 strings
    return strMonth + " " + strYear.substring(2,4);
}

/* ------------------------------------------------------------------------------- */
/* printDate
/* > print classic date, DD.MM.YYYY
/* ------------------------------------------------------------------------------- */

function printDate() {

    var str_day = printTwoFormattedNumber( getDay() );
    var str_month = printTwoFormattedNumber( getMonth() ); ;
    var str_year = getYear();

    return str_day + "." + str_month + "." + str_year;

}
