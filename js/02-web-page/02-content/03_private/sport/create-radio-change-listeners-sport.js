// console.log("🟨 create-radio-change-listeners-sport.js")


/* ----------------------------------------------------------------------------------- */
// ➡️🟥 Create | Radio Change Listener | Select Sport Categories
/* ----------------------------------------------------------------------------------- */

  async function create_radio_change_listener_select_sport_categories( radios ) {

    console.log("➡️ create_radio_change_listener_select_sport_categories()")
    console.log("radios(length) = " + radios.length )


    /* -------------------------------------------------------- */
    //➡️🟥  Step 1:
    // 1.1 Create Radio Change Listener to all radios
    // 1.2 Add Update View ( header, selected )
    // 1.3 Set View Container Sport Category By Index
    /* -------------------------------------------------------- */

    for( let i=0; i < radios.length; i++ ) {

      radios[i].addEventListener("change", async ()=> {

        window.alert("Show Content Index = " + i )


        /* -------------------------------------------------------------- */
        /* 🟩 1.2 Add Update View ( header, selected )
        /* -------------------------------------------------------------- */

          // update label selected sport category by changed index
          await update_label_selected_sport_category_by_index( i )

          // update header sport category by changed index
          await update_header_sport_category_by_index( i )

          // global, selected sport category close
          chk_selected_sport_category.checked = false;


        /* -------------------------------------------------------------- */
        /* ➡️🟥 1.3 Set View Container Sport Category By Index
        /* ( sport newest videos, sport challenges )
        /* -------------------------------------------------------------- */

          await set_view_container_sport_category_by_index( i )


      })

    }


    return new Promise(resolve => {
        resolve();
    })

  }
