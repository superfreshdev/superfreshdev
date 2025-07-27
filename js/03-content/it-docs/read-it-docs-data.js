console.log("🟨 read-it-docs-data.js")

// ⚠️⚠️⚠️ umändern -> Create It Doc Category Container

/*

  #################################################
  ### Logic Steps ###
  #################################################

  #🟥 Step 1/2:
  > Read Concrete Data Obj from Json File by given settedIndex
  from setted IT Doc Category

  #🟥 Step 2/2:
  > Create to 'add Parent Point' the docs card containers
  with their 'container header' & 'container card list'

###################################################

*/

/* ------------------------------------------------------------------------------ */
/* ⬛ DOM Elements
/* ------------------------------------------------------------------------------ */

// parent Dom Element to add all layouts
const add_to_it_docs_content_list = document.getElementById('my-it-docs-content-list');


/* ------------------------------------------------------------------------------ */
/* ⬛ VAR Elements
/* ------------------------------------------------------------------------------ */

// parent of 'container header' & 'container card list'
var string_class_docs_card_container = "my-it-docs-card-container";


/* ------------------------------------------------------------------------------ */
/* ⬛ Functions
/* ------------------------------------------------------------------------------ */

    // Get Concrete Data from Json File By Setted Index
    // i: i want json file more readable so i define first elements by name
    //    & not by array index
    function get_data_it_doc_category_by_index ( jsonData, settedIndex ) {


      switch( settedIndex ) {

        case 0:
          return jsonData.web_basic
        case 1:
          return jsonData.software_basic
        case 2:
          return jsonData.algorithmn;
        case 3:
          return jsonData.it_tools
        case 4:
          return jsonData.expertise
        case 5:
          return jsonData.web_dev
        case 6:
          return jsonData.software_dev
        case 7:
          return jsonData.apis
        case 8:
          return jsonData.software_quality
        case 9:
          return jsonData.data_science
        case 10:
          return jsonData.software_architecture
        case 11:
          return jsonData.database
        case 12:
          return jsonData.devops

        default:
          return -1;

      }

    }

    // Create Layout - IT Doc Card Container Header
    function create_layout_it_doc_card_container_header( dataHeader ) {


      /* ------------------------------------------------------ */
      /* Just for Testing to get Data
      /* ------------------------------------------------------ */

      // console.log('⭐ = ' + dataHeader.title )
      // console.log('🪲 = ' + dataHeader.img_filename )
      // console.log('😶‍🌫️ = ' + dataHeader.img_css_class )
      // console.log('-------------')

      /* --------------------------------------------------------- */
      /* Create Layout Process | Doc Container Header
      /* --------------------------------------------------------- */

      // Parent Header
      const newHeader = createHeaderClass( "my-it-docs-card-container-header");

        // create dom
        var newTitleElement = createDivClass( "my-it-docs-card-container-header-title" );

        // create doms
        var imgTitle = createImgClass( dataHeader.img_filename, dataHeader.img_css_class ) ;
        var textTitle = createDivText( dataHeader.title )

        // add doms to 'newTitleElement'
        newTitleElement.append( imgTitle );
        newTitleElement.append( textTitle );

        // add 'newTitleElement' to 'new header'
        newHeader.append( newTitleElement );

        return newHeader

    }

    // Create Layout - IT Doc Card Container Card List
    function create_layout_it_doc_card_container_card_list( defaultImgPath, dataCardList ) {


      /* ------------------------------------------------------ */
      /* Just for Testing to get Data
      /* ------------------------------------------------------ */

       // default img card path
      console.log("🐸 (default Img Path)= " + defaultImgPath )

      for( let i=0; i < dataCardList.length; i++ ) {

        console.log('⭐ = ' + dataCardList[i].img_filename )
        console.log('🪲 = ' + dataCardList[i].pdf_url )
        console.log('😶‍🌫️ = ' + dataCardList[i].status_text )
        console.log('-------------')

      }

      /* ------------------------------------- */
      /* Dom Elements of Container Card List
      /* ------------------------------------- */

      // container card list
      var string_class_docs_card_container_card_list = "my-it-docs-card-container-card-list";

      // my it docs card
      var string_class_docs_card = "my-it-docs-card";
      // status of my it docs card
      var string_class_docs_card_in_progress = "my-it-docs-card-in-progress";
      var string_class_docs_card_coming_soon = "my-it-docs-card-coming-soon";
      var string_class_docs_card_actually_no_priority = "my-it-docs-card-actually-no-priority";

      // Status Divs
      var string_class_docs_in_progress_element = "it-doc-in-progress-element";
      var string_class_docs_coming_soon_element = "it-doc-coming-soon-element";
      var string_class_docs_acutally_no_priority_element = "it-doc-actually-no-priority-element";

      var string_class_docs_card_img = "my-it-docs-card-img";
      var string_class_docs_card_link_container = "my-it-docs-card-link-container";


      /* --------------------------------------------------------- */
      /* Create Layout Process
      /* > Create Container Card List with all IT Doc Cards
      /* --------------------------------------------------------- */

        /* -------------------------------------------------- */
        /* Create | Container Card List
        /* -------------------------------------------------- */
        var newCardList = createDivClass( string_class_docs_card_container_card_list )


          /* ------------------------------------------------------ */
          /* Create & Add | 'IT Doc Card's' to ' Card List'
          /* ------------------------------------------------------ */

          for( let i=0; i < dataCardList.length; i++ ) {


            /* -------------------------------------------------- */
            /* Create & Add | My It Docs Card 'Status Art'
            /* -------------------------------------------------- */

            switch( dataCardList[i].status_text ) {

              case "In Progress":

                // create 'in progress' - it doc card
                var newItDocCard = createDivClass( string_class_docs_card_in_progress );

                // create & add 'in progress element'
                var newInProgressElement = createDivClassText( string_class_docs_in_progress_element, dataCardList[i].status_text );
                newItDocCard.append( newInProgressElement )

                break;

              case "Coming Soon":

                // create 'coming soon' - it doc card
                var newItDocCard = createDivClass( string_class_docs_card_coming_soon );

                // create & add 'coming soon element'
                var newComingSoonElement = createDivClassText( string_class_docs_coming_soon_element, dataCardList[i].status_text );
                newItDocCard.append( newComingSoonElement )

                break;

              case "Actually No Priority":

                // create 'actually no priority' - it doc card
                var newItDocCard = createDivClass( string_class_docs_card_actually_no_priority );

                // create & add 'actually no priority element'
                var newActuallyNoPriorityElement = createDivClassText( string_class_docs_acutally_no_priority_element, dataCardList[i].status_text );
                newItDocCard.append( newActuallyNoPriorityElement )

                break;

              default:

                // create 'actually no priority' - it doc card
                var newItDocCard = createDivClass( string_class_docs_card );

                break;

            }

            /* -------------------------------------------------- */
            /* Create & Add | Img to 'My IT Docs Card'
            /* -------------------------------------------------- */

            var imgPath = defaultImgPath + dataCardList[i].img_filename;
            var newImgItDocCard = createImgClass( imgPath, string_class_docs_card_img )

            // add img to 'it docs card'
            newItDocCard.append( newImgItDocCard )

            /* -------------------------------------------------- */
            /* Create | Link to 'My IT Docs Card'
            /* -------------------------------------------------- */

            var newDocLinkContainer = createDivClass( string_class_docs_card_link_container )
            var newDocLink = createLinkText( dataCardList[i].pdf_url, "Show PDF🐸" )

            newDocLinkContainer.append( newDocLink )

            newItDocCard.append( newDocLinkContainer )


            // ---------------------------------------------------------- */
            /* Add 'My IT Doc Card' to 'new card list'
            /* ---------------------------------------------------------- */

            newCardList.append( newItDocCard );

          }


        return newCardList;

    }










  /* ---------------------------------------------------------- */
  /* Async Functions
  /* ---------------------------------------------------------- */

    /* ---------------------------------------------------------- */
    /*  Get JSON File |
    /* > read data by settedIndex
    /* > use add Parent Point to adding all creating layouts
    /* ---------------------------------------------------------- */

    async function get_data_from_it_doc_cards( jsonFile , settedIndex ) {


      try {

            /* -------------------------------------------------- */
            /* Step 1 | Try to Get & Read Json File
            /* -------------------------------------------------- */

            // try to get json file
            const response = await fetch( jsonFile );

            // if not ok
            if( !response.ok ) {
                console.log("🔴: Can't get JSON-File | " + response.status )
                return false;
            }

            // try to read json file
            const data = await response.json();

            /* -------------------------------------------------- */
            /* Step 2 | Get Default Datas from JSON File
            /* -------------------------------------------------- */

            var main_img_docs_path = data.defaults.img_doc_cards_path;
            var pdf_docs_link_text = data.defaults.pdf_link_text;

            console.log("⚠️⚠️⚠️⚠️")
            console.log("🛠️ = " +  main_img_docs_path )
            console.log("🛠️ = " + pdf_docs_link_text )
            console.log("⚠️⚠️⚠️⚠️")

            /* -------------------------------------------------- */
            /* Step 3 | Get Concrete Data by Setted Index
            /* -------------------------------------------------- */

            var data_doc_category =  get_data_it_doc_category_by_index( data , settedIndex )


            /* -------------------------------------------------- */
            /* Step 4 | Check if settedIndex was found
            /* -------------------------------------------------- */

            if( data_doc_category != -1 ) {

              // was found

              console.log( "🦍:(settedIndex)= " + settedIndex)
              console.log( "🦍:(objData)= " + data_doc_category.defaults.img_path_folder )

              /* --------------------------------------------------------- */
              /* Step 1 | Delete old Doc Containers if any exist
              /* --------------------------------------------------------- */

              // delete class elements
              removeDomElementsBySelector( add_to_it_docs_content_list , "."+string_class_docs_card_container )

              /* --------------------------------------------------------- */
              /* Step 2 | Create Layout Doc Containers
              /* --------------------------------------------------------- */

              // get full img path of doc category
              var category_img_path = data_doc_category.defaults.img_card_path;
              var img_docs_path = main_img_docs_path + category_img_path;

              // data Doc Containers & Count of Doc Containers
              var dataDocContainers = data_doc_category.it_doc_card_containers;
              var maxDocContainers = data_doc_category.it_doc_card_containers.length;

              console.log( "🌳 (Max Doc Containers) = " + maxDocContainers );


                  /* -------------------------------------------------- */
                  /* Creating Containers with "It Doc Cards"
                  /* -------------------------------------------------- */

                  for( let i=0; i < maxDocContainers; i++ ) {


                    /* -------------------------------------------------- */
                    /* [1/5] | Create | Card Container
                    /* -------------------------------------------------- */

                    var newDocCardContainer = createDivClass( string_class_docs_card_container );

                        /* -------------------------------------------------- */
                        /* Create | Container Header
                        /* -------------------------------------------------- */

                        var newHeader = create_layout_it_doc_card_container_header( dataDocContainers[i].container_header )

                        // add 'new header' to 'new Doc Card Container'
                        newDocCardContainer.append( newHeader )


                        /* -------------------------------------------------- */
                        /* Create | Container Card List
                        /* -------------------------------------------------- */

                        var newCardListContainer = create_layout_it_doc_card_container_card_list( img_docs_path , dataDocContainers[i].container_card_list )

                        // add 'new card list' to 'new Doc Card Container'
                        newDocCardContainer.append( newCardListContainer )

                    /* -------------------------------------------------- */
                    /* [4/5] | Final | Add to Parent
                    /* -------------------------------------------------- */

                    add_to_it_docs_content_list.append( newDocCardContainer )

                    /* -------------------------------------------------- */
                    /* [5/5] | Add Extra Link Close Nav List
                    /* -------------------------------------------------- */

                  }


            } else {

               console.log( "🔴:{data_doc_category = -1}: No Data Object was found in json file");

            }


        } catch (error) {

            console.log("🔴: Can't get / work with JSON-File correctly - " + error )

        }

    }


/* -------------------------------------------------------- */
/* ⬛ Execute
/* -------------------------------------------------------- */

  /* ------------------------------------------- */
  /* Action 1: ???
  /* ------------------------------------------- */
