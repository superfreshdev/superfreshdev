// console.log("🟨 update-selected-sportCategory.js")


/* ---------------------------------------------------------------------- */
/* 🟩 Update View | Selected | Sport Category
/* ---------------------------------------------------------------------- */

  async function update_view_selected_sportCategory( checkedIndex ) {

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
        var imgDefaultPath = data_layout_defaultSport.defaults.imgDefaultBlackPath;

        var imgName = data_layout_sportCategories.navs[checkedIndex].imgName;
        var imgFullPath = imgDefaultPath+imgName;

        var imgCssClass = data_layout_sportCategories.navs[checkedIndex].imgClass;

        // console.log("imgDefaultPath = " + imgDefaultPath)
        // console.log("imgName = " + imgName)
        // console.log("imgCssClass = " + imgCssClass)

        // update img src
        update_imgElement_by_path_class( imgElement, imgFullPath, imgCssClass )


      /* -------------------------------------------------------- */
      /* 2.2 Update View | Title
      /* -------------------------------------------------------- */

        // get Datas (global)
        var textTitle = data_layout_sportCategories.navs[checkedIndex].title;

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
