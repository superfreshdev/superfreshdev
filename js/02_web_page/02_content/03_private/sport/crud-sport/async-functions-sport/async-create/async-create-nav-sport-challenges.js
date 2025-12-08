// console.log("🟨 async-create-nav-sport-challenges.js")


/* ------------------------------------------------------------------------- */
// Async | Create Radios | Sport Challenges
/* ------------------------------------------------------------------------ */

  async function async_create_radios_sport_challenges() {

    console.log("➡️ create_radios_sport_challenges")

    /* ---------------------------------------------- */
    /* Step 1:
    /* Get Data for Radios
    /* ---------------------------------------------- */

    var data_new_radios = data_header_nav_sport_categories;

    var max_radios = data_new_radios.sportChallengeCategories.length;
    var new_radio = "";

    var radio_id = "";
    var radio_name = data_new_radios.defaultsSportChallenges.radio_name_sport_challenge;



    // prints
    // console.log("max_radios= " + max_radios )

    // defaults
    // console.log("defauls:")
    // console.log("radio_name:" + radio_name )

    /* ---------------------------------------------- */
    /* Step 2:
    /* 1.1 Create Radios from Data
    /* 1.2 Add New Radio to Add Point
    /* ---------------------------------------------- */

    for( let i=0; i < max_radios; i++ ) {

      radio_id = data_new_radios.sportChallengeCategories[i].radioId
      // console.log(i + ": " + radio_id )

      // create radio
      new_radio = get_new_radio( radio_id, radio_name );

      // add to add point
      add_element_to_add_point_append( new_radio, add_point_radio_sport_challenges )

    }

    return new Promise(resolve => {
        resolve();
    })

  }

/* ------------------------------------------------------------------------- */
// Async | Create Labels | Sport Challenges
/* ------------------------------------------------------------------------- */

  async function async_create_labels_sport_challenges() {

    console.log("➡️ create_labels_sport_challenges")

    /* ---------------------------------------------- */
    /* Step 1:
    /* Get Data for Labels
    /* ---------------------------------------------- */

    // data
    var data_labels = data_header_nav_sport_categories;

    // max label creations
    var max_labels = data_labels.sportChallengeCategories.length;

    // default title choose
    var title_choose = data_labels.defaultsSportChallenges.title_choose_sport_challenge;

    var radio_id = "";
    var label_class = data_labels.defaultsSportChallenges.label_class_sport_challenge;

    var title_label = "";
    var sub_title_label = "";

    var custom_radio_class = data_labels.defaults.custom_radio_class;
    var custom_radio_img_src = data_labels.defaults.custom_radio_img_src;

    // creation elements
    var new_label = "";
    var new_title_block = "";
    var new_custom_radio = "";


    /* ---------------------------------------------- */
    /* Step 2:
    /* 1.1 Create Labels from Data
    /* 1.2 Add New Label to Add Point
    /* ---------------------------------------------- */

     for( let i=0; i < max_labels; i++ ) {

        radio_id = data_labels.sportChallengeCategories[i].radioId;

        title_label =  data_labels.defaultsSportChallenges.title_sport_challenge;
        sub_title_label = data_labels.sportChallengeCategories[i].subTitle;

        // overwrite title_label only by index = 0 = Choose
        if( i == 0 ) {

          // overwrite to choose
          title_label = title_choose;

        } else {

          title_label = title_label+" #" + i;

        }

        // create label
        new_label = get_new_label( radio_id, label_class )

          // [Sub-Element] create double line
          new_title_block = get_new_div_double_line( title_label, "» "+sub_title_label );
          add_element_to_add_point_append( new_title_block, new_label )

          // [Sub-Element] create custom radio
          new_custom_radio = get_new_custom_radio( custom_radio_class, custom_radio_img_src );
          add_element_to_add_point_append( new_custom_radio, new_label )


        // add final to add point
        add_element_to_add_point_append( new_label, add_point_radio_labels_sport_challenges )

    }

    return new Promise(resolve => {
        resolve();
    })


  }

/* ------------------------------------------------------------------------- */
// ➡️🟥 Async | Create | Radio Change Listener | Sport Challenges
/* ------------------------------------------------------------------------- */

  async function async_create_radio_change_listener_sport_challenges() {

    console.log("➡️ async_create_radio_change_listener_sport_challenges ")

    /* ---------------------------------------------- */
    /* Step 1:
    /* Get Data for Radio & Labels
    /* ---------------------------------------------- */

    // data
    var data = data_header_nav_sport_categories;

    // get created | radios
    var radio_name = data.defaultsSportChallenges.radio_name_sport_challenge;
    var radio_elements = document.querySelectorAll('input[name="'+radio_name+'"]')
    var max_radios = radio_elements.length;

    // get created | labels
    var nav_sport_challenges = add_point_radio_labels_sport_challenges;
    var label_elements = nav_sport_challenges.querySelectorAll("label")
    var custom_radios_imgs = nav_sport_challenges.querySelectorAll("label > .custom-radio-small > img");

    // Prints
    // console.log("radio_elements(lenght) = " + radio_elements.length )
    // console.log("label_elements(lenght) = " + label_elements.length )
    // console.log("custom_radios|lenght=" + custom_radios_imgs.length )


    /* ---------------------------------------------- */
    // Step 2:
    // 2.1 Create Radio Change Lister
    // 2.2 Set CSS Styling & Handlings
    /* ---------------------------------------------- */

    for( let i=0; i < max_radios; i++ ) {


      /* ------------------------------------------------------- */
      /* Add | Radio Change Listener
      /* ------------------------------------------------------- */

      radio_elements[i].addEventListener( "change", ()=> {

        // window.alert("🦁 Jetzt gehts rund = " + i )

        /* -------------------------------------------------- */
        /* Unset | Old CSS Style & Handling
        /* -------------------------------------------------- */

          unset_elements_css_backgroundColor( label_elements )
          unset_elements_css_display_none( custom_radios_imgs )

          // unset content | fixed 30
          // global
          unset_element_css_display_none( content_fixed_30 )

          // unset content | default 3
          // global
          unset_element_css_display_none( content_default_3 )


        /* -------------------------------------------------- */
        /* Set | New CSS Style & Handling
        /* -------------------------------------------------- */

          // set css | background color
          label_elements[ i ].style.backgroundColor = "wheat";

          // css css | img custom radio
          custom_radios_imgs[ i ].style.display = "flex";

          // set css | set content by index
          // 0      = choose => banner
          // 1      = fixed 30 videos
          // Others = default 3 videos
          set_content_sport_challenges_by_index( i )


      } )

    }

    return new Promise(resolve => {
          resolve();
    })

  }
