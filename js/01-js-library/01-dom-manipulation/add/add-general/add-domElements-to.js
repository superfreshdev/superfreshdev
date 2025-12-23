// console.log("🟨 add-domElements-to.js")


/* ----------------------------------------------------------------- */
/* Add Dom Element/s to ( append )
/* ----------------------------------------------------------------- */

  // single
  async function add_domElement_append_to( newDomElement, addPoint ) {

    // console.log("➡️ add_domElement_append_to()")

    addPoint.appendChild( newDomElement );

    return new Promise(resolve => {
        resolve();
      })

  }

  // all
  async function add_domElements_append_to( newDomElements, addPoint ) {

    console.log("➡️ add_domElements_append_to()")

    for( let i=0; i < newDomElements.length; i++ ) {

      addPoint.appendChild( newDomElements[i] );

    }

    return new Promise(resolve => {
        resolve();
      })

  }

/* ----------------------------------------------------------------- */
/* Add Dom Element/s to ( prepand )
/* ----------------------------------------------------------------- */

  // single
  async function add_domElement_prepand_to( newDomElement, addPoint ) {

    console.log("➡️ add_domElement_prepand_to()")

    addPoint.prepend( newDomElement );

    return new Promise(resolve => {
        resolve();
      })

  }

  // all
  async function add_domElements_prepand_to( newDomElements, addPoint ) {

    console.log("➡️ add_domElements_prepand_to()")

    for( let i=0; i < newDomElements.length; i++ ) {

      addPoint.prepend( newDomElements[i] );

    }

    return new Promise(resolve => {
        resolve();
      })

  }
