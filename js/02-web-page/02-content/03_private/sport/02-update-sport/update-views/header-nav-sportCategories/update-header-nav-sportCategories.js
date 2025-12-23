// console.log("🟨 update-header-nav-sportCategories.js")


/* ------------------------------------------------------------------------------- */
/* 🟩 Update View | Header Nav | Sport Categories
/* ------------------------------------------------------------------------------- */

  async function update_view_header_nav_sportCategories() {

    // console.log("➡️ update_view_header_nav_sportCategories()")

    /* -------------------------------------------------------------------------------------------------------------- */
    // 🟩 Step 1:
    // 1.1 Update View     | Selects Sport Categories (max content items)
    // 1.2 Update View     | Selected Sport Category (label)
    // 1.3 Update View     | Header Sport Category
    /* -------------------------------------------------------------------------------------------------------------- */

      console.log("🟩⚙️ Update | Sport Categories | Header Nav ")

      /* ----------------------------------------------------------------------------------- */
      // 🟩 1.1 Update View | Selects | Sport Categories (max content items)
      /* ----------------------------------------------------------------------------------- */

        //  global ( runs only one time )
        await update_view_maxItems_from_select_sportCategories();


      /* ----------------------------------------------------------------------------------- */
      // 🟩 1.2 Update View | Selected | Sport Category (label)
      /* ----------------------------------------------------------------------------------- */

        var checkedIndex = await get_checked_index_otherwise_get_index_zero( radios_sport_categories );

        // global
        await update_view_selected_sportCategory( checkedIndex );


      /* ----------------------------------------------------------------------------------- */
      // 🟩 1.3 Update View | Header | Sport Category
      /* ----------------------------------------------------------------------------------- */

        // global
        await update_view_header_sportCategory( checkedIndex );



    return new Promise(resolve => {
          resolve();
      })


  }
