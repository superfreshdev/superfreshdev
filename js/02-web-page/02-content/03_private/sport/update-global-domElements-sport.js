// console.log("🟨 update-global-domElements-sport.js")

/* info:

    we use data from from sport folder
    to create layouts.
    On this way we only have methods to call
    and dont must create "getting data"
    in our main code.

*/

/* -------------------------------------------------------------------------------------- */
/* 🟩 Update | Max Items to Label Select Sport Categories (global)
/* -------------------------------------------------------------------------------------- */

  async function update_maxItems_to_label_select_sport_categories() {

    // console.log("➡️ update_maxItems_to_label_select_sport_categories()")

    /* -------------------------------------------------------------- */
    /* Get Data (global)
    /* -------------------------------------------------------------- */

    var labels = lbl_radios_sport_categories;

    /* -------------------------------------------------------------- */
    /* Create Span Max Items Seletor
    /* -------------------------------------------------------------- */

    var maxItems = "";
    var spanMaxItem = "";
    var maxItemsSelector = "div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(2)";

    /* -------------------------------------------------------------- */
    /* Go by global Labels to Update Max Items
    /* -------------------------------------------------------------- */

    for( let i=0; i < labels.length; i++ ) {

      // console.log(i + ": " + "labels= " + labels[i] )

      // create label -> span -> max items selector
      spanMaxItem = labels[i].querySelector( maxItemsSelector );

      maxItems = await get_maxItems_from_sportCategory( i );

      // update label | counter
      update_text_from_domElement( "("+maxItems+")", spanMaxItem )

    }

    return new Promise(resolve => {
          resolve();
      })

  }

/* ---------------------------------------------------------------------- */
/* 🟩 Update | Label Selected Sport Category by Index (global)
/* ---------------------------------------------------------------------- */

  async function update_label_selected_sport_category_by_index( checkedIndex ) {

    // console.log("➡️ update_label_selected_sport_category()")

    /* -------------------------------------------------------------------------- */
    // Step 1:
    // Get Dom Elements from global "lbl_selected_sport_category"
    /* -------------------------------------------------------------------------- */

      var imgElement = lbl_selected_sport_category.querySelector("div:nth-of-type(1) > img:nth-of-type(1)")
      var textElement = lbl_selected_sport_category.querySelector("div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(1)")
      var maxItemsElement = lbl_selected_sport_category.querySelector("div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(2)")


    /* -------------------------------------------------------------------------- */
    // Step 2:
    // Update View by using checked index from data
    //
    // 2.1 Update View | Img
    // 2.2 Update View | Title
    // 2.3 Update View | Max Items
    /* -------------------------------------------------------------------------- */

      /* -------------------------------------------------------- */
      /* 2.1 Update View | Img
      /* -------------------------------------------------------- */

        // Get Datas (global)
        var imgPath = data_layout_sport_categories.defaults.img_icon_src;
        var imgName = data_layout_sport_categories.sportCategories[checkedIndex].imgName;
        var imgFullPath = imgPath+imgName;

        var imgCssClass = data_layout_sport_categories.sportCategories[checkedIndex].imgClass;

        // console.log("imgPath = " + imgPath)
        // console.log("imgName = " + imgName)
        // console.log("imgCssClass = " + imgCssClass)

        // update img src
        update_imgElement_by_path_class( imgElement, imgFullPath, imgCssClass )


      /* -------------------------------------------------------- */
      /* 2.2 Update View | Title
      /* -------------------------------------------------------- */

        // get Datas (global)
        var textTitle = data_layout_sport_categories.sportCategories[checkedIndex].title;

        // console.log("textTitle = " + textTitle)

        // update text
        update_text_from_domElement( textTitle, textElement )


      /* -------------------------------------------------------- */
      /* 2.3 Update View | Max Items
      /* -------------------------------------------------------- */

        // not changed, something failed
        var setMaxItems = "-1";

        setMaxItems = await get_maxItems_from_sportCategory( checkedIndex )

        // set max items to selected sport category
        update_text_from_domElement( "("+setMaxItems+")", maxItemsElement);


       return new Promise(resolve => {
          resolve();
      })

  }

/* ---------------------------------------------------------------------- */
/* 🟩 Update | Header Sport Category by Index (global)
/* ---------------------------------------------------------------------- */

  async function update_header_sport_category_by_index( checkedIndex ) {

    // console.log("➡️ update_header_sport_category_by_index()")

    /* -------------------------------------------------------------------------- */
    // Step 1:
    // Get Dom Elements from "header_sport_category" (global)
    /* -------------------------------------------------------------------------- */

      var imgElement = header_sport_category.querySelector("img:nth-of-type(1)")
      var titleElement = header_sport_category.querySelector(":scope > div > div:nth-child(1)")
      var subTitleElement = header_sport_category.querySelector(":scope > div > div:nth-child(2)")

    /* ---------------------------------------------------------------------------------------- */
    // Step 2:
    // 2.1 Update View | img
    // 2.2 Update View | title & sub title
    /* ---------------------------------------------------------------------------------------- */

      /* -------------------------------------------------------------------------- */
      // 2.1 Update View | img
      /* -------------------------------------------------------------------------- */

        // Get Datas (global)
        var imgPath = data_layout_sport_categories.defaults.img_icon_src;
        var imgName = data_layout_sport_categories.sportCategoriesHeaders[checkedIndex].imgName;
        var imgFullPath = imgPath+imgName;

        var imgCssClass = data_layout_sport_categories.sportCategoriesHeaders[checkedIndex].imgClass;

        update_imgElement_by_path_class( imgElement, imgFullPath, imgCssClass )

      /* -------------------------------------------------------------------------- */
      // 2.2 Update View | title & sub title
      /* -------------------------------------------------------------------------- */

        // Get Datas (global)
        var textTitle = data_layout_sport_categories.sportCategoriesHeaders[checkedIndex].title;
        var textSubTitle = data_layout_sport_categories.sportCategoriesHeaders[checkedIndex].subTitle;

        // update title
        update_text_from_domElement( textTitle, titleElement )

        // update sub title
        update_text_from_domElement( textSubTitle, subTitleElement )



    return new Promise(resolve => {
        resolve();
    })

  }
