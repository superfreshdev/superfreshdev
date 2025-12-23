
// console.log("🟨 get-domElements.js")


/* ----------------------------------------------------------------- */
/* Get All | Radios by name
/* ----------------------------------------------------------------- */

  async function get_all_radioElements_by_name( radio_name_group ) {

    // console.log("radio_name_group = " + radio_name_group );

    // create radio name dummy to find
    var radiosFound = document.querySelectorAll(`input[name='${radio_name_group}']`);


    return new Promise(resolve => {
        resolve(radiosFound);
    })


  }

/* ----------------------------------------------------------------- */
/* Get All | Labels by for Array
/* ----------------------------------------------------------------- */

 async function get_all_labels_by_forArray( forArray ) {

    // console.log("forArray(length) = " + forArray.length );

    var labelElements = [];

    for( let i=0; i < forArray.length; i++ ) {

        // console.log(i + "= " + `label[for='${forArray[i]}']`)

        // getting all finding labels by for Attributes
        labelElements.push(  document.querySelector(`label[for='${forArray[i]}']`) )

    }

    // console.log("labelElements(length) = " + labelElements.length )



    return new Promise(resolve => {
        resolve(labelElements);
    })

  }

/* ----------------------------------------------------------------- */
/* Get All | Dom Elementy by class name
/* ----------------------------------------------------------------- */

  async function get_all_domElements_by_className( className ) {


    console.log("className = " + className );

    // create domElementy by finding css class
    var domElements = document.querySelectorAll( "."+className );


    return new Promise(resolve => {
        resolve(domElements);
    })

  }
