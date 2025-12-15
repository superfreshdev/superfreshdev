// console.log("🟨 unset-radios-read-more-about.js")


/* -------------------------------------------------------------------------- */
// ⚠️ Clean Code bitte in Zukunft machen + auslagern
/* -------------------------------------------------------------------------- */

/* ----------------------------------------------------------------- */
/*  DOM Elements
/* ----------------------------------------------------------------- */

  // checkbox read more ( open,close )
  var chk_read_more = document.getElementById("chk-open-read-more-about");

  // radio
  var radios_read_more = [

    document.getElementById("radio-life-philosophy"),
    document.getElementById("radio-hobbies"),
    document.getElementById("radio-story")
  ]

/* ----------------------------------------------------------------- */
/* Events
/* ----------------------------------------------------------------- */

  // unset radio to unshown content
  chk_read_more.addEventListener( "change" , ()=> {

    // console.log("🚀 Changed = ")

    for( let i=0; i < radios_read_more.length; i++ ) {

      // console.log("Runtime = " + i )

      if( radios_read_more[i].checked == true ) {

        // alert(" Index = checked = " + i)

        // unset checked radio
        radios_read_more[i].checked = false;
        // exit
        i = radios_read_more.length;

      }

    }

  })
