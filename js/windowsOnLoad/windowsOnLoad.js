
console.log("### windowsOnLoad ")

/* ------------------------------------------- */ 
/* DOM Elements */
/* ------------------------------------------- */ 

const elNavTopicContainer =  document.getElementById('nav-topic-container');
const elMainContainer = document.getElementById('main-container');


/* ------------------------------------------- */ 
/* Logic */
/* ------------------------------------------- */ 

window.addEventListener("load", (event) => {

    console.log("page is fully loaded");

    // console.log("nav-topic-container,heihgt= " + elNavTopicContainer.clientHeight + " px" )

    // /* Slide Correct Main */
    // elMainContainer.style.transform = `translateY(${-elNavTopicContainer.clientHeight}px)`
  });