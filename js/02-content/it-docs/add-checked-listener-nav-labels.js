console.log("🟨 add-checked-listener-nav-labels.js")





// var fileTest = "js/02-content/it-docs/data-it-doc-cards.json";

// testJson( fileTest );




/* -------------------------------------------------------- */
/* DOM Elements
/* -------------------------------------------------------- */

// add point dom element
const add_point_it_docs_content = document.getElementById('js-add-it-docs');

// id strings of radio from nav labels
const string_Ids_Of_It_Docs_Nav = [

  "radio-my-it-docs-category",
  "radio-my-it-docs-web-basic",
  "radio-my-it-docs-software-basic",
  "radio-my-it-docs-algorithmn",
  "radio-my-it-docs-it-tools",
  "radio-my-it-docs-expertise"
]

/* -------------------------------------------------------- */
/* Var
/* -------------------------------------------------------- */

// var data_file_it_doc_cards = "/../../../data/json/it-docs/data-it-doc-cards.json";

var data_file_it_doc_cards = "/data/json/it-docs/data-it-doc-cards.json";



/* -------------------------------------------------------- */
/* Array of Checked Listeners
/* -------------------------------------------------------- */

// i: execute function from other js-file to read json file

console.log("🟨 = L = " + string_Ids_Of_It_Docs_Nav.length )

for( let i=0; i < string_Ids_Of_It_Docs_Nav.length; i++ ) {

  document.getElementById( string_Ids_Of_It_Docs_Nav[i] ).addEventListener('change', () => {

    // console.log("Clicked = " + string_Ids_Of_It_Docs_Nav[i] )

    // ⚠️ Achtung - i = 0 - choose doc category - not chooing

    get_data_from_it_doc_cards( data_file_it_doc_cards, i )

  })

}
