// console.log("🟨 update-maxItems-from-select-sportCategories.js")


/* -------------------------------------------------------------------------------------- */
/* 🟩 Update View | Max Items | from Select Sport Categories
/* -------------------------------------------------------------------------------------- */

  async function update_view_maxItems_from_select_sportCategories() {

    // console.log("➡️ update_view_maxItems_from_select_sportCategories()")


    /* -------------------------------------------------------------- */
    /* Get Data (global)
    /* -------------------------------------------------------------- */

      var selectLabels = lbl_radios_sport_categories;

    /* -------------------------------------------------------------- */
    /* Create Update Selectors from "selectLabels"
    /* -------------------------------------------------------------- */

      var spanMaxItem = "";
      var maxItemsSelector = "div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(2)";

    /* -------------------------------------------------------------- */
    /* Update Select Labels by Max Items
    /* -------------------------------------------------------------- */

      var maxItems = "-1";

      for( let i=0; i < selectLabels.length; i++ ) {

        console.log(i + ": " + "selectLabels= " + selectLabels[i] )

        // create "spanMaxItems"
        spanMaxItem = selectLabels[i].querySelector( maxItemsSelector );

        maxItems = await get_maxItems_from_sportCategory( i )

        // update label with maxItems
        update_text_from_domElement( "("+maxItems+")", spanMaxItem )

      }

    return new Promise(resolve => {
          resolve();
      })

  }
