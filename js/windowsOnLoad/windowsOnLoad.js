
console.log("### windowsOnLoad ")

/* ------------------------------------------------------------------------- */ 
/* DOM Elements */
/* ------------------------------------------------------------------------- */ 

var radiosNavTopics = document.getElementsByName('radio-nav-topic')
var subNavTopicContainer = document.getElementById("sub-nav-topic-container");


/* ------------------------------------------------------------------------- */ 
/* Function */
/* ------------------------------------------------------------------------- */ 

function setSubNavTopicContainer( subNavTopicContainer , radios , strIdAbout ) {

  for( let i=0; i < radios.length; i++ ) {

      if( radiosNavTopics[i].checked == true && radiosNavTopics[i].getAttribute('id') === strIdAbout ) {

          subNavTopicContainer.style.cssText =  `grid-template-rows: 1fr 0fr;`;

      } else {

          subNavTopicContainer.style.cssText =  `grid-template-rows: 0fr 1fr;`;
      }
  }

}


/* ------------------------------------------- */ 
/* Logic */
/* ------------------------------------------- */ 

window.addEventListener("load", (event) => {

    // console.log("page is fully loaded");

    // set default sub nav topic container by radio checked 
    setSubNavTopicContainer( subNavTopicContainer , radiosNavTopics , "radio-about" )

  
});




/* -------------------------------------------------------------- */
/* Add Change Lister on Nav Topic Radios 
/* -------------------------------------------------------------- */


for( let i=0; i < radiosNavTopics.length; i++ ) {

  // console.log("runs")

  radiosNavTopics[i].addEventListener( 'change' , ()=> {

    setSubNavTopicContainer( subNavTopicContainer , radiosNavTopics , "radio-about" )

  })

}





