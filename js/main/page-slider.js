
console.log("### page-slider")


/* --------------------------------------------------- */
/* DOM Elements 
/* --------------------------------------------------- */

/* 
    1. Page Overview -> Many Buttons to slide 
    2. Page Details -> One Button to slide
*/

const pages = document.querySelectorAll(".page");

  const translateAmount = 100; 
  let translate = 0;



// Arrow Function

slide = (direction) => {

direction === "next" ? translate -= translateAmount : translate += translateAmount;

pages.forEach(

        pages => (pages.style.transform = `translateX(${translate}%)`)
        
    );


  }



