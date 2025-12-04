// console.log("🟨 unset_css.js")


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
