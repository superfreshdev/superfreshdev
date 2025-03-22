console.log('[🟡|content|about|news| ➡️ update-news.js]')

/* 

    1. on reload (windowsOnLoad) the function updateNews will execute 
       to read json file & show actually new datas 

*/

/* ---------------------------------------------------------------------------------- */
/* DOM Elements 
/* ---------------------------------------------------------------------------------- */

// Add Point , News Doing Container
const add_news_doing_container = document.getElementById('js-add-news-doing-container');


// Add Point , Actually Month News Done Container 
// Add Point, Last Month News Done Container 
const add_news_actually_month_done_container = document.getElementById('actually-month-news-done-list')
const add_news_last_month_done_container = document.getElementById('last-month-news-done-list');


/* ---------------------------------------------------------------------------------- */
/* Function | Update News
/* ---------------------------------------------------------------------------------- */

async function updateNews ( filePath ) {

    /* -------------------------------------------------------------------------- */
    /* Step 1 
    /* -------------------------------------------------------------------------- */
    /* > Try to load json File & read */


    /* ------------------------------------------------------ */
    /* Try-Catch-Block | (async-await-promise)
    /* ------------------------------------------------------ */

    try {

        const response = await fetch( filePath );

        // no file was found 
        if( !response.ok ) {
            console.log('😡|updateNews()|: ' + response.status + " | File was not found.")
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // try to read
        const data = await response.json();

        console.log("##############");

        /* ----------------------------------------------------------------------- */
        /* ### Start ###
        /* ----------------------------------------------------------------------- */

        createNewsPrioTask( data.now )

        createNewsPrioTask( data.after )

        createNewsPrioTask( data.later )

        createNewsPrioTask( data.infinity )

        /* ----------------------------------------------------------------------- */
        /* ### End ###
        /* ----------------------------------------------------------------------- */


        console.log("##############");

    } catch (error) {
        console.error('API Error:', error)
    }

}


/* ---------------------------------------------------------------------------------- */
/* Main Function | Check to Create Showing Task Categories 
/* ---------------------------------------------------------------------------------- */

function createNewsPrioTask( objTaskPrio ) {

    /* ------------------------------------------------------------------------------ */
    /* Step 1 | Check to Create Showing Task Category ( show / unshown )
    /* ------------------------------------------------------------------------------ */
  
    if( objTaskPrio.statusShow == "show" ) {

        console.log('🏗️ Create Prio Task | ' + objTaskPrio.text )

        // Create from Task Category all Task Items 
        createDomNewsTask( objTaskPrio ) 


    } else {

        console.log('❌ No Create Prio Task | ' + objTaskPrio.text )

    }

}


/* ---------------------------------------------------------------------------------- */
/* Sub Function | Create Dom News Task (1/2)
/* ---------------------------------------------------------------------------------- */

function createDomNewsTask( objTaskPrio ) {


    var newDiv_news_doing_item_box = createDivClassText( 'news-doing-item-box' );
    var newDiv_news_task_item = "";

    var imgInfinityPath = "";

    var newDivSeperatorElement = "";

    if( objTaskPrio.tasks.length != null && objTaskPrio.tasks.length != undefined ) {


        for( let i=0; i < objTaskPrio.tasks.length; i++ ) {

            // check only by infinity set img path otherwhise send empty
            if( objTaskPrio.text == "Infinity") {

                imgInfinityPath = objTaskPrio.tasks[i].imgPath;

            } else {

                imgInfinityPath = "";
            }

            newDiv_news_task_item = createDomNewsTaskItem( printTwoFormattedNumber(i+1) , objTaskPrio.text , objTaskPrio.tasks[i].category , imgInfinityPath,  objTaskPrio.tasks[i].description, objTaskPrio.tasks[i]  )

            // Append each task item to parent: "news-doing-item-box"
            addDomElementToParent( newDiv_news_task_item, newDiv_news_doing_item_box )
           
        }

        /* ---------------------------------------------------------------------------- */ 
        /* Append News Doing Item Box to Parent: "js-add-news-doing-container"
        /* ---------------------------------------------------------------------------- */ 

        addDomElementToParent(  newDiv_news_doing_item_box,  add_news_doing_container )

        // Add Seperator dashed line 
        newDivSeperatorElement = createDivClassText( "line-dashed-seperator" );
        addDomElementToParent( newDivSeperatorElement , add_news_doing_container )
    }

}

/* ---------------------------------------------------------------------------------- */
/* Sub Function | Create Dom News Task Item (2/2)
/* ---------------------------------------------------------------------------------- */

function createDomNewsTaskItem( strIndex , strPrioText, strPrioCategory, imgInfinityPath, strTaskDescription , objTask  ) {

    /*

        Step 1: Create | News Task Item 

            Step 2.1: Create | Index Status Item News Task 
            Step 2.2: Create | Title News Task  

    */

    /* ---------------------------------------------------------------------------- */ 
    /* Step 1 | Create Div | News Task Item 
    /* ---------------------------------------------------------------------------- */ 

    var newDiv_news_task_item = createDivClassText( 'news-task-item');


    /* ---------------------------------------------------------------------------- */ 
    /* Step 2.1 | Create Div | Index Status Item News Task 
    /* ---------------------------------------------------------------------------- */ 

    var newDiv_index_status_item_news_task = createDivClassText( 'index-status-item-news-task' )

        /* --------------------------------------------------- */
        /* Create & Append to Parent | Index News Task
        /* --------------------------------------------------- */ 
        var newDiv_index_news_task = createDivClassText( 'index-news-task' , strIndex + " |");

        addDomElementToParent( newDiv_index_news_task, newDiv_index_status_item_news_task )

        /* --------------------------------------------------- */
        /* Create & Append to Parent | Status News TAsk 
        /* --------------------------------------------------- */ 
        var newDiv_status_task = "";

        switch( strPrioText ) {

            case 'Now':
                newDiv_status_task = createDivClassText( 'status-now' , strPrioText);
                break;

            case 'After':
                newDiv_status_task = createDivClassText( 'status-after' , strPrioText);
                break;

            case 'Later':
                newDiv_status_task = createDivClassText( 'status-later' , strPrioText);
                break;

            case 'Infinity':
                newDiv_status_task = createDivClassText( 'status-infinity' , strPrioText);
                break;
        }


        addDomElementToParent( newDiv_status_task , newDiv_index_status_item_news_task )


        /* ------------------------------------------------------------------------------------ */
        /* Extra Infinity Conditon to Add Img 
        * ------------------------------------------------------------------------------------ */
        if( strPrioText == "Infinity" ) {

                var newDiv_img_status_infinity = createDivClassText( 'status-infinity' );
                
                var newImg_img_status_infinity = createImg( imgInfinityPath , 'img-h-1-1' )

                addDomElementToParent( newImg_img_status_infinity, newDiv_img_status_infinity )

                // Add Final to Parent: Index Status Item News Task 
                addDomElementToParent( newDiv_img_status_infinity , newDiv_index_status_item_news_task )

        }


        /* --------------------------------------------------- */
        /* Append to Parent | News Task Item 
        /* --------------------------------------------------- */ 
        addDomElementToParent( newDiv_index_status_item_news_task, newDiv_news_task_item )

    /* ---------------------------------------------------------------------------- */ 
    /* Step 2.2 | Create Div Element | Title News Task 
    /* ---------------------------------------------------------------------------- */ 

    var newDiv_title_news_task = createDivClassText( 'title-news-task' );

        // Append | Div | Category 
        var newDiv_task_category = createDivText( strPrioCategory + ": ");

        addDomElementToParent( newDiv_task_category, newDiv_title_news_task )

        // Append | Div | Description
        var newDiv_task_description = createDivText( strTaskDescription );


        /* ------------------------------------------------------------------------------------ */
        /* Optional Link Adding if exist to description
        * ------------------------------------------------------------------------------------ */
        if( objTask.link != null && objTask.link != undefined && objTask.link != "" ) {

            // console.log("✅ Link Properety Found = Value = " + objTask.link  )

            var newLink_Task = createLink( objTask.link );

            addDomElementToParent( newLink_Task , newDiv_task_description );

        }



        addDomElementToParent( newDiv_task_description, newDiv_title_news_task )


        /* --------------------------------------------------- */
        /* Append to Parent | News Task Item 
        /* --------------------------------------------------- */ 
        addDomElementToParent( newDiv_title_news_task, newDiv_news_task_item )


    return newDiv_news_task_item;
    
}








/* ---------------------------------------------------------------------------------- */
/* ➡️ Execute Test 
/* ---------------------------------------------------------------------------------- */

    var filePath = 'data/json/about/data-news.json';

    updateNews( filePath );



