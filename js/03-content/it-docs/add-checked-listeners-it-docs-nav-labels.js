// console.log("🟨 add-checked-listeners-it-docs-nav-labels.js")


/*

  #################################################
  ### Logic Steps ###
  #################################################

  # 🟩 Step 1:
  > Get Add Root Point Dom Element
  > Get IDs of all existing IT Doc Category Radios

  # 🟥 Step 2:
  > Create to all Radios an Change Listener to let read the correct record from json file

  # 🟥 Step X1:
  > Radio Index 0 = "choose doc category" reset layout and close nav list

  # 🟥 Step X2:
  > by new change update setted doc category

###################################################


/* -------------------------------------------------------- */
/* ⬛ DOM Elements
/* -------------------------------------------------------- */

// Add Root Point - IT Docs Content
const add_root_point_it_docs_content = document.getElementById('js-add-it-docs');

// ID of IT Docs Nav Radio "Choose Doc Category"
const radio_id_it_docs_nav_choose = document.getElementById('radio-my-it-docs-category');

// ID List of IT Docs Nav Radios
const radio_ids_of_it_docs_nav = [

  "radio-my-it-docs-web-basic",
  "radio-my-it-docs-software-basic",
  "radio-my-it-docs-algorithmn",
  "radio-my-it-docs-it-tools",
  "radio-my-it-docs-expertise",
  "radio-my-it-docs-web-dev",
  "radio-my-it-docs-software-dev",
  "radio-my-it-docs-apis",
  "radio-my-it-docs-software-quality",
  "radio-my-it-docs-data-science",
  "radio-my-it-docs-software-architecture",
  "radio-my-it-docs-database",
  "radio-my-it-docs-dev-ops"
]

/* -------------------------------------------------------- */
/* ⬛ VAR Elements
/* -------------------------------------------------------- */

var file_data_it_doc_cards = "data/json/it-docs/data-it-doc-cards.json";

/* -------------------------------------------------------- */
/* ⬛ Functions
/* -------------------------------------------------------- */

  /* ------------------------------------------------------- */
  /* Add Change Listeners to "Doc Categories (radios)"
  /* ------------------------------------------------------- */

  function add_change_listeners_to_it_doc_nav_radios ( stringIds ) {


    // Radio ID Elements
    for( let i=0; i < stringIds.length; i++ ) {

      document.getElementById( stringIds[i] ).addEventListener('change', () => {

        console.log("Clicked = " + stringIds[i] )

        /* -------------------------------------------------------- */
        /* Read Data Object by settedIndex from JSON File
        /* -------------------------------------------------------- */
         get_data_from_it_doc_cards( file_data_it_doc_cards, i, add_root_point_it_docs_content )

      })

    }

    // just for testing
    // for( let i=0; i < stringIds.length; i++ ) {
    //   console.log("👷🏽| " + stringIds[i] )
    // }

  }

/* -------------------------------------------------------- */
/* ⬛ Event Listeners
/* -------------------------------------------------------- */

  /* ------------------------------------------------------- */
  /* Add Change Listeners to "Choose Doc Category"
  /* ------------------------------------------------------- */
  radio_id_it_docs_nav_choose.addEventListener( 'change', () => {

    // just testing
    console.log("👷🏽‍♂️ Clicked | " + radio_id_it_docs_nav_choose.getAttribute("id") )

  } )

/* -------------------------------------------------------- */
/* ⬛ Execute
/* -------------------------------------------------------- */

  /* ------------------------------------------- */
  /* Action 1: Get Data by Setted Doc Category
  /* ------------------------------------------- */
  add_change_listeners_to_it_doc_nav_radios ( radio_ids_of_it_docs_nav )
