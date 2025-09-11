console.log('[🟡|js-library|promises| ➡️ promises-functions.js]')


/* ---------------------------------------------------------------------------------- */
/* Exist Json File
/* ⚠️ TO DO Cleaner | If i have better knowledge in promises async await 
/* ---------------------------------------------------------------------------------- */

async function existJsonFile( filePath ) {


    try {

        const response = await fetch( filePath );

        // no file was found 
        if( !response.ok ) {
            console.log('😡|existJsonFile()|: ' + response.status + " | File was not found.")
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        
        // try to read
        const data = await response.json();

        console.log( "ppp " + data.a )

    } catch (error) {
        console.error('API Error:', error)
    }
   
   
}

// console.log("Exist Json File ?! = " + existJsonFile( 'data/json/about/data-news.json' ) )


/* ---------------------------------------------------------------------------------- */
/* Get Json File
/* ---------------------------------------------------------------------------------- */

function getJsonFile( filePath ) {

    /* Async Await by Promise */

}

