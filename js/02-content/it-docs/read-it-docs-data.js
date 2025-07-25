console.log("🟨 read-it-docs-data.js")


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
          // 🟩
          return jsonData.web_basic
        case 1:
          // 🟩
          return jsonData.software_basic
        case 2:
          // 🟩
          return jsonData.algorithmn;
        case 3:
          // 🟩
          return jsonData.it_tools
        case 4:
          // 🟩
          return jsonData.expertise
        case 5:
          // 🟩
          return jsonData.web_dev
        case 6:
          // 🟩
          return jsonData.software_dev
        case 7:
          // 🟩
          return jsonData.apis
        case 8:
          // 🟩
          return jsonData.software_quality
        case 9:
          // 🟩
          return jsonData.data_science
        case 10:
          // 🟩
          return jsonData.software_architecture
        case 11:
          // 🟩
          return jsonData.database
        case 12:
          // 🟩
          return jsonData.devops

        default:
          return -1;

      }

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
                console.log("🔴| Can't get JSON-File | " + response.status )
                return false;
            }

            // try to read json file
            const data = await response.json();

            /* -------------------------------------------------- */
            /* Step 1: Get Concrete Data Obj by Setted Index
            /* -------------------------------------------------- */

            var data_doc_category =  get_data_it_doc_category_by_index( data, settedIndex )


              // if no index was found from json file
              if( data_doc_category == -1 ) {

                console.log( "🔴| No Data Object was found in json file");

              } else {

                console.log("🦍:(settedIndex)= " + settedIndex)
                console.log( "🦍🦍🦍: " + data_doc_category.defaults.img_path_folder )

              }

            /* ---------------------------------------------------------------- */
            /* 🟥 Step 2: Create/Replace New Layout Elements from Data
            /* ---------------------------------------------------------------- */

            // get Header
            // var txt_headers = [];

            // get Header List of Doc Category
            // for( let i=0; i < data_doc_category.it_doc_card_containers.length; i++ ) {

            //   txt_headers.push( data_doc_category.it_doc_card_containers[i].container_header.header_title )

            // }

            // get first Header Title of Doc Category
            var test = data_doc_category.it_doc_card_containers[0].container_header.header_title;


            // new div
            var newDivElement = createDivClassText( "class-Marko", test );

            // exist there 2nd div ?
            // if( addRootPointDomElement)

            // console.log("Length = " + addRootPointDomElement.querySelectorAll( ".class-Marko").length )

            var countDivs = addRootPointDomElement.querySelectorAll( ".class-Marko").length;

            if( countDivs == 1) {

              // delete old div, thats the first one
              addRootPointDomElement.querySelectorAll( ".class-Marko")[0].remove();

            }

            addRootPointDomElement.append(  newDivElement  )

            // get old div
            // var oldDivElement = addRootPointDomElement.querySelector(".class-Marko");

            // replace old with new






            // delete old layout if it exist
            // var divMarkos = document.querySelectorAll("#js-add-it-docs > .class-Marko")[0];
            // divMarkos.remove();




        } catch (error) {

            console.log("🔴: Can't get JSON-File (error) | " + error )

        }

    }


/* -------------------------------------------------------- */
/* ⬛ Execute
/* -------------------------------------------------------- */

  /* ------------------------------------------- */
  /* Action 1: ???
  /* ------------------------------------------- */
