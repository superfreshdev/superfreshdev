console.log('🟡(js-lib) | date-styles.js]')


/* ------------------------------------------- */
/* Get by Index 1st, 2nd, 3rd, 4th, 5th,...
/* ------------------------------------------- */

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

/* ------------------------------------------- */
/* Get Month 0=Jan, 1=Feb, 2=Mar, 4=Apr , ...
/* ------------------------------------------- */

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

/* ------------------------------------------- */
/* Print Full Month Name & Short Year
/* e.g March 25 ( March 2025 )
/* ------------------------------------------- */

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

    return strMonth + " " + strYear.substring(2,4);
}
