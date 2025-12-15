// console.log("🟨 update-speical-labels.js")


/*

  ⚠️ Überlegen ob ich universelle special label img text counter benötige
  aktuell ist es einfacher eine global Methode zu schaffen die auf globale
  Daten zugreift und alles tut was man will, so bleibt der Code sauber


*/

/* ---------------------------------------------------------------------- */
/* 🟥 Update | Special Label | Sport Category
/* ---------------------------------------------------------------------- */

async function update_special_label_img_text_counter( labelElement, imgPath, imgCssClass, text, counterInfo ) {

  // console.log("➡️ update_special_label_img_text_counter()")
  // console.log("labelElement = " + labelElement );
  // console.log("text = " + text );
  // console.log("counterInfo  = " + counterInfo  );

   return new Promise(resolve => {
        resolve();
    })

}

/* ---------------------------------------------------------------------- */
/* 🟥 Update | Special Label | Sport Category
/* ---------------------------------------------------------------------- */

async function update_special_labels_img_text_counter( labelElements, imgPaths, imgCssClasses, texts, counterArray ) {

  console.log("➡️ update_special_labels_img_text_counter()")
  // console.log("labelElement = " + labelElement );
  // console.log("text = " + text );
  // console.log("counterArray(length)  = " + counterArray.length  );
  // console.log("counterArray[0]  = " + counterArray[0]  );

  var spanMaxItem = "";
  var maxItemsSelector = "div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(2)";

  for( let i=0; i < labelElements.length; i++ ) {

    // console.log(i + ": " + "labelElements= " + labelElements[i] + " | " + counterArray[i])

    // create label -> span -> max items selector
    spanMaxItem = labelElements[i].querySelector( maxItemsSelector );

    // update label | img

    // update label | text

    // update label | counter
    update_text_from_domElement( "("+counterArray[i]+")", spanMaxItem )

  }

   return new Promise(resolve => {
        resolve();
    })

}
