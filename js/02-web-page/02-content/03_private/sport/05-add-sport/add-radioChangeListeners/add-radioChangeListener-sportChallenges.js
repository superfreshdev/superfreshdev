// console.log("🟨 add-radio-change-listener-sport-challenge.js")


/* ----------------------------------------------------------------------------------- */
// ➡️🟥 Add | Radio Change Listener | Sport Challenges
/* ----------------------------------------------------------------------------------- */

  /* info:

      1. Get Datas
      2. Set CSS Checked Stying for Label
      3. Show Content by Radio Index ID
          - create if necessary or update only

  */

  async function add_radio_change_listener_sport_challenges() {

    console.log("➡️ add_radio_change_listener_sport_challenges()")


    /* ------------------------------------------------------------ */
    /* Step 1:
    /* Get "created" Radios | Sport Challenges
    /* ------------------------------------------------------------ */

      var get_created_radios = [];
      var radioName = data_layout_sport_categories.defaultsSportChallenges.radioName;

      // console.log("radioName= " +radioName)

      var data_radioChallenges = data_layout_sport_categories.sportChallengeCategories;

      // print_element_list( data_radioChallenges )

      var radioIds = await get_arrays_from_data_by_propertName( data_radioChallenges, "radioId");

      // print_element_list( radioIds )


      // get "created" radios from dom
      get_created_radios = await get_all_radioElements_by_name( radioName );

      var maxRadios = get_created_radios.length;

      // console.log("maxRadios= " +maxRadios)



    /* ------------------------------------------------------------ */
    /* Step 2:
    /* Get "created" Labels | Sport Challenges
    /* ------------------------------------------------------------ */

      var get_created_labels = [];
      var cssClass_activeLabel = data_layout_sport_categories.defaultsSportChallenges.cssClassLabelActive;;

      // get "created" labels from dom
      get_created_labels = await get_all_labels_by_forArray( radioIds )


    /* -------------------------------------------------------------------------------------------- */
    // ➡️🟥 Step 3:
    // ➡️🟥 1. Add  "Radio Change Listener" to "radios of sport challenges"
    // 🟨 1.1 Set   CSS Style by checked to "label"
    // 🟥 1.2 Set   Content ( choose, 30 videos, 3 videos )
    //       - create if necessary or update only
    /* -------------------------------------------------------------------------------------------- */


      /* ----------------------------------------------------------------------------------------- */
      /* ➡️🟥 1. Add  "Radio Change Listener" to "radios of sport challenges"
      /* ----------------------------------------------------------------------------------------- */

        for( let radioIndex=0; radioIndex < maxRadios; radioIndex++ ) {

            get_created_radios[radioIndex].addEventListener("change", async() => {


              /* ----------------------------------------------------------------------------------------- */
              /* 🟨 1.1 Set CSS Style by checked to "label"
              /* ----------------------------------------------------------------------------------------- */

                /* ----------------------------------------------------------- */
                // Step 1:
                // Reset css class "active-sport-challenge" from all labels
                /* ----------------------------------------------------------- */

                  get_created_labels.forEach(label => {

                    // console.log("Label= " + label.getAttribute("for"))
                    label.classList.remove( cssClass_activeLabel );

                  })

                /* ----------------------------------------------------------- */
                // Step 2:
                // Add css class "active-sport-challenge" to active label
                /* ----------------------------------------------------------- */

                  get_created_labels[radioIndex].classList.add( cssClass_activeLabel );



              /* ----------------------------------------------------------------------------------------- */
              // 🟥 1.2 Set Content by Radio Index ( choose, 30 videos, 3 videos )
              /* ----------------------------------------------------------------------------------------- */

                /* info:

                    0:    content = choose challenge (empty view)
                    1:    content = 30 videos sport challenge ( exist only one time )
                    >=2:  content = 3 videos sport challenges ( many sport challenges )

                    Steps:

                      1. set content by index
                          - look if content should create or only update

                */

                switch( radioIndex ) {

                  case 0:

                    /* -------------------------------------------- */
                    /* 🟥 Set Content | Choose Challenge
                    /* -------------------------------------------- */

                      window.alert("➡️ Set Content | Choose Challenge | Radio Index = " + radioIndex )

                      await set_content_sport_challenges_choose();

                    break;

                  case 1:

                    /* --------------------------------------------------------------- */
                    /* 🟥 Set Content | Sport Challenge 15 Videos Link Container
                    /* --------------------------------------------------------------- */

                      window.alert("➡️ Set Content | 30 Sport Videos Link Container | Radio Index = " + radioIndex )

                      // await set_content_15_videos_link_container();


                    break;

                  default:

                    /* --------------------------------------------------------------- */
                    /* ➡️🟥 Set Content | Sport Challenge 3 Videos Link Container
                    /* --------------------------------------------------------------- */

                      window.alert("➡️ Set Content | 3 Videos Link Container | Radio Index = " + radioIndex )


                        /* info

                          we calc with -2 because our data array index begins by 0
                          and in this case we have minimun the radio index of 2.
                          So to get e.g the first data by index 0 we must
                          calc radio index with minus 2. By radio index 3 we calc
                          minus 2 and get data index 1 and so on.

                          We jumped over "choose" and "30videos" content.

                        */

                        await set_content_3_videos_link_container( (radioIndex -2) );

                    break;


                }


            })



        }


     return new Promise(resolve => {
        resolve();
    })

  }
