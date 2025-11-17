// console.log("🟨 set-selected-category-others.js")


/* ----------------------------------------------------------------- */
/*  Variables
/* ----------------------------------------------------------------- */

// radio category others
var data_selected_category_others = [

  {
    img_src: "",
    img_css_class: "",
    text: "Choose ..."
  },
  {
    img_src: "media/img/icons/02-icon-colors/01-black/black-three-books.png",
    img_css_class: "img-h-0-9",
    text: "Book Listenings"
  },
  {
    img_src: "media/img/icons/02-icon-colors/01-black/black-spoon-knife.png",
    img_css_class: "img-h-1",
    text: "Meals"
  },
  {
    img_src: "media/img/icons/02-icon-colors/01-black/black-language-2.png",
    img_css_class: "img-h-1-2",
    text: "Languages"
  },
  {
    img_src: "media/img/icons/02-icon-colors/01-black/black-gaming-controller.png",
    img_css_class: "img-h-0-8",
    text: "Mini-Games"
  },


]

// data header content others
var data_header_content_others = [

   {
    img_src: "media/img/icons/02-icon-colors/01-black/black-tornado.png",
    img_css_class: "img-h-2-3",
    title: "Others",
    sub_title: "» Book Listenings | Meals | Languages | Mini-Games"
  },
  {
    img_src: "media/img/icons/02-icon-colors/01-black/black-three-books.png",
    img_css_class: "img-h-2-3",
    title: "Book Listenings",
    sub_title: "» my completely read-aloud books"
  },
  {
    img_src: "media/img/icons/02-icon-colors/01-black/black-spoon-knife.png",
    img_css_class: "img-h-2-3",
    title: "Meals",
    sub_title: "» Daily | Complex | Soups | Bake | Drinks "
  },
  {
    img_src: "media/img/icons/02-icon-colors/01-black/black-language-2.png",
    img_css_class: "img-h-2-5",
    title: "Languages",
    sub_title: "» Vocubulary | Songs | Dictation"
  },
  {
    img_src: "media/img/icons/02-icon-colors/01-black/black-gaming-controller.png",
    img_css_class: "img-h-2",
    title: "Mini-Games",
    sub_title: "» Board-Games | Learning | Adventure "
  },

]

/* ----------------------------------------------------------------- */
/*  DOM Elements
/* ----------------------------------------------------------------- */

/* ----------------------------------------- */
/* Checkbox | Selected Category Others
/* ----------------------------------------- */

const chk_category_others = document.getElementById("chk-selected-category-others");

/* ------------------------- */
/* Radio Elements
/* ------------------------- */

const radios_category_others = document.querySelectorAll("input[name='name-radio-category-others']");

/* ------------------------- */
/* Update Elements
/* ------------------------- */

// label selected category others
const label_selected_category_others = document.querySelector("label[for='chk-selected-category-others']")

// header content others
const header_content_others = document.getElementById("js-header-content-others")


/* ----------------------------------------------------------------- */
/*  Functions
/* ----------------------------------------------------------------- */

/* ----------------------------------------------------------------- */
/* Events
/* ----------------------------------------------------------------- */

// Add | Radio Change Event Listener
for( let i=0; i < radios_category_others.length; i++ ) {


  radios_category_others[i].addEventListener("change", ()=> {

    // console.log( "➡️➡️ Change = " + i )
    // console.log("😡😡😡 = " + data_selected_category_others[i].text )

    // Update | Label Selected Category Others
    // 🟣 outsourced
    update_selected_label( label_selected_category_others,
                           data_selected_category_others[i].img_src,
                           data_selected_category_others[i].img_css_class,
                           data_selected_category_others[i].text )

    // Close Category Others
    chk_category_others.checked = false;

    // Update | Header Content Others
    // 🟣 outsourced
    update_content_header( header_content_others,
                           data_header_content_others[i].img_src,
                           data_header_content_others[i].img_css_class,
                           data_header_content_others[i].title,
                           data_header_content_others[i].sub_title )

  })

}
