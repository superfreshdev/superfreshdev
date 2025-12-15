// console.log("🟨 get-info-from-domElements.js")



/* ----------------------------------------------------------------- */
/* GET | Length
/* ----------------------------------------------------------------- */

function get_length_from_array( arrayElements ) {

  // console.log(" Le = " + domElements.length  )

  var element_lenght = "";

   if( arrayElements.length == null || arrayElements.length == undefined ) {

    element_lenght = -1;

  } else {

    element_lenght = arrayElements.length;
  }

  return element_lenght;
}

/* ----------------------------------------------------------------- */
/* Get | Checked Index from Checked Elements (radio,checkbox)
/* ----------------------------------------------------------------- */

async function get_checked_index_from( checkedElements ) {

  var checked_index = -1;

  for( let i=0; i < checkedElements.length; i++ ) {


    if( checkedElements[i].checked == true ) {

      checked_index = i;
      // jump out from loop
      i = checkedElements.length;

    }

  }

   return new Promise(resolve => {
        resolve(checked_index);
      })

}

/* ----------------------------------------------------------------- */
/* Get | Checked Index Otherwise IndexZero
/* ----------------------------------------------------------------- */

async function get_checked_index_otherwise_indexZero_from( checkedElements ) {

  // not changed, default index = 0
  var checked_index = 0;

  for( let i=0; i < checkedElements.length; i++ ) {


    if( checkedElements[i].checked == true ) {

      checked_index = i;
      // jump out from loop
      i = checkedElements.length;

    }

  }

   return new Promise(resolve => {
        resolve(checked_index);
      })

}

/* ----------------------------------------------------------------- */
/* Get | Arrays from Data
/* ----------------------------------------------------------------- */

  async function get_arrays_from_data( dataArray ) {

    var wishedDataArray = [];

    for( let i=0; i < dataArray.length; i++ ) {

      wishedDataArray.push( dataArray[i] )

    }

    return new Promise(resolve => {
        resolve( wishedDataArray );
    })

  }

/* ----------------------------------------------------------------- */
/* Get | Arrays from Data by Property name
/* ----------------------------------------------------------------- */

  async function get_arrays_from_data_by_propertName( dataArray, strPropertyName ) {

    var wishedDataArray = [];

    for( let i=0; i < dataArray.length; i++ ) {

      wishedDataArray.push( dataArray[i][strPropertyName] )

    }

    return new Promise(resolve => {
        resolve( wishedDataArray );
    })

  }

/* ----------------------------------------------------------------- */
/* Get | Full Img Path by Default and Filename from Data
/* ----------------------------------------------------------------- */

  async function get_imgPath_from_data_with_defaultPath( imgDefaultPath, imgArrayNames ) {

    console.log("imgArrayNames(length)= " + imgArrayNames.length )
    console.log("imgDefaultPath= " + imgDefaultPath )

    var wishedImgPaths = [];

    for( let i=0; i < imgArrayNames.length; i++ ) {

      wishedDataArray.push( imgDefaultPath + imgArrayNames[i] )
    }

    console.log("wishedDataArray(length)=" + wishedDataArray.length)


    return new Promise(resolve => {
          resolve( wishedImgPaths );
      })

  }
