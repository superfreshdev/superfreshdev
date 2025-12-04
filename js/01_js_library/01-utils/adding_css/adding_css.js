// console.log("🟨 adding_css.js")


/* ----------------------------------------------------------------- */
/* Adding CSS | "Display:none" ( all, single)
/* ----------------------------------------------------------------- */

  // all
  function adding_css_all_display_none( domElements ) {

    for( let i=0; i < domElements.length; i++ ) {

      domElements[i].style.display = "none"

    }

  }

  // single
  function adding_css_display_none( domElement ) {

    domElement.style.display = "none"

  }


/* ----------------------------------------------------------------- */
/* Adding CSS | QuerySelector & CSS Styles
/* ----------------------------------------------------------------- */

  function adding_css_querySelector_style( querySelector, cssStyle ) {

    // console.log("### adding_css_querySelector_style")
    console.log("cssStyle = " + cssStyle)
    console.log("querySelector = " + querySelector)

    var style_element = document.querySelector( querySelector );

    style_element.setAttribut("style", cssStyle )



    // domElement.cssStyle = cssStyle;

  }
