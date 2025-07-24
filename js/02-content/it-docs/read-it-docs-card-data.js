console.log("🟨 read-it-docs-card-data.js")


/* -------------------------------------------------------- */
/* DOM Elements
/* -------------------------------------------------------- */

/* -------------------------------------------------------- */
/* Define Function of Index & Object Name from JSON File
/* -------------------------------------------------------- */

function get_it_doc_category_data( jsonData, clickedIndex ) {

  switch( clickedIndex ) {

    case 1:
      return jsonData.web_basic
    case 2:
      return jsonData.software_basic
    case 3:
      return jsonData.algorithmn;
    case 4:
      return jsonData.it_tools
    case 5:
      return jsonData.expertise
    case 6:
      return jsonData.web_dev
    case 7:
      return jsonData.software_dev

    default:
      return -1;

  }

}

/* -------------------------------------------------------- */
/* Function to Read by Index from JSON
/* -------------------------------------------------------- */

// get data from it doc cards

async function get_data_from_it_doc_cards( filename, clickedIndex ) {


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
        /* Read Data Object by clicked radio nav index
        /* -------------------------------------------------- */

        // console.log( "1|🦍🦍🦍: " + data.web_basic.defaults.img_path_folder )


        var parsed_data = get_it_doc_category_data( data, clickedIndex )

        // if no index was found from json file
        if( parsed_data == -1 ) {
          return "🔴 Data from JSON File not Found";
        }

        console.log( "2|🦍🦍🦍: " + parsed_data.defaults.img_path_folder )


        /* ------------------------------------------------------------ */
        /* System bauen um einzelne Elemente heraus zu picken
        /* ------------------------------------------------------------ */

        var newDivElement = createDivClassText( "class-Marko", parsed_data.defaults.img_path_folder );


        // add_point_it_docs_content.append( newDivElement )

        add_point_it_docs_content.append(  newDivElement  )


        // addDomElementToParent( newDivElement , add_point_it_docs_content )





        // Step 1: Create Filter IT Docs Panel


        // addPointItDocs.append(  createDivClassText( "class-Marko", data.test ) )
        // addPointItDocs.append(  createDivClassText( "class-Marko", data.test ) )
        // addPointItDocs.append(  createDivClassText( "class-Marko", data.test ) )



    } catch (error) {
        console.log("🔴: Can't get JSON-File (error) | " + error )
        //return error;
    }

}

/* -------------------------------------------------------- */
/* VAR
/* -------------------------------------------------------- */

// var data_file_it_doc_cards = "../../../data/json/it-docs/data-it-doc-cards.json";

// get_data_from_it_doc_cards( data_file_it_doc_cards )


async function testJson( filename ) {


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
        /* Read Data Object by clicked radio nav index
        /* -------------------------------------------------- */

        // console.log( "1|🦍🦍🦍: " + data.web_basic.defaults.img_path_folder )



        console.log( "2|🍌🍌🍌: " + data.defaults.img_path_white_imgs )


        /* ------------------------------------------------------------ */
        /* System bauen um einzelne Elemente heraus zu picken
        /* ------------------------------------------------------------ */

        // var newDivElement = createDivClassText( "class-Marko", parsed_data.defaults.img_path_folder );


        // add_point_it_docs_content.append( newDivElement )

        // add_point_it_docs_content.append(  newDivElement  )


        // addDomElementToParent( newDivElement , add_point_it_docs_content )





        // Step 1: Create Filter IT Docs Panel


        // addPointItDocs.append(  createDivClassText( "class-Marko", data.test ) )
        // addPointItDocs.append(  createDivClassText( "class-Marko", data.test ) )
        // addPointItDocs.append(  createDivClassText( "class-Marko", data.test ) )



    } catch (error) {
        console.log("🔴: Can't get JSON-File (error) | " + error )
        //return error;
    }

}
