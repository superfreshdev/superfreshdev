// console.log("🟨 add-checked-listeners-it-docs-nav-labels.js")


/*

  #################################################
  ### Logic Steps ###
  #################################################

  # 🟩 Step 1/2:
  > Create to all it doc categories an 'change event listener'
  to read concrete data from json file by setted index

  # 🟥 Step 2/2:
  > Create for it doc categories 'choose doc category' an
  extra 'change event listener' to allow to close nav list
  & remove the layout card

###################################################


/* -------------------------------------------------------- */
/* ⬛ DOM Elements
/* -------------------------------------------------------- */

// IT Doc Category "Choose Doc Category"
const radio_it_docs_category_choose = document.getElementById('radio-my-it-docs-category');

/* -------------------------------------------------------- */
/* ⬛ VAR Elements
/* -------------------------------------------------------- */

// IDs of IT Docs Nav Radios
const radio_ids_of_it_docs_categories = [

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

// file of it docs
var file_it_docs_data = "data/json/it-docs/data-it-doc-cards.json";

/* -------------------------------------------------------- */
/* ⬛ Functions
/* -------------------------------------------------------- */

  /* ------------------------------------------------------- */
  /* Add Change Listeners to "Doc Categories (radios)"
  /* ------------------------------------------------------- */

  function add_change_listeners_on_it_doc_categories_nav  ( stringIds ) {

    // Radio ID Elements
    for( let i=0; i < stringIds.length; i++ ) {

      document.getElementById( stringIds[i] ).addEventListener('change', () => {

        console.log("Clicked = " + stringIds[i] )

        /* -------------------------------------------------------- */
        /* Read Data Object by settedIndex from JSON File
        /* -------------------------------------------------------- */
        get_data_from_it_doc_cards( file_it_docs_data , i )

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
  radio_it_docs_category_choose.addEventListener( 'change', () => {

    // just testing
    console.log("👷🏽‍♂️ Clicked | " + radio_it_docs_category_choose.getAttribute("id") )

  } )

/* ------------------------------------------------------------------------ */
/* ⬛ Execute
/* ------------------------------------------------------------------------ */

  /* ---------------------------------------------------------------------- */
  /* Action 1:
  /* > Create Change Listenrs on all IT Doc Categories Nav (radios)
  /* ---------------------------------------------------------------------- */

  add_change_listeners_on_it_doc_categories_nav ( radio_ids_of_it_docs_categories )
