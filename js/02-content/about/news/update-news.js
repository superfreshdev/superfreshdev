console.log('[🟡|content|about|news| ➡️ update-news.js]')


/* ---------------------------------------------------------------------------------- */
/* DOM Elements 
/* ---------------------------------------------------------------------------------- */


/* ------------------------------------------------- */
/* Actually Doing | Elements 
/* ------------------------------------------------- */


// Add Point , News Doing Container
const add_news_doing_container = document.getElementById('js-add-news-doing-container');


/* ------------------------------------------------- */
/* Done | Elements 
/* ------------------------------------------------- */

// Div Actually Month
const div_done_actually_month = document.getElementById('js-news-done-actually-month');
// Div Last Month
const div_done_last_month = document.getElementById('js-news-done-last-month');

// Add Point , Actually Month News Done Container 
const add_news_actually_month_done_container = document.getElementById('actually-month-news-done-list')
// Add Point, Last Month News Done Container 
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
        /* ### Start | Doing Task ###
        /* ----------------------------------------------------------------------- */

        createNewsPrioTask( data.now )

        createNewsPrioTask( data.after )

        createNewsPrioTask( data.later )

        createNewsPrioTask( data.infinity )

        /* ----------------------------------------------------------------------- */
        /* ### End | Doing Task  ###
        /* ----------------------------------------------------------------------- */


        /* ----------------------------------------------------------------------- */
        /* ### Start | Done Task ###
        /* ----------------------------------------------------------------------- */


        createDoneTasks( data.done.actuallyMonth, data.done.imgDone, add_news_actually_month_done_container );


        createDoneTasks( data.done.lastMonth, data.done.imgDone, add_news_last_month_done_container );


        /* ----------------------------------------------------------------------- */
        /* ### End | Done Task  ###
        /* ----------------------------------------------------------------------- */


        console.log("##############");

    } catch (error) {
        console.error('API Error:', error)
    }

}

/* ---------------------------------------------------------------------------------- */
/* Sub Function | Create Done Tasks
/* ---------------------------------------------------------------------------------- */

function createDoneTasks( objDataMonth , objImgPath, addDomPoint ) {


    var objMonth = objDataMonth;
    var imgPath = objImgPath;

    var newDivDoneTaskCategories = "";
    

    /* 
        1. For: Add every done category list 
        2. For: Add done task items to done category list 

    */

    for( let i=0; i < objMonth.length; i++ ) {

        
        newDivDoneTaskCategories = createDoneListTaskCategory( objMonth[i].tasks, imgPath )

        console.log( newDivDoneTaskCategories )

        // Add Done Category List to Parent 
        console.log('####')

        addDomElementToParent( newDivDoneTaskCategories , addDomPoint )

        // Add Seperator dashed line 
        var newDivSeperatorElement = createDivClassText( "line-dashed-seperator" );
        addDomElementToParent( newDivSeperatorElement , addDomPoint )
        
    }
    

}


/* ---------------------------------------------------------------------------------- */
/* Sub Function | Create Done List Task Category
/* ---------------------------------------------------------------------------------- */

function createDoneListTaskCategory( objDoneTaskItems , imgPath ) {


    var newDiv_done_list_task_category = createDivClassText( 'done-list-task-category' )

    var newDiv_news_task_item = "";

    var newDiv_index_status_item_news_task = "";
    var newDiv_title_news_task = "";

    for( let j=0; j <  objDoneTaskItems.length; j++ ) {

        newDiv_news_task_item = createDivClassText( 'news-task-item' )


        /* ----------------------------------------------------- */
        /* Step 1 | Create | Index Status Iten News Task
        /* ----------------------------------------------------- */

        newDiv_index_status_item_news_task = createDivClassText( 'index-status-item-news-task' )


            var newDiv_index_news_task = createDivClassText( 'index-news-task', printTwoFormattedNumber(j+1) + " |" )

            // console.log( newDiv_index_news_task )

            // Append "index-news-task" to parent: "index-status-item-news-task"
            addDomElementToParent( newDiv_index_news_task , newDiv_index_status_item_news_task )


            var newImg_done_task = createImg( imgPath, 'img-h-1' )

            // layout img fix 
            newImg_done_task.style.padding = " 4px 0 0 0";

            // console.log( newImg_done_task  )

            // Append "newImg_done_task" to parent: "index-status-item-news-task"
            addDomElementToParent( newImg_done_task , newDiv_index_status_item_news_task )

            //  console.log( newDiv_index_status_item_news_task  )

            // Final ADD to | news task item 
            addDomElementToParent( newDiv_index_status_item_news_task , newDiv_news_task_item )

            // console.log( newDiv_news_task_item  )


        /* ----------------------------------------------------- */
        /* Step 2 | Create | Description
        /* ----------------------------------------------------- */  
        
        newDiv_title_news_task = createDivClassText( 'title-news-task' )

        var newDivCategory = createDivText( objDoneTaskItems[j].category  )

        addDomElementToParent( newDivCategory , newDiv_title_news_task )

        var newDivDescription = createDivText( objDoneTaskItems[j].description  )

        addDomElementToParent( newDivDescription , newDiv_title_news_task )

        //  console.log( newDiv_title_news_task  )


        // Final ADD to | news task item 
        addDomElementToParent( newDiv_title_news_task  , newDiv_news_task_item )

        //   console.log( newDiv_news_task_item  )



        /* ----------------------------------------------------------------- */
        /* Final | Add each Task Done Item to Done List TAsk Category */
        /* ----------------------------------------------------------------- */

        // Add TAsk Item to List TAsk Category 
        addDomElementToParent( newDiv_news_task_item  , newDiv_done_list_task_category )

        // console.log( newDiv_done_list_task_category  )
    


    }


    return newDiv_done_list_task_category;



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
        // newDivSeperatorElement = createDivClassText( "line-dashed-seperator" );
        // addDomElementToParent( newDivSeperatorElement , add_news_doing_container )
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

    // Update Actually Month Year Radio Labels

    // testing: buildings szenarios: jan 26, dez. 25
    // var actuallyMonthIndex = 0;
    // var actuallyYear = 2026;

    const date = new Date();

    var actuallyMonthIndex = date.getMonth();
    var actuallyYear = date.getFullYear();

    div_done_actually_month.innerText =  printFullMonthShortYear(  actuallyMonthIndex , actuallyYear )

    if( actuallyMonthIndex == 0 ) {

        div_done_last_month.innerText = printFullMonthShortYear(  11 , actuallyYear-1 )

    } else {

        div_done_last_month.innerText = printFullMonthShortYear(  actuallyMonthIndex-1 , actuallyYear )

    }

