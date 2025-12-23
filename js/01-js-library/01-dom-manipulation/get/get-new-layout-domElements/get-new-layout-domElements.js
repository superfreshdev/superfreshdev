// console.log("🟨 get-new-layout-DomElements.js")


/* ----------------------------------------------------------------- */
/* Get New Div Double Line
/* ----------------------------------------------------------------- */

  function get_new_div_double_line( title, subTitle ) {

    // console.log("###  get_new_div_double_line")

    /* ----------------------------------------------- */
    /* Title Block - Elements
    /* ----------------------------------------------- */

    const div_title_block = document.createElement("div");
    const div_title = document.createElement("div");
    const div_sub_title = document.createElement("div");

    div_title.innerText = title;
    div_sub_title.innerText = subTitle;

    /* ----------------------------------------------- */
    /* Create | Title Block
    /* ----------------------------------------------- */

    div_title_block.appendChild( div_title );
    div_title_block.appendChild( div_sub_title );

    return div_title_block;

  }

/* ----------------------------------------------------------------- */
/* Get New | Custom Radio
/* ----------------------------------------------------------------- */

  function get_new_custom_radio( cssClass, imgPath ) {


    // console.log("###  get_new_custom_radio")

    /* ----------------------------------------------- */
    /* Custom Radio - Elements
    /* ----------------------------------------------- */

    const div_custom_radio = document.createElement("div");
    const img_custom_radio = document.createElement("img");

    div_custom_radio.setAttribute("class", cssClass );
    img_custom_radio.setAttribute("src", imgPath );
    img_custom_radio.setAttribute("alt", "img" );

    /* ----------------------------------------------- */
    /* Create | Custom Radio Elements
    /* ----------------------------------------------- */

    div_custom_radio.appendChild( img_custom_radio );

    return div_custom_radio;

  }

/* ----------------------------------------------------------------- */
/* Get New | Action Element 2 Lines With Custom Radio
/* ----------------------------------------------------------------- */

  async function get_new_action_element_2lines_with_customRadio( labelFor, cssClassLabel, title, subTitle, cssClassCustomRadio ){

    /* info:

        this creates the css layout construct of action-element-2-lines-light-grey.css

    */

    // console.log("➡️ get_new_action_element_2lines_with_customRadio()")
    // console.log("labelFor= " + labelFor)

    /* -------------------------------------------------------------- */
    // Step 1:
    // Create Label
    /* -------------------------------------------------------------- */

      var labelElement = document.createElement("label");
      labelElement.setAttribute("for", labelFor )
      labelElement.setAttribute("class", cssClassLabel )

      /* -------------------------------------------------------------- */
      // Step 2:
      // 2.1 Create Child | Div | "2 Lines Container"
      /* -------------------------------------------------------------- */

        var twoLinesContainer = document.createElement("div");

        /* -------------------------------------------------------------- */
        // Step 3:
        // 3.1 Create Sub Child | Div | "First Line Container"
        // 3.2 Create Sub Child | Div | "Second Line Container"
        /* -------------------------------------------------------------- */

          var firstLineContainer = document.createElement("div");
          firstLineContainer.innerText = title;

          // add "first line container" to "twoLinesContainer"
          twoLinesContainer.appendChild( firstLineContainer );

          var secondLineContainer = document.createElement("div");
          secondLineContainer.innerText = subTitle;

          // add "second line container" to "twoLinesContainer"
          twoLinesContainer.appendChild( secondLineContainer );

       // add "twoLinesContainer" to "labelElement"
       labelElement.appendChild( twoLinesContainer );


      /* -------------------------------------------------------------- */
      // ➡️ Step 4:
      // 4.1 Create Child | Div | "Custom Radio"
      /* -------------------------------------------------------------- */

        var customRadioElement = "";

        // get img full path of custom radio
        var imgDefaultPathCustomRadio = "";
        var imgFullPathCustomRadio = imgDefaultPathCustomRadio + "";

        var imgPathCustomRadio = data_layout_sport_categories.defaults.imgPathCustomRadio;

        // create new custom radio
        customRadioElement = get_new_custom_radio( cssClassCustomRadio, imgPathCustomRadio )

        // add "customRadioElement" to "labelElement"
        labelElement.appendChild( customRadioElement );


    return new Promise(resolve => {
        resolve(labelElement);
      })

  }
