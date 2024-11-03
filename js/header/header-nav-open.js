

console.log("### header-nav-open.js")


/* --------------------------------------------------- */
/* DOM Elements 
/* --------------------------------------------------- */

// Header Nav
var lblNavHeader = document.getElementById('lbl-nav-header');
var chkHeader = document.getElementById('chk-nav-header');

// handle to slide in / off
var navTopicContainer = document.getElementById('nav-topic-container');
var mainBody = document.getElementById('main-body');

// handle links 

var linkPageOverview = document.getElementById('link-page-overview')
var linkPageODetails = document.getElementById('link-page-details')


const pages = document.querySelectorAll(".page");
    const translateAmount = 100; 
    let translate = 0;
    
slide = (direction) => {
direction === "next" ? translate -= translateAmount : translate += translateAmount;
pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
      );
    }


/* --------------------------------------------------- */
/* Click Listener 
/* --------------------------------------------------- */

lblNavHeader.addEventListener( 'click' , ()=> {

    if( chkHeader.checked == true ) {

        console.log("navHeader > close mode ");

        // mainBody.style.cssText = 
        // `
        //     grid: 1fr / 1fr;
        // `

        navTopicContainer.style.cssText = 
        `
            height: 0px;
          
            
           
            
        
            
        `;

        
       

    } else {

        console.log("navHeader > openmode ")

        // mainBody.style.cssText = 
        // `
        //     grid: auto 1fr / 1fr;
        // `

        navTopicContainer.style.cssText = 
        `
            height: 100px;
          
          
          

            
        `;



     


    }
    
} )


