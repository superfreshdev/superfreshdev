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
