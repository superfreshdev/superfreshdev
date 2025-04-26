
console.log("[🟡|content| ➡️ update-it-docs.js]")


var addPointItDocs = document.getElementById('js-add-point-it-docs');

/* ----------------------------------------------------------------- */
/*  🟩 Function | Update "IT-Docs" Content
/* ----------------------------------------------------------------- */

async function updateItDocsContent( filePath ) {

    try {

        // try to get json file 
        const response = await fetch( filePath );

        if( !response.ok ) {
            console.log("🔴:getJsonFile|" + response.status )
            return false;
        }

        // try to read "data-it-docs.json"
        const data = await response.json();
        console.log( "🦍🦍🦍: " + data.test )


        // Step 1: Create Filter IT Docs Panel 

       
        // addPointItDocs.append(  createDivClassText( "class-Marko", data.test ) )
        // addPointItDocs.append(  createDivClassText( "class-Marko", data.test ) )
        // addPointItDocs.append(  createDivClassText( "class-Marko", data.test ) )

        



      
       

    } catch (error) {
        console.log("🔴:getJsonFile|" + error )
        //return error;
    }
   
}

/* ----------------------------------------------------------------- */
/*  ➡️ Execution:
/* ----------------------------------------------------------------- */

console.log("🟡 Here I am:")


// Update IT Docs View from Data File "data-it-docs.json" 
var filePath = "../../data/json/it-docs/data-it-docs.json";
updateItDocsContent( filePath );


