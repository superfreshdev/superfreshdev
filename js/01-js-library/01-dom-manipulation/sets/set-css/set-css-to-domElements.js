// console.log("🟨 set-css-to-domElements.js")


/* ----------------------------------------------------------------- */
/* SET CSS | Display Style to
/* ----------------------------------------------------------------- */

  // single
  async function set_css_display_style_to( domElement, cssStyle ) {

    // cssStyle e.g none, block, flex, grid
    domElement.style.display = cssStyle;

    return new Promise(resolve => {
      resolve();
    })

  }

  // all
  async function set_css_display_style_to_all( domElements, cssStyle ) {

    for( let i=0; i < domElements.length; i++ ) {

      // cssStyle e.g none, block, flex, grid
      domElements[i].style.display = cssStyle;

    }

    return new Promise(resolve => {
      resolve();
    })

  }

/* ----------------------------------------------------------------- */
/* Set CSS Style | by querySelectorElement (General)
/* ----------------------------------------------------------------- */

  async function set_css_style_to_querySelectorElement( querySelectorElement, cssStyle ) {

    // console.log("➡️ set_css_style_to_querySelectorElement()")

    console.log("querySelectorElement = " + querySelectorElement)
    console.log("cssStyle = " + cssStyle)

    var style_element = document.querySelector( querySelectorElement );

    style_element.setAttribut("style", cssStyle )


    return new Promise(resolve => {
      resolve();
    })


  }


/* --------------------------------------------------------------------------------------- */
// ❌❌❌ Trash
/* --------------------------------------------------------------------------------------- */





    /* --------------------------------------------------------------------------------------- */
  // Unset Element/s | Background Color = ""
  /* --------------------------------------------------------------------------------------- */

  function unset_elements_css_backgroundColor( elements ) {

    // console.log("➡️ unset_elements_css_backgroundColor")

    elements.forEach(el => {

      el.style.backgroundColor = "";

    });

  }

  function unset_element_css_backgroundColor( element ) {

    // console.log("➡️ unset_element_css_backgroundColor")
    element.style.backgroundColor = "";

  }

  /* --------------------------------------------------------------------------------------- */
  // Unset Element/s | Display = none
  /* --------------------------------------------------------------------------------------- */

  function unset_elements_css_display_none( elements ) {

    // console.log("➡️ unset_elements_css_display_none")

    elements.forEach(el => {

      el.style.display = "none";

    });

  }

  function unset_element_css_display_none( element ) {

    // console.log("➡️ unset_element_css_display_none")
    element.style.display = "none";

  }
