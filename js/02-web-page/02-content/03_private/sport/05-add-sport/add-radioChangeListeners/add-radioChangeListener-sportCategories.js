// console.log("🟨 add-radio-change-listener-sport-categories.js")


/* ----------------------------------------------------------------------------------- */
// 🟥 Add | Radio Change Listener | Sport Categories
/* ----------------------------------------------------------------------------------- */

  async function add_radio_change_listeners_sportCategories( radios ) {

    console.log("➡️ add_radio_change_listeners_sportCategories()")
    console.log("radios(length) = " + radios.length )


    /* -------------------------------------------------------------------------------- */
    //➡️🟥 Step 1:
    // Add Radio Change Listener to "radios of sport categories"
    /* -------------------------------------------------------------------------------- */

    for( let i=0; i < radios.length; i++ ) {

      radios[i].addEventListener("change", async ()=> {

        window.alert("Show Content Index = " + i )


        /* -------------------------------------------------------------------------------- */
        // 🟩 Step 2:
        // 1.1 Update Selected Sport Category
        // 1.2 Update Header Sport Category
        /* -------------------------------------------------------------------------------- */

          // 1.1 Update Selected Sport Category
          await update_view_selected_sportCategory( i )

          // 1.2 Update Header Sport Category
          await update_view_header_sportCategory( i )

          // close open label
          await unset_checkedElement( chk_selected_sport_category );


        /* -------------------------------------------------------------------------------- */
        // ➡️🟥 Step 2:
        // 2.1 Set View Sport Cateogry by "checked" Radio Array Index
        /* -------------------------------------------------------------------------------- */

          await set_view_sport_category_content( i )

          // 3. Check which Content
          //     3.1 - Sport Newest Videos ( maybe unshown nav sport challanges  )
          //     3.2 - Sport Challenges -> Choose Challenges (default)


      })

    }

    return new Promise(resolve => {
        resolve();
    })

  }
