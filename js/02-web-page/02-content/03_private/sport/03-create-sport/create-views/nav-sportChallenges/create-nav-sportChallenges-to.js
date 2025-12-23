// console.log("🟨 create-nav-sportChallenges-to.js")


/* ------------------------------------------------------------------------------- */
/* 🟩 Async | Create View | Sport Challenges Nav
/* ------------------------------------------------------------------------------- */

  // create_view_nav_sport_challenges_to
  async function create_view_sport_challenges_nav() {

    // console.log("➡️ create_view_sport_challenges_nav()")

    /* ---------------------------------------------------------------------------- */
    // 🟩 Step 1:
    // 1.1 Create Radios | Sport Challenges
    // 1.2 Create Label  | Sport Challenges
    /* ---------------------------------------------------------------------------- */

      /* ---------------------------------------------------------------------------- */
      // 🟩 1.1 Create Radios | Sport Challenges
      /* ---------------------------------------------------------------------------- */

        /* ----------------------------------------------------- */
        /* Get Datas
        /* ----------------------------------------------------- */

          var radioId = "";
          var radioChecked = "";
          var radioElements = [];

          // data
          var dataRadios = data_layout_sport_categories.sportChallengeCategories;
          var radioName = data_layout_sport_categories.defaultsSportChallenges.radioName;

          // add point radios (global)
          var addPoint_of_radios = add_point_radio_sport_challenges;

        /* ----------------------------------------------------- */
        /*  Create Radios to "addPoint_of_radios"
        /* ----------------------------------------------------- */

          for( let i=0; i < dataRadios.length; i++ ) {

            // console.log(i + ": ");

            // set new radio data
            radioId = dataRadios[i].radioId;
            radioChecked = dataRadios[i].checked;

            // add new radio
            radioElements.push( await get_new_radio( radioId, radioName, radioChecked ) );

            // update new radio on view
            add_domElement_append_to( radioElements[i], addPoint_of_radios)

            // set css style | display:none to "radios"
            set_css_display_style_to( radioElements[i], "none" )

          }


      /* ---------------------------------------------------------------------------- */
      // 🟩 1.2 Create Labels | Sport Challenges
      /* ---------------------------------------------------------------------------- */

        /* ----------------------------------------------------- */
        /* Get Datas
        /* ----------------------------------------------------- */

          // data
          var dataLabel = "";
          var cssClassLabel = data_layout_sport_categories.defaultsSportChallenges.cssClassLabel;

          var titleChallenge = data_layout_sport_categories.defaultsSportChallenges.title;

          // default unset challenges
          var chooseTitle = data_layout_sport_categories.defaultsSportChallenges.chooseTitle;
          var chooseSubTitle = data_layout_sport_categories.defaultsSportChallenges.title;

          // will be dyn. setted in loop
          var labelFor = "";
          var labelElements = [];

          // css class custom radio
          var cssClassSmallCustomRadio = data_layout_sport_categories.defaults.cssClassSmallCustomRadio;

          // "addPoint" to add all labels (global)
          var addPoint_of_labels = add_point_radio_labels_sport_challenges;

        /* ----------------------------------------------------- */
        /*  Create Labels to "addPoint_of_labels"
        /* ----------------------------------------------------- */

          for( let i=0; i < dataRadios.length; i++ ) {

            // at the beginning create default Choose Challenge ...
            // Label (default unshown all challenges)
            if( i == 0 ) {

              // create new label sport challenges
              labelElements.push ( await get_new_action_element_2lines_with_customRadio( dataRadios[i].radioId,
                                                                                         cssClassLabel,
                                                                                         chooseTitle,
                                                                                         chooseSubTitle+"🦒",
                                                                                         cssClassSmallCustomRadio ) )

            } else {

              // create new label sport challenges
              labelElements.push ( await get_new_action_element_2lines_with_customRadio( dataRadios[i].radioId,
                                                                                         cssClassLabel,
                                                                                         titleChallenge+" #"+(i),
                                                                                         dataRadios[i].subTitle,
                                                                                         cssClassSmallCustomRadio ) )

            }

            // update new label on view
            add_domElement_append_to( labelElements[i], addPoint_of_labels)

          }

    return new Promise(resolve => {
        resolve();
    })

  }
