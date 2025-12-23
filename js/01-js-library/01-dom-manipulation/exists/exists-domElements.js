// console.log("🟨 exists-domElements.js")


/* ----------------------------------------------------------------- */
/* 🟩 Exist | Radios
/* ----------------------------------------------------------------- */

  function exist_radios( radio_name_group ) {

    // create radio name dummy to find
    var radios = document.querySelectorAll(`input[name='${radio_name_group}']`);

    if( radios.length > 0 ) {
      // console.log("🟩 Exist ")
      return true;

    } else {
      // console.log("🟥 Dont Exist ")
      return false;
    }

  }

/* ----------------------------------------------------------------- */
/* 🟩 Exist | "DomElement" in Parent with Display None Check
/* ----------------------------------------------------------------- */

  async function exist_domElement_in_parent_with_displayNone_check( cssScopeQuerySelector, parent ) {

    /* info:
      to find only first dom element in given parent use the
      querySelector like that e.g :scope > .child, that
      means that in parent only look for the first found element
      with the .child - class.
      :scope means look from actually given parent point and
      not in the complete dom document.
    */

    // console.log("➡️ get_exist_domElement_in_parent_with_displayNone_check()")


    /* -------------------------------------------------- */
    /* Get Variables
    /* -------------------------------------------------- */

      var existDomElement = "";

      // get css style of Exist Dom Element ( to handle display:none check )
      var cssStyleDomElement = "";

      // default false, to create
      var existStatus = false;


    /* ------------------------------------------------------------------------ */
    // Step 1
    /* 1.1 Check if Dom Element exist in Dom Document
    /*  1.1.1 Check if Dom Element was setted by display:none
              by display:none we handle it like dont exist in Dom Document
    /* ------------------------------------------------------------------------ */

      existDomElement = parent.querySelector( cssScopeQuerySelector );
      // console.log("🐒 existDomElement = " + existDomElement )

      /* ---------------------------------------------------------------- */
      /* 1.1 Check if Dom Element exist in Dom Document
      /* ---------------------------------------------------------------- */

        // if it exsit, we look for display:none
        if( existDomElement != null ) {


          /* ---------------------------------------------------------------- */
          // 1.1.1 Check if Dom Element was setted by display:none
          // because default dom count an dom Element by display:none
          /* ---------------------------------------------------------------- */

            // get css setted style from existDomElement
            cssStyleDomElement = window.getComputedStyle( existDomElement );


            if( cssStyleDomElement.display === "none" ) {

              // console.log("🟩 domElement exist in Dom")
              // console.log("🟩 domElement was setted by display:none")
              // console.log("➡️ return = false")
              // console.log("🛠️ Create View")

              // Dom Element exist but it was setted by display=none
              // so thats why we say that this element dont exist


            } else {

              // console.log("🟩 domElement exist")
              // console.log("🟥 domElement was (not) setted by display:none")
              // console.log("➡️ return = true")

              existStatus = true;

            }

        } else {

          // console.log("🟥 domElement dont exist in Dom")
          // console.log("➡️ return = false")
          // console.log("🛠️ Create View")


        }


      // Print Decision to creat or not create
      if( existStatus == false ) {

        window.alert("➡️🟩 Allow to Create New")

      } else {

        window.alert("➡️🟥 Dont Allow to Create New" + "existStatus= " + existStatus )

      }



      return new Promise(resolve => {
        resolve( existStatus );
    })


  }

/* ----------------------------------------------------------------- */
/* 🟩 Exist | "DomElements" in Parent with Display None Check
/* ----------------------------------------------------------------- */

  async function exist_domElements_in_parent_with_displayNone_check( querySelectorAll, parent ) {

    /* Reminder:

        if minimun one found which is not setted by "display:none"
        than it returns "false" , to not create
    */

      // console.log("➡️ exist_domElements_in_parent_with_displayNone_check()")

      // Test Prints
      // console.log("querySelectorAll = " + querySelectorAll)
      // console.log("parent  = " + parent )

    /* -------------------------------------------------------------------- */
    // Get Elements
    /* -------------------------------------------------------------------- */

      // look for existElements
      var existDomElements = parent.querySelectorAll( querySelectorAll )

      // default false, to create
      var existStatus = false;

      // get style of Exist Dom Element
      var styleExistDomElement = "";

      // console.log("🐒 existDomElements = " + existDomElements.length )

    /* ---------------------------------------------------------------------------------- */
    // Step 1:
    // 1.1 Check if existDomElements Exist
    // 1.2 Check if existDomElements was setted by "display=none"
    /* ---------------------------------------------------------------------------------- */

      for( let i=0; i < existDomElements.length; i++ ) {

        /* ---------------------------------------------------------------------------------- */
        // 1.1 Check if existDomElements Exist
        /* ---------------------------------------------------------------------------------- */

          if( existDomElements[i] != null ) {


            // get css style
            styleExistDomElement = window.getComputedStyle( existDomElements[i] );

            // check if "display:none" was setted
            if( styleExistDomElement.display === "none" ) {

              // state to allow to create
              // console.log("🟩 domElement exist in DOM")
              // console.log("🟩 domElement setted by display=none")

            } else {

              // state to not allow to create

              // Jump out of loop, because there really exist minimum one
              i = existDomElements.length;

              // console.log("🟩 domElement exist in DOM")
              // console.log("🟥 domElement was not setted by display=none")

              // Dom Element exist and hat not setted display=none
              // that means this Element really exist
              existStatus = true;

            }


          } else {

            // state to allow to create
            // console.log("🟥 First domElement dont exist in Dom - direct Jump Out")

          }


      }


    // Print Decision to creat or not create
    if( existStatus == false ) {

      // console.log("➡️🟩 Allow to Create New")

    } else {

      // console.log("existStatus= " + existStatus)
      // console.log("➡️🟥 Dont Allow to Create New")

    }


    return new Promise(resolve => {
        resolve( existStatus );
    })


  }
