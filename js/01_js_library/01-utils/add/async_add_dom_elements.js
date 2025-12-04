// console.log("🟨 async-add-dom-elements.js")



/* ----------------------------------------------------------------- */
/* Add Element To Add Point ( append, prepend )
/* ----------------------------------------------------------------- */

// append
async function async_add_elements_to_add_point_append( newElements, add_point ) {

  console.log("🟥 async_add_elements_to_add_point_append")

  for( let i=0; i < newElements.length; i++ ) {

    add_point.appendChild( newElements[i] );

  }

  return new Promise(resolve => {
      resolve();
    })

}

// prepend
async function async_add_elements_to_add_point_prepend( newElements, add_point ) {

  console.log("🟥 async_add_elements_to_add_point_prepend")

  for( let i=0; i < newElements.length; i++ ) {

    add_point.prepend( newElements[i] );

  }

  return new Promise(resolve => {
      resolve();
    })

}
