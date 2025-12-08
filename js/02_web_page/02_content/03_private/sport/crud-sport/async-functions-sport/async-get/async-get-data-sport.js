// console.log("🟨 async-get-data-sport.js")


/* ------------------------------------------------------------------------- */
// Async | Get Wished Data From Array
/* ------------------------------------------------------------------------ */

  async function async_get_data_from_array_by_index_range( dataArray, startIndex, endIndex ) {

    // console.log("➡️ async_get_data_from_array_by_index_range() ")

    // startIndex = 0 ist not allowed

    // modifiy to array index by 0
    var startArrayIndex = startIndex -1;
    var endArrayIndex = endIndex - 1;

    // wished data
    var wishedData = [];

    // console.log("🟣|starArrayIndex= " + startArrayIndex)
    // console.log("🟣|endArrayIndex= " + endArrayIndex)

    /* --------------------------------------------- */
    // Step 1:
    // Get Wished Datas
    /* --------------------------------------------- */

    for( let i=startArrayIndex; i <= endArrayIndex; i++ ) {

      // console.log(i + " :" + dataArray[i].imgName)
      wishedData.push( dataArray[i] )

    }

    /* --------------------------------------------- */
    // Step 2:
    // Print Wished Data
    /* --------------------------------------------- */

    for( let i=0; i < wishedData.length; i++ ) {

      // console.log(i + " :⚡" + wishedData[i].imgName)

    }

    // console.log("⚡(length) = " + wishedData.length )

    // Return Wished Datas
    return new Promise(resolve => {
        resolve( wishedData );
    })


  }
