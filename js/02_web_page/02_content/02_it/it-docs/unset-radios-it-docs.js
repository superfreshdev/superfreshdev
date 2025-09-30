// console.log("🟨 unset-radios-it-docs.js")


/* ----------------------------------------------------------------- */
/*  DOM Elements
/* ----------------------------------------------------------------- */

// checkbox it docs ( open,close )
var chk_it_docs = document.getElementById("chk-it-docs");

// radios it docs ( frontend, backend, ai )
var radios_it_docs = [

  document.getElementById("radio-frontend-it-docs"),
  document.getElementById("radio-backend-it-docs"),
  document.getElementById("radio-ai-it-docs")
]

// radios sub it docs ( from frontend, backend )
var radios_sub_it_docs = [

  document.getElementById("radio-dev-basic-it-docs"),
  document.getElementById("radio-web-basic-it-docs"),
  document.getElementById("radio-web-dev-it-docs"),
  document.getElementById("radio-software-dev-it-docs"),
  document.getElementById("radio-it-architecture-it-docs"),
  document.getElementById("radio-backend-tools-it-docs")

]

/* ----------------------------------------------------------------- */
/* Events
/* ----------------------------------------------------------------- */

// unset radio to unshown content
chk_it_docs.addEventListener( "change" , ()=> {

  // console.log("🚀 Changed = ")

  /* --------------------------------------------------------------- */
  /* [1/2] | Unset Radios It Docs ( frontend, backend, ai )
  /* --------------------------------------------------------------- */

  for( let i=0; i < radios_it_docs.length; i++ ) {

    // console.log("Runtime = " + i )

    if( radios_it_docs[i].checked == true ) {

      // alert(" Index = checked = " + i)

      // unset checked radio
      radios_it_docs[i].checked = false;

    }

  }

  /* --------------------------------------------------------------- */
  /* [2/2] | Unset Radios Sub It Docs ( from frontend, backend )
  /* --------------------------------------------------------------- */

  for( let i=0; i < radios_sub_it_docs.length; i++ ) {

    // console.log("Runtime = " + i )

    if( radios_sub_it_docs[i].checked == true ) {

      // alert(" Index = checked = " + i)

      // unset checked radio
      radios_sub_it_docs[i].checked = false;

    }

  }


})

/* ----------------------------------------------------------------- */
/* Function Events
/* ----------------------------------------------------------------- */

// unset radio sub it docs if radio it docs changed

for( let i=0; i < radios_it_docs.length; i++ ) {

  // Add Change Listener to unset sub it docs
  radios_it_docs[i].addEventListener( "change" , ()=> {

    /* -------------------------------------------- */
    // unset sub it docs
    /* -------------------------------------------- */

    for( let i=0; i < radios_sub_it_docs.length; i++ ) {

      // console.log("Runtime = " + i )

      if( radios_sub_it_docs[i].checked == true ) {

        // alert(" Index = checked = " + i)

        // unset checked radio
        radios_sub_it_docs[i].checked = false;

      }

    }

  });


}
