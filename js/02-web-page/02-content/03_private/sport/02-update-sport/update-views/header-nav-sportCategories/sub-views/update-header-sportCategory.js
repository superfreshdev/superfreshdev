// console.log("🟨 update-header-sportCategory.js")



/* ---------------------------------------------------------------------- */
/* 🟩 Update View | Header | Sport Category
/* ---------------------------------------------------------------------- */

  async function update_view_header_sportCategory( checkedIndex ) {

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
        var imgDefaultPath = data_layout_defaultSport.defaults.imgDefaultBlackPath;

        var imgName = data_layout_sportCategories.headers[checkedIndex].imgName;
        var imgFullPath = ( imgDefaultPath + imgName );

        var imgCssClass = data_layout_sportCategories.headers[checkedIndex].imgClass;

        update_imgElement_by_path_class( imgElement, imgFullPath, imgCssClass )

      /* -------------------------------------------------------------------------- */
      // 2.2 Update View | title & sub title
      /* -------------------------------------------------------------------------- */

        // Get Datas (global)
        var textTitle = data_layout_sportCategories.headers[checkedIndex].title;
        var textSubTitle = data_layout_sportCategories.headers[checkedIndex].subTitle;

        // update title
        update_text_from_domElement( textTitle, titleElement )

        // update sub title
        update_text_from_domElement( textSubTitle, subTitleElement )



    return new Promise(resolve => {
        resolve();
    })

  }
