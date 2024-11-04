

console.log("### header-nav-open.js")


/* --------------------------------------------------- */
/* DOM Elements 
/* --------------------------------------------------- */

// Header Nav
var lblNavHeader = document.getElementById('lbl-nav-header');
var chkHeader = document.getElementById('chk-nav-header');

// Nav Topic Container ( slide in / off )
var navTopicContainer = document.getElementById('nav-topic-container');


/* --------------------------------------------------- */
/* Click Listener | Nav Header 
/* --------------------------------------------------- */

lblNavHeader.addEventListener( 'click' , ()=> {

    if( chkHeader.checked == true ) {

        // console.log("navHeader > close mode ");

        navTopicContainer.style.cssText = 
        `
            grid-template-rows: 0fr;
 
        `;
     
    } else {

        // console.log("navHeader > openmode ")

        navTopicContainer.style.cssText = 
        `
            grid-template-rows: 1fr;
            
        `;
        
    }
    
} )
