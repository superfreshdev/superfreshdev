// console.log('🟡:js-library/dom-element-operations/dom-selector-operations/dom-selector-operations.js')


/* ----------------------------------------------------------------------------------- */
/* Remove Dom Selector
/* ----------------------------------------------------------------------------------- */


  /* ----------------------------------------------------------------------------------- */
  /* 🟩 Remove First Dom Element
  /* ----------------------------------------------------------------------------------- */

  function removeFirstDomElement( parentDom, querySelectorAll ) {

    // Step 1: get length of all selector Elements

    var countSelectors = parentDom.querySelectorAll( querySelectorAll ).length;
    console.log("🌵 (length) = " + countSelectors )

    if( countSelectors >= 1 ) {

      // delete first dom element by index 0
      parentDom.querySelectorAll( querySelectorAll )[0].remove();

    } else {

      console.log("⚠️: no removing 'first-dom-element' ")
    }


  }

  /* ----------------------------------------------------------------------------------- */
  /* 🟩 Remove All Given Dom Elements
  /* ----------------------------------------------------------------------------------- */

  function removeAllGivenDomElements( parentDom, querySelectorAll ) {


    var countSelectors = parentDom.querySelectorAll( querySelectorAll ).length;
    console.log("🔥 Delete before (length) = " + countSelectors )

    if( countSelectors >= 1 ) {

      // delete all dom elements
      for( let i=0; i < countSelectors; i++ ) {

        /* ------------------------------------------------------ */
        /* 🛑🛑🛑 BUG Array Index - bis 3 soll aber bis 5 - element dont exist
        /* ------------------------------------------------------ */

        console.log("🔥🔥🔥 = " + i )
        console.log( parentDom.querySelectorAll( querySelectorAll )[i] )

        parentDom.querySelectorAll( querySelectorAll )[i].remove();

      }

    }

  }
