// console.log('🟡:js-library/dom-element-operations/dom-selector-operations/dom-selector-operations.js')


/* ----------------------------------------------------------------------------------- */
/* Remove Dom Selector
/* ----------------------------------------------------------------------------------- */


  /* ----------------------------------------------------------------------------------- */
  /* 🟩 Remove All Given Dom Elements by given deleteSelector String
  /* ----------------------------------------------------------------------------------- */

  function removeDomElementsBySelector( parentDom , deleteSelector  ) {

    // find all dom elements to delete
    var selectorElements = parentDom.querySelectorAll( deleteSelector )

    // count all delete elements
    var deleteElements = selectorElements.length;

    // delete only by minimum found 1
    if( deleteElements > 0 ) {

      console.log( "🔥 to delete = " + deleteElements )

      for( let i=0; i < deleteElements; i++ ) {

        console.log( i + ": Delete= " + selectorElements[i].innerHTML )

        selectorElements [i].remove();
      }

    } else {

      console.log( "🌵 nothing to delete = " + deleteElements )

    }

  }
