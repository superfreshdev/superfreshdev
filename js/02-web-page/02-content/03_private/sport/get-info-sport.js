// console.log("🟨 get-info-sport.js")


/* -------------------------------------------------------------- */
/* Get | Max Items from Sport Category (global)
/* -------------------------------------------------------------- */

async function get_maxItems_from_sportCategory( index ) {

  // console.log("➡️ get_maxItems_from_sportCategory() ");

  // if not changed, than index not correct
  var maxItem = "-1";

  // Print max Items of Sport Category by Index
  switch( index ) {

    case 0:
      // set max content items | newest vidoes (global)
      maxItem = maxItemsSportNewestVideos;
      break;

    case 1:
      // set max content items | challenges (global)
      maxItem = maxItemsSportNewestVideos;
      break;

    default:
      break;
  }


  return new Promise(resolve => {
        resolve(maxItem);
  })

}
