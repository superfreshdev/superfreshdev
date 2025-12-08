// console.log("🟨 get-operations.js")


  /* ------------------------------------------------------------- */
  /* Get | Index Range
  /* ------------------------------------------------------------- */

  function getIndexRange( startIndex, endIndex ) {

    /* info

      e.g 1 - 3 | 3 Elements (0 | 1,2)
      e.g 1 - 7 | 7 Elements (0 | 1,2,3,4,5,6)
      e.g 2 - 3 | (2-3=1) | (2-1=1) (1,2)
      e.g 2 - 9 | 9 - 2 = 7 Elements
      e.g 15 - 30 | 30 - 15 = 15 Elements

    */

    // 0 as startIndex is not allowed
    if( startIndex != 0 ) {

      if( startIndex == 1 ) {

        return endIndex;

      } else {

        return (endIndex - startIndex);
      }

    } else {

      // startIndex = 0 is not allowed
      return -1;

    }

  }
