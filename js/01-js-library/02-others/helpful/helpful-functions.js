// console.log("🟨 helpful-functions.js")

/*

    ⚠️ Here we can add helpful functions
    if we get more we can better categorize it in groups

*/

/* ------------------------------------------------------------------ */
/* Get Two Formatted Number Style
/* > 2 -> 02
/* ------------------------------------------------------------------ */

function get_two_formatted_number_style( number ){

    var twoFormattedNumber = "";

    if( number <= 9 ) {

        twoFormattedNumber = "0"+number;
        return twoFormattedNumber;

    }

    // number bigger than 9
    return number;

}
