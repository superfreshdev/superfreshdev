console.log('[🟡|js-library] = formatted-date-styles.js')

/* ------------------------------------------- */
/* Day 1st, 2nd, 3rd, 4th, 5th,...
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
/* Month 0=Jan, 1=Feb, 2=Mar, 4=Apr , ...
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