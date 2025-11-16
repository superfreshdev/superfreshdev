// console.log("🟨 set-selected-category-others.js")


/* ----------------------------------------------------------------- */
/*  Variables
/* ----------------------------------------------------------------- */

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

const label_selected_category_others = document.querySelector("label[for='chk-selected-category-others']")




/* ----------------------------------------------------------------- */
/*  Functions
/* ----------------------------------------------------------------- */

/* ----------------------------------------------------------------- */
/* Events
/* ----------------------------------------------------------------- */

// Add | Radio Change Event Listener
for( let i=0; i < radios_category_others.length; i++ ) {


  radios_category_others[i].addEventListener("change", ()=> {

    // Update Label Selected Category Others
    console.log( "➡️➡️ Change = " + i )
    console.log("😡😡😡 = " + data_selected_category_others[i].text )

    // 🟣 outsourced
    update_selected_label( label_selected_category_others,
                           data_selected_category_others[i].img_src,
                           data_selected_category_others[i].img_css_class,
                           data_selected_category_others[i].text )

    // close category others
    chk_category_others.checked = false;

  })




  // chk_category_others.checked = false;

}
