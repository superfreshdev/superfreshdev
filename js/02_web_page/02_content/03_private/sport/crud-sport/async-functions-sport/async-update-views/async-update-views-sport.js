// console.log("🟨 async-update-views-sport.js")


  /* --------------------------------------------------------------------------------------- */
  // 🟨🟩 Update View | Header Selected | Sport Category
  /* --------------------------------------------------------------------------------------- */

  async function update_view_header_selected_sport_category() {


    // console.log("➡️ update_view_header_selected_sport_category")

    /* --------------------------------------------------------------------------- */
    // Step 1:
    // Get Setted Index to Set Content
    // if any exist than default index = 0 will be setted
    /* --------------------------------------------------------------------------- */

      // global
      var setted_index = get_setted_radio_index( radios_sport_categories )
      var max_items = "";

      /* ----------------------------------------------------------------------- */
      // Step 1:
      // > Check if default selected sport category was setted ?!
      // > if any setted, than use default index = 0 = newest videos
      // > by index = 0 use max_items = max_newest_sport_videos
      // > by not index = 0 use max_items = max_sport_challenges
      /* ---------------------------------------------------------------------- */

      if( setted_index == -1 || setted_index == 0 ) {

        setted_index = 0;

        // global
        max_items = max_newest_sport_videos;


      } else {

        // global
        max_items = max_sport_challenges;

      }

      // console.log("⚠️Use[setted_index] = " + setted_index )
      // console.log("⚠️Use[max_items] = " + max_items )

      /* ---------------------------------------------- */
      // Update View | Selected Sport Category
      /* ---------------------------------------------- */

      update_view_selected_sport_category( setted_index ,
                                           max_items,
                                           data_header_nav_sport_categories )

      /* ---------------------------------------------- */
      // Update View | Header Sport Category
      /* ---------------------------------------------- */

      update_view_header_sport_category(
                                         setted_index,
                                         data_header_nav_sport_categories )

      return new Promise(resolve => {
        resolve();
      })

  }

  /* --------------------------------------------------------------------------------------- */
  // 🟨🟩 Update View | Selected | Sport Category
  /* --------------------------------------------------------------------------------------- */

  function update_view_selected_sport_category( setted_index , max_items, data_header_nav ) {

    /* ----------------------------------------------------- */
    /* Step 1:
    /* Get Data from Selected Sport Category
    /* ----------------------------------------------------- */

    var index = setted_index;

    var def_icon_path = data_header_nav.defaults.img_icon_src;

    var icon_name = data_header_nav.sportCategories[index].imgName;
    var icon_class = data_header_nav.sportCategories[index].imgClass;

    var title_sport_cateogry = data_header_nav.sportCategories[index].title;
    var max_items = max_items;

      // Prints
      // console.log("------------------------")
      // console.log("defaults:")
      // console.log(index + ": " + def_icon_path )

      // console.log("Setted Index = " + index )

      // console.log(index + ": " + sportCategory.imgName )
      // console.log(index + ": " + sportCategory.imgClass )
      // console.log(index + ": " + sportCategory.title )

      // console.log("Max Content Items = " + max_items)
      // console.log("------------------------")


    /* ----------------------------------------------------- */
    // Step 2: (global)
    // Update View | Selected Sport Category
    /* ----------------------------------------------------- */

      // Update | Img Src + CSS Class ( global )
      update_img_src_and_class( img_lbl_selected_sport_category, def_icon_path+icon_name, icon_class )

      // Update Title ( global )
      update_text( txt_lbl_selected_sport_category, title_sport_cateogry)

      // Update Max Items ( global )
      update_text( txt_count_lbl_selected_sport_category, "("+max_items+")")


    // set_radio( radios_sport_categories[index] )

    /* ----------------------------------------------------- */
    /* Step 2:
    /* Update | Nav
    /* ----------------------------------------------------- */

    // img
    // var def_img_path = data_layout_sport_categories.defImgSrc;
    // var img_name = data_layout_sport_categories.sportNavs[index].imgName;
    // var img_css_class = data_layout_sport_categories.sportNavs[index].imgCss;

    // title & max items
    // var title = data_layout_sport_categories.sportNavs[index].title;
    // var max_content_items = "";

    /* -------------------------------------------- */
    /* Count Max Countent Items
    /* ( Newest Vidoes, Challenges )
    /* -------------------------------------------- */

    // switch( index ) {

    //   // Update | Newest Videos
    //   case 0:
    //     max_content_items = max_content_items_newest_sport_videos;
    //     break;

    //   // Update | Challenges
    //   case 1:
    //     max_content_items = max_content_items_sport_challenges;
    //     break;

    //   default:
    //     console.log("🟥 Wrong Sport Category Index")
    //     break;

    // }

    /* ----------------------------------------------------- */
    /* Step 3
    /* Update Label | Setted Sport Category
    /* ----------------------------------------------------- */

    // Update Img Src + Css Class Selector
    // update_img_src_and_size( img_lbl_selected_sport_category, def_img_path+img_name, img_css_class )

    // Update Title
    // update_text( txt_lbl_selected_sport_category, title )

    // Update Max Items
    // txt_count_lbl_selected_sport_category.innerText = "("+max_content_items+")";

  }

  /* --------------------------------------------------------------------------------------- */
  // 🟨🟩 Update View | Header | Sport Category
  /* --------------------------------------------------------------------------------------- */

  function update_view_header_sport_category( setted_index, data_header_nav ) {


      // console.log("➡️ update_view_header_sport_category()")

      /* ----------------------------------------------------- */
      /* Step 1:
      /* Get Data from Header Sport Category
      /* ----------------------------------------------------- */

      var index = setted_index;

      var def_icon_path = data_header_nav.defaults.img_icon_src;

      var icon_name = data_header_nav.sportCategoriesHeaders[index].imgName;
      var icon_class = data_header_nav.sportCategoriesHeaders[index].imgClass;

      var title_header = data_header_nav.sportCategoriesHeaders[index].title;
      var sub_title_header = data_header_nav.sportCategoriesHeaders[index].subTitle;


      // Prints
      // console.log("------------------------")
      // console.log("defaults:")
      // console.log(index + ": " + def_icon_path )

      // console.log("Setted Index = " + index )

      // console.log(index + ": " + icon_name )
      // console.log(index + ": " + icon_class )
      // console.log(index + ": " + title_header )
      // console.log(index + ": " + sub_title_header )
      // console.log("------------------------")

      /* ----------------------------------------------------- */
      // Step 2: (global)
      // Update View | Header Sport Category
      /* ----------------------------------------------------- */

      // Update | Img Src + CSS Class ( global )
      update_img_src_and_class( img_header_sport_category, def_icon_path+icon_name, icon_class )

      // Update Title ( global )
      update_text( title_header_sport_category, title_header)

      // Update Max Items ( global )
      update_text( sub_title_header_sport_category, sub_title_header )



  }

  /* --------------------------------------------------------------------------------------- */
  // 🟨🟩 Update Views | Max Content Items | Select Sport Categories
  /* --------------------------------------------------------------------------------------- */

  async function update_views_max_content_items_select_sport_categories() {


    // console.log("➡️ update_views_max_content_items_select_sport_categories()")

    // global
    var labels_sport_categories = lbl_radios_sport_categories;
    // console.log("labels|sport_categories|length = " + labels_sport_categories.length )

    /* -------------------------------------------------------------------- */
    /* Update | Max Content Items | Select Sport Categories
    /* Using Global Data ( newest videos, challenges )
    /* ⚠️ This Labels must be exist, they dont
    /* will be dyn. create
    /* ------------------------------------------------ */

    // index = 0 = newest videos
    labels_sport_categories[0].querySelector("div > div > span:nth-of-type(2)").innerText = "("+max_newest_sport_videos+")";

    // index = 1 = sport challenges
    labels_sport_categories[1].querySelector("div > div > span:nth-of-type(2)").innerText = "("+max_sport_challenges+")";


    return new Promise(resolve => {
      resolve();
    })



  }
