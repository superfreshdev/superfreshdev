// console.log("🟨 get-infos-from-data.js")

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
/* Get | Arrays from Data by Property Name
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
/* Get | Full Img Paths from Data by 2 Properites
/* ----------------------------------------------------------------- */

  async function get_full_imgPaths_from_data_by_2_properties( imgDefaultPath, imgArrayNames ) {

    // console.log("imgDefaultPath= " + imgDefaultPath )
    // console.log("imgArrayNames(length)= " + imgArrayNames.length )

    var wishedImgPaths = [];

    for( let i=0; i < imgArrayNames.length; i++ ) {

      wishedDataArray.push( imgDefaultPath + imgArrayNames[i] )
    }

    // console.log("wishedDataArray(length)=" + wishedDataArray.length)


    return new Promise(resolve => {
          resolve( wishedImgPaths );
      })

  }
