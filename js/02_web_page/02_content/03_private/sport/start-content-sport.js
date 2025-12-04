// console.log("🟨 start-content-sport.js")


  /* --------------------------------------------------------------------------------------- */
  // Async Function | Build Content | Sport Categories
  // ( important to working successively )
  /* --------------------------------------------------------------------------------------- */

  /// 🟥🟥 Was macht es genau ??? | besser in gruppen aufteilen ?!
  // z.B header,nav -> update + extra sport challenges -> bessere gruppierung

  async function build_content_sport_categories() {

    /* --------------------------------------------------------------------------------------- */
    // 🟩 Step 1:
    // 1.1 Update View | Selected Sport Category ( chk - label )
    // 1.2 Update View | Header Sport Category
    /* --------------------------------------------------------------------------------------- */

    await update_view_header_selected_sport_category()

    /* --------------------------------------------------------------------------------------- */
    // 🟩 Step 2:
    // 2.1 Update Views | Max Content Items | Select Sport Categories
    /* --------------------------------------------------------------------------------------- */

    // ⚠️ just simulation | delete later
    // await myTimeout()

    await update_views_max_content_items_select_sport_categories();

    /* --------------------------------------------------------------------------------------- */
    // 🟩 Step 3:
    // 3.1 Create Radios | Select Sport Challenges
    // 3.2 Create Labels | Select Sport Challenges
    /* --------------------------------------------------------------------------------------- */

      /* ---------------------------------------------- */
      // 3.1 Create Radios ( from Data )
      /* ---------------------------------------------- */

      await create_radios_sport_challenges()
      await unshow_radios_sport_challenges();

      /* ---------------------------------------------- */
      // 3.1 Create Lables ( from Data )
      /* ---------------------------------------------- */

      await create_labels_sport_challenges()


    /* --------------------------------------------------------------------------------------- */
    // ➡️🟥 Step 4:
    // 4.1 Add Radio Change Listener | to Radio | Select Sport Categories
    // 4.2 ADD CSS Styling
    /* --------------------------------------------------------------------------------------- */

      await async_create_radio_change_listener_sport_challenges()


    /* --------------------------------------------------------------------------------------- */
    // ➡️🟥 Step 5:
    // 5.1 Show Content
    // look in data for checked = true and only use first one
    /* --------------------------------------------------------------------------------------- */

      await async_set_content_sport_challenges_by_data()


  }

/* ------------------------------------------------- */
/* ➡️ Execute (Start)
/* ------------------------------------------------- */

  build_content_sport_categories()
