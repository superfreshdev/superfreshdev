// console.log("🟨 async-update-view-sport-elements.js")


  /* ---------------------------------------------------------------------------------------------------- */
  /* 🟩 Update View | Header Sport Category
  /* ---------------------------------------------------------------------------------------------------- */

  async function update_view_header_sport_category( radios, headerElement ) {

    // console.log("➡️ update_view_header_sport_category()")

      /* -------------------------------------------------------------------------- */
      // Step 1:
      // Get Dom Elements from "headerElement"
      /* -------------------------------------------------------------------------- */

        var imgElement = headerElement.querySelector("img:nth-of-type(1)")
        var titleElement = headerElement.querySelector(":scope > div > div:nth-child(1)")
        var subTitleElement = headerElement.querySelector(":scope > div > div:nth-child(2)")

      /* -------------------------------------------------------------------------- */
      // Step 2:
      // Check which Sport Category Index was checked.
      // If no one was checked, set default index 0
      /* -------------------------------------------------------------------------- */

        //if not changed, than use default index 0
        var checkedIndex = 0;

        // console.log("radios[length]= " + radios.length )

        for( let i=0; i < radios.length; i++ ) {

          // console.log(i + ": " + radios[i].getAttribute("id") )

          if( radios[i].checked == true ) {

            checkedIndex = i;
            i = radios.length;

          }

        }

    /* ---------------------------------------------------------------------------------------- */
    // Step 3:
    // 3.1 Get New Data for "img"
    // 3.2 Update View "img"
    /* ---------------------------------------------------------------------------------------- */

      /* -------------------------------------------------------------------------- */
      // 3.1 Get New Data for "img"
      /* -------------------------------------------------------------------------- */

        // Get Datas (global)
        var imgPath = data_header_nav_sport_categories.defaults.img_icon_src;
        var imgName = data_header_nav_sport_categories.sportCategoriesHeaders[checkedIndex].imgName;
        var imgFullPath = imgPath+imgName;

        var cssClassImg = data_header_nav_sport_categories.sportCategoriesHeaders[checkedIndex].imgClass;

        // console.log("imgPath = " + imgPath)
        // console.log("imgName = " + imgName)
        // console.log("cssClassImg = " + cssClassImg)

      /* -------------------------------------------------------------------------- */
      // 3.2 Update View "img"
      /* -------------------------------------------------------------------------- */

        update_img_src_and_class( imgElement, imgFullPath, cssClassImg )


    /* ---------------------------------------------------------------------------------------- */
    // Step 4:
    // 4.1 Get New Data for "title, subTitle"
    // 4.2 Update View "title, subTitle"
    /* ---------------------------------------------------------------------------------------- */

      /* -------------------------------------------------------------------------- */
      // 4.1 Get New Data for "title, subTitle"
      /* -------------------------------------------------------------------------- */

        // Get Datas (global)
        var textTitle = data_header_nav_sport_categories.sportCategoriesHeaders[checkedIndex].title;
        var textSubTitle = data_header_nav_sport_categories.sportCategoriesHeaders[checkedIndex].subTitle;

        // console.log("textTitle = " + textTitle)
        // console.log("textSub = " + textSubTitle)

      /* -------------------------------------------------------------------------- */
      // 4.2 Update View "title, subTitle"
      /* -------------------------------------------------------------------------- */

        // update title
        update_text_to_element( textTitle, titleElement )

        // update sub title
        update_text_to_element( textSubTitle, subTitleElement )


    return new Promise(resolve => {
        resolve();
    })

  }

  /* ---------------------------------------------------------------------------------------------------- */
  /* 🟩 Update View | Label Selected Sport Category
  /* ---------------------------------------------------------------------------------------------------- */

  async function update_view_label_selected_sport_category( radios, labelSelected ) {

    // console.log("➡️ update_view_label_selected_sport_category()")

    /* -------------------------------------------------------------------------- */
    // Step 1:
    // Get Dom Elements of "labelSelected"
    /* -------------------------------------------------------------------------- */

    var imgElement = labelSelected.querySelector("div:nth-of-type(1) > img:nth-of-type(1)")
    var textElement = labelSelected.querySelector("div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(1)")
    var maxItemsElement = labelSelected.querySelector("div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(2)")

    /* -------------------------------------------------------------------------- */
    // Step 2:
    // Check which Sport Category Index was checked.
    // If no one was checked, set default index 0
    /* -------------------------------------------------------------------------- */

      // if not changed, than use default index 0
      var checkedIndex = 0;

      // console.log("radios[length]= " + radios.length )

      for( let i=0; i < radios.length; i++ ) {

        // console.log(i + ": " + radios[i].getAttribute("id") )

        if( radios[i].checked == true ) {

          checkedIndex = i;
          i = radios.length;

        }

      }

    /* -------------------------------------------------------------------------- */
    // Step 3:
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
        var imgPath = data_header_nav_sport_categories.defaults.img_icon_src;
        var imgName = data_header_nav_sport_categories.sportCategories[checkedIndex].imgName;
        var imgFullPath = imgPath+imgName;

        var cssClassImg = data_header_nav_sport_categories.sportCategories[checkedIndex].imgClass;

        // console.log("imgPath = " + imgPath)
        // console.log("imgName = " + imgName)
        // console.log("cssClassImg = " + cssClassImg)

        // update img src
        update_img_src_and_class( imgElement, imgFullPath, cssClassImg )

      /* -------------------------------------------------------- */
      /* 2.2 Update View | Title
      /* -------------------------------------------------------- */

        // get Datas (global)
        var textTitle = data_header_nav_sport_categories.sportCategories[checkedIndex].title;

        // console.log("textTitle = " + textTitle)

        // update text
        update_text_to_element( textTitle, textElement )


      /* -------------------------------------------------------- */
      /* 2.3 Update View | Max Items
      /* -------------------------------------------------------- */

        // Set Max Content Items (globals)
        switch( checkedIndex ) {

          case 0:
            // set max content items | newest vidoes (global)
            update_text_to_element( "("+max_content_items_sport_newest_videos+")", maxItemsElement);
            break;

          case 1:
            // set max content items | challenges (global)
            update_text_to_element( "("+max_content_items_sport_challenges+")", maxItemsElement);
            break;

          default:
            break;
        }

    return new Promise(resolve => {
        resolve();
    })

  }

  /* ---------------------------------------------------------------------------------------------------- */
  /* 🟩 Update Views | Labels Select Sport Categories
  /* ---------------------------------------------------------------------------------------------------- */

  async function update_views_labels_select_sport_categories( labels ) {

    // console.log("➡️ update_views_labels_select_sport_categories()")

    /* Reminder:

      we only have 2 fixed sport categories and
      our max content items of boths was count before
      in var-dom-sport.js.
      Thats why we set max items by index.

    */

    var spanMaxItems = "";
    var spanMaxItemsSelector = "div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(2)";

    for( let i=0; i < labels.length; i++ ) {

        // console.log( i + ": labels= " + labels[i] )

        /* ------------------------------------------------------- */
        /* Only Update Max Countet Items
        /* ------------------------------------------------------- */

        // create label span max items selector
        spanMaxItems = labels[i].querySelector( spanMaxItemsSelector );

        switch( i ){

          case 0:
            // use max content items of newest vidoes
            update_text_to_element( "("+max_content_items_sport_newest_videos+")", spanMaxItems )
            break;

          case 1:
            // use max content items of challenges
            update_text_to_element( "("+max_content_items_sport_challenges+")", spanMaxItems )
            break;

          default:
            return;

        }

    }

    return new Promise(resolve => {
        resolve();
    })

  }

  /* ---------------------------------------------------------------------- */
  /* ➡️🟥 Async | Set Start Views | Header Nav Sport Categories
  /* ---------------------------------------------------------------------- */

  async function async_set_start_views_header_nav_sport_categories() {

    // console.log("➡️ async_set_start_views_header_nav_sport_categories()")

    /* ------------------------------------------------------------- */
    // 🟩 Step 1:
    // Update Views | Labels Select Sport Categories
    // > set only max content items
    /* ------------------------------------------------------------- */

      // global
      await update_views_labels_select_sport_categories( lbl_radios_sport_categories );

    /* ------------------------------------------------------------- */
    /* 🟩 Step 2
    /* Update View | Label Selected Sport Category
    /* ------------------------------------------------------------- */

      // global
      await update_view_label_selected_sport_category( radios_sport_categories, lbl_selected_sport_category );

    /* ------------------------------------------------------------- */
    /* 🟩 Step 3:
    /* Update View | Header Sport Category
    /* ------------------------------------------------------------- */

      // global
      await update_view_header_sport_category( radios_sport_categories, header_sport_category );


    return new Promise(resolve => {
        resolve();
    })


  }

  /* ---------------------------------------------------------------------- */
  /* ➡️🟥 Async | Update Views | Header Nav Sport Categories
  /* ---------------------------------------------------------------------- */

  // async function async_update_views_header_nav_sport_categories() {

  //   console.log("➡️ async_update_views_header_nav_sport_categories()")

  //   /* ------------------------------------------------------------- */
  //   // 🟩 Step 1:
  //   // Update Views | Labels Select Sport Categories
  //   // > set only max content items
  //   /* ------------------------------------------------------------- */

  //     // global
  //     await update_views_labels_select_sport_categories( lbl_radios_sport_categories );

  //   /* ------------------------------------------------------------- */
  //   /* 🟩 Step 2
  //   /* Update View | Label Selected Sport Category
  //   /* ------------------------------------------------------------- */

  //     // global
  //     await update_view_label_selected_sport_category( radios_sport_categories, lbl_selected_sport_category );

  //   /* ------------------------------------------------------------- */
  //   /* ➡️🟥Step 3:
  //   /* Update View | Header Sport Category
  //   /* ------------------------------------------------------------- */


  //     /*

  //           1. set_basic_view_header_nav_sport_categories

  //           2. update_view_header_nav_sport_categorey( checkedIndex )


  //           -------------------------------------------------------------------------

  //           1. update header
  //           2. add radio change listener to sport categories to update (extra module)
  //               - update: gezielt header + selected nur

  //           3.1 create radio challenges, labels, radio changel listner

  //     */



  //   return new Promise(resolve => {
  //       resolve();
  //   })


  // }

























  /* --------------------------------------------------------------------------------------- */
  // ❌❌❌ Trash
  /* --------------------------------------------------------------------------------------- */

  /* --------------------------------------------------------------------------------------- */
  // 🟨🟩 Update View | Header Selected | Sport Category
  /* --------------------------------------------------------------------------------------- */

  // async function update_view_header_selected_sport_category() {


  //   // console.log("➡️ update_view_header_selected_sport_category")

  //   /* --------------------------------------------------------------------------- */
  //   // Step 1:
  //   // Get Setted Index to Set Content
  //   // if any exist than default index = 0 will be setted
  //   /* --------------------------------------------------------------------------- */

  //     // global
  //     var setted_index = get_setted_radio_index( radios_sport_categories )
  //     var max_items = "";

  //     /* ----------------------------------------------------------------------- */
  //     // Step 1:
  //     // > Check if default selected sport category was setted ?!
  //     // > if any setted, than use default index = 0 = newest videos
  //     // > by index = 0 use max_items = max_newest_sport_videos
  //     // > by not index = 0 use max_items = max_sport_challenges
  //     /* ---------------------------------------------------------------------- */

  //     if( setted_index == -1 || setted_index == 0 ) {

  //       setted_index = 0;

  //       // global
  //       max_items = max_newest_sport_videos;


  //     } else {

  //       // global
  //       max_items = max_sport_challenges;

  //     }

  //     // console.log("⚠️Use[setted_index] = " + setted_index )
  //     // console.log("⚠️Use[max_items] = " + max_items )

  //     /* ---------------------------------------------- */
  //     // Update View | Selected Sport Category
  //     /* ---------------------------------------------- */

  //     update_view_selected_sport_category( setted_index ,
  //                                          max_items,
  //                                          data_header_nav_sport_categories )

  //     /* ---------------------------------------------- */
  //     // Update View | Header Sport Category
  //     /* ---------------------------------------------- */

  //     update_view_header_sport_category(
  //                                        setted_index,
  //                                        data_header_nav_sport_categories )

  //     return new Promise(resolve => {
  //       resolve();
  //     })

  // }

  /* --------------------------------------------------------------------------------------- */
  // 🟨🟩 Update View | Selected | Sport Category
  /* --------------------------------------------------------------------------------------- */

  // function update_view_selected_sport_category( setted_index , max_items, data_header_nav ) {

  //   /* ----------------------------------------------------- */
  //   /* Step 1:
  //   /* Get Data from Selected Sport Category
  //   /* ----------------------------------------------------- */

  //   var index = setted_index;

  //   var def_icon_path = data_header_nav.defaults.img_icon_src;

  //   var icon_name = data_header_nav.sportCategories[index].imgName;
  //   var icon_class = data_header_nav.sportCategories[index].imgClass;

  //   var title_sport_cateogry = data_header_nav.sportCategories[index].title;
  //   var max_items = max_items;

  //     // Prints
  //     // console.log("------------------------")
  //     // console.log("defaults:")
  //     // console.log(index + ": " + def_icon_path )

  //     // console.log("Setted Index = " + index )

  //     // console.log(index + ": " + sportCategory.imgName )
  //     // console.log(index + ": " + sportCategory.imgClass )
  //     // console.log(index + ": " + sportCategory.title )

  //     // console.log("Max Content Items = " + max_items)
  //     // console.log("------------------------")


  //   /* ----------------------------------------------------- */
  //   // Step 2: (global)
  //   // Update View | Selected Sport Category
  //   /* ----------------------------------------------------- */

  //     // Update | Img Src + CSS Class ( global )
  //     update_img_src_and_class( img_lbl_selected_sport_category, def_icon_path+icon_name, icon_class )

  //     // Update Title ( global )
  //     update_text( txt_lbl_selected_sport_category, title_sport_cateogry)

  //     // Update Max Items ( global )
  //     update_text( txt_count_lbl_selected_sport_category, "("+max_items+")")


  //   // set_radio( radios_sport_categories[index] )

  //   /* ----------------------------------------------------- */
  //   /* Step 2:
  //   /* Update | Nav
  //   /* ----------------------------------------------------- */

  //   // img
  //   // var def_img_path = data_layout_sport_categories.defImgSrc;
  //   // var img_name = data_layout_sport_categories.sportNavs[index].imgName;
  //   // var img_css_class = data_layout_sport_categories.sportNavs[index].imgCss;

  //   // title & max items
  //   // var title = data_layout_sport_categories.sportNavs[index].title;
  //   // var max_content_items = "";

  //   /* -------------------------------------------- */
  //   /* Count Max Countent Items
  //   /* ( Newest Vidoes, Challenges )
  //   /* -------------------------------------------- */

  //   // switch( index ) {

  //   //   // Update | Newest Videos
  //   //   case 0:
  //   //     max_content_items = max_content_items_newest_sport_videos;
  //   //     break;

  //   //   // Update | Challenges
  //   //   case 1:
  //   //     max_content_items = max_content_items_sport_challenges;
  //   //     break;

  //   //   default:
  //   //     console.log("🟥 Wrong Sport Category Index")
  //   //     break;

  //   // }

  //   /* ----------------------------------------------------- */
  //   /* Step 3
  //   /* Update Label | Setted Sport Category
  //   /* ----------------------------------------------------- */

  //   // Update Img Src + Css Class Selector
  //   // update_img_src_and_size( img_lbl_selected_sport_category, def_img_path+img_name, img_css_class )

  //   // Update Title
  //   // update_text( txt_lbl_selected_sport_category, title )

  //   // Update Max Items
  //   // txt_count_lbl_selected_sport_category.innerText = "("+max_content_items+")";

  // }

  /* --------------------------------------------------------------------------------------- */
  // 🟨🟩 Update View | Header | Sport Category
  /* --------------------------------------------------------------------------------------- */

  // function update_view_header_sport_category( setted_index, data_header_nav ) {


  //     // console.log("➡️ update_view_header_sport_category()")

  //     /* ----------------------------------------------------- */
  //     /* Step 1:
  //     /* Get Data from Header Sport Category
  //     /* ----------------------------------------------------- */

  //     var index = setted_index;

  //     var def_icon_path = data_header_nav.defaults.img_icon_src;

  //     var icon_name = data_header_nav.sportCategoriesHeaders[index].imgName;
  //     var icon_class = data_header_nav.sportCategoriesHeaders[index].imgClass;

  //     var title_header = data_header_nav.sportCategoriesHeaders[index].title;
  //     var sub_title_header = data_header_nav.sportCategoriesHeaders[index].subTitle;


  //     // Prints
  //     // console.log("------------------------")
  //     // console.log("defaults:")
  //     // console.log(index + ": " + def_icon_path )

  //     // console.log("Setted Index = " + index )

  //     // console.log(index + ": " + icon_name )
  //     // console.log(index + ": " + icon_class )
  //     // console.log(index + ": " + title_header )
  //     // console.log(index + ": " + sub_title_header )
  //     // console.log("------------------------")

  //     /* ----------------------------------------------------- */
  //     // Step 2: (global)
  //     // Update View | Header Sport Category
  //     /* ----------------------------------------------------- */

  //     // Update | Img Src + CSS Class ( global )
  //     update_img_src_and_class( img_header_sport_category, def_icon_path+icon_name, icon_class )

  //     // Update Title ( global )
  //     update_text( title_header_sport_category, title_header)

  //     // Update Max Items ( global )
  //     update_text( sub_title_header_sport_category, sub_title_header )



  // }

  /* --------------------------------------------------------------------------------------- */
  // 🟨🟩 Update Views | Max Content Items | Select Sport Categories
  /* --------------------------------------------------------------------------------------- */

  // async function update_views_max_content_items_select_sport_categories() {


  //   // console.log("➡️ update_views_max_content_items_select_sport_categories()")

  //   // global
  //   var labels_sport_categories = lbl_radios_sport_categories;
  //   // console.log("labels|sport_categories|length = " + labels_sport_categories.length )

  //   /* -------------------------------------------------------------------- */
  //   /* Update | Max Content Items | Select Sport Categories
  //   /* Using Global Data ( newest videos, challenges )
  //   /* ⚠️ This Labels must be exist, they dont
  //   /* will be dyn. create
  //   /* ------------------------------------------------ */

  //   // index = 0 = newest videos
  //   labels_sport_categories[0].querySelector("div > div > span:nth-of-type(2)").innerText = "("+max_newest_sport_videos+")";

  //   // index = 1 = sport challenges
  //   labels_sport_categories[1].querySelector("div > div > span:nth-of-type(2)").innerText = "("+max_sport_challenges+")";


  //   return new Promise(resolve => {
  //     resolve();
  //   })



  // }
