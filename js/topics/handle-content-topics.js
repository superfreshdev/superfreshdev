console.log('🟡 handle-content-topics.js')

/* ------------------------------------------------------------ */
/* Variables
/* ------------------------------------------------------------ */ 

/* ------------------------------------------------------------ */
/* Functions
/* ------------------------------------------------------------ */ 



/* ------------------------------------------------------------ */
/* ⚡ [Zukunft] - Besser Auslagern
/*
    1. Check if only json file exist
    2. Check if json file exist & it is readable ?
    3. Function to return true/false of json file exist & it is readble ?

/* ------------------------------------------------------------ */ 

/* ------------------------------------------------------------ */
/* ⚡ Helper-Functions
/* ------------------------------------------------------------ */ 
async function canGetJsonFile( strPath ) {

    // console.log('➡️❓canGetJsonFile|strPath:' + strPath )

    // remember: return comes in the try catch block as promise 
    // so if u get no error, u will get no error message in console
    try {

        /* -------------------------------------------- */
        /* Can Get Json File ? 
        /* -------------------------------------------- */
        const response = await fetch( strPath );

        if(response.ok == false) {
            if( response.status === 404 ) throw new Error( "404, Not found" );
            if( response.status === 500 ) throw new Error( "500, Internal Server Error" );
        }
        console.log('➡️🟩 - JSON File was found'  )

    } catch (error) {

        console.log("[❌Error] - " + error) 
    }   


}

/* ------------------------------------------------------------ */
/* [Async Fct] - Create Main Header 
/* > Get Data & Create Dom Elements of Main Header 
/* ------------------------------------------------------------ */

async function createMainHeader( strPath ) {

    // console.log('➡️❓ getDataJsonFile|strPath:' + strPath )

    try {

        /* -------------------------------------------- */
        /* 1|2 - Can Get Json File ? 
        /* -------------------------------------------- */
        const response = await fetch( strPath );

        if(response.ok == false) {
            if( response.status === 404 ) throw new Error( "404, Not found" );
            if( response.status === 500 ) throw new Error( "500, Internal Server Error" );
        }
        // console.log('➡️🟩1/2| - JSON File was found'  )
       

        /* -------------------------------------------- */
        /* 2|2 - Can Read Json File ? 
        /* -------------------------------------------- */
        const jsonData = await response.json();
        // console.log('➡️🟩2/2| - JSON File was correct reading'  )

        /* -------------------------------------------- */
        /* Create Main Header 
        /* -------------------------------------------- */
        // console.log('### json file ###')

        // console.log("01: " + jsonData.headerTopic )
        // console.log("02: " + jsonData.descHeaderTopic )

        for( let i=0; i< jsonData.subTopicItems.length; i++ ) {

            // console.log("03."+(i+1) + ": " + jsonData.subTopicItems[i].selectItemText )

        }
        

        // return jsonData;


    } catch (error) {

        // Handle Cant Read JSON File
        if( error instanceof SyntaxError ) {
            console.log('[❌Error] - Cant Read JSON File - ' + error)
        } else {

            // Other Error
            console.log("[❌Error] - " + error) 
        }
        
       
    }

}

/* ------------------------------------------------------------ */
/* Events  
/* ------------------------------------------------------------ */ 

/* ------------------------------------------------------------ */
/* Execute 
/* ------------------------------------------------------------ */

// console.log("### Execute-Part ###")

// console.log("1. Can get JSON File ? " )
// canGetJsonFile( '../../json/topics/it-stack/web-dev-data.json');





// console.log("2. Can Read JSON File ? " )
createMainHeader( '../../json/topics/it-stack/web-dev-data.json' )

