// console.log("🟨 read-it-docs-data.js")


/*

  #################################################
  ### Logic Steps ###
  #################################################

  # 🟥 Step 1:
  > Relation to Setted Index and Data ( it docs json file )
    > Extra Method

  # 🟥 Step 2:
  > If another Content is setted, than overwrite old layout with new one
    > Extra Check Method
  > Method to read complete Data Strucutre & by the way it create the layout & close nav list
    > List of Methods

  # 🟥 Step X1:
  > if "choose doc category" is setted, delete layout structure and close nav list
    > Extra Method

###################################################

*/

/* -------------------------------------------------------- */
/* ⬛ DOM Elements
/* -------------------------------------------------------- */

/* -------------------------------------------------------- */
/* ⬛ VAR Elements
/* -------------------------------------------------------- */

/* -------------------------------------------------------- */
/* ⬛ Functions
/* -------------------------------------------------------- */

  /* ------------------------------- */
  /* Help Function
  /* ------------------------------- */

    // Get Data from Json File by setted index
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


  /* ----------------------------------------------------- */
  /* Create Layout Element Functions
  /* ----------------------------------------------------- */

    /* --------------------------------------- */
    /* Create IT Doc Card Container Header
    /* --------------------------------------- */

    function create_layout_it_doc_card_container_header( dataHeader ) {



      /* ------------------------------------------------------ */
      /* Step 1:
      /* > Get Datas from 'Doc Container Header'
      /* ------------------------------------------------------ */

      // console.log('⭐ = ' + dataHeader.title )
      // console.log('🪲 = ' + dataHeader.img_filename )
      // console.log('😶‍🌫️ = ' + dataHeader.img_css_class )

      // console.log('-------------')

      /* ------------------------------------------------------ */
      /* Step 2:
      /* > Build Layout 'Doc Container Header'
      /* ------------------------------------------------------ */


      /* --------------------------------------------------------- */
      /* Create Layout Process | Doc Container Header
      /* --------------------------------------------------------- */


      // Parent Header
      const newHeader = createHeaderClass( "my-it-docs-card-container-header");

        // create dom
        var newTitleElement = createDivClass( "my-it-docs-card-container-header-title" );

        // create doms
        var imgTitle = createImg( dataHeader.img_filename, dataHeader.img_css_class ) ;
        var textTitle = createDivText( dataHeader.title )

        // add doms to 'newTitleElement'
        newTitleElement.append( imgTitle );
        newTitleElement.append( textTitle );

        // add 'newTitleElement' to 'new header'
        newHeader.append( newTitleElement );


        // add 'new header' to 'root element'
        add_root_point_it_docs_content.append( newHeader )

    }




  /* ---------------------------------------------------------- */
  /* Async Functions
  /* ---------------------------------------------------------- */

    /* ---------------------------------------------------------- */
    /*  Get JSON File |
    /* > read data by settedIndex
    /* > use add root point to add the data layout elements
    /* > create data layout elements
    /* ---------------------------------------------------------- */

    async function get_data_from_it_doc_cards( filename, settedIndex, addRootPointDomElement ) {


      /* ---------------------------------------------------------------- */
      /* Try to get JSON File, Read & Create Layout Elements
      /* ---------------------------------------------------------------- */

      try {

            // try to get json file
            const response = await fetch( filename );

            // if not ok
            if( !response.ok ) {
                console.log("🔴: Can't get JSON-File | " + response.status )
                return false;
            }

            // try to read json file
            const data = await response.json();

            /* -------------------------------------------------- */
            /* Step 1 | Get Default Datas
            /* -------------------------------------------------- */

            var def_img_path_img_card = data.defaults.img_path_img_card;
            var def_pdf_text = data.defaults.pdf_text;

            // console.log("⚠️⚠️⚠️⚠️")
            // console.log("🛠️ = " + def_img_path_img_card )
            // console.log("🛠️ = " + def_pdf_text )
            // console.log("⚠️⚠️⚠️⚠️")

            /* -------------------------------------------------- */
            /* Step 2 | Get Data Obj by Setted Index
            /* -------------------------------------------------- */

            var data_doc_category =  get_data_it_doc_category_by_index( data, settedIndex )


            // Was Data Obj by Setted Index found ?
            if( data_doc_category != -1 ) {

              // was found

              console.log( "🦍:(settedIndex)= " + settedIndex)
              console.log( "🦍:(objData)= " + data_doc_category.defaults.img_path_folder )

              /* --------------------------------------------------------- */
              /* Step 1 | Delete old Doc Containers if any exist
              /* --------------------------------------------------------- */

              // removeAllGivenDomElements( add_root_point_it_docs_content, "header" )

              var selectorCheck = document.querySelectorAll( "#js-add-it-docs > header" )
              var deleteSelectors = selectorCheck.length;

              if( deleteSelectors > 0 ) {

                console.log( "🔥 to delete = " + deleteSelectors )

                for( let i=0; i < deleteSelectors; i++ ) {

                   console.log( i + ": Delete= " + selectorCheck[i].innerHTML )

                   selectorCheck[i].remove();
                }



              } else {

                console.log( "🌵 nothing to delete = " + deleteSelectors )

              }


              /* --------------------------------------------------------- */
              /* Step 2 | Create Layout Doc Containers
              /* --------------------------------------------------------- */

              var dataDocContainers = data_doc_category.it_doc_card_containers;
              var maxDocContainers = data_doc_category.it_doc_card_containers.length;

              console.log( "🌳 (Max Doc Containers) = " + maxDocContainers );



                  for( let i=0; i < maxDocContainers; i++ ) {


                    /* -------------------------------------------------- */
                    /* [1/3] | Create It Doc Container Header
                    /* -------------------------------------------------- */

                    create_layout_it_doc_card_container_header( dataDocContainers[i].container_header )

                    /* -------------------------------------------------- */
                    /* [2/3] | Create It Doc Container Header
                    /* -------------------------------------------------- */

                    /* -------------------------------------------------- */
                    /* [3/3] | Add Finished IT Doc Container to Root
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
