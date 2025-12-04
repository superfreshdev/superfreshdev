// console.log("🟨 get_new_specific_elements.js")


/* ----------------------------------------------------------------- */
/* Get New Div Double Line
/* ----------------------------------------------------------------- */

function get_new_div_double_line( title, sub_title ) {

  // console.log("###  get_new_div_double_line")

  /* ----------------------------------------------- */
  /* Title Block - Elements
  /* ----------------------------------------------- */

  const div_title_block = document.createElement("div");
  const div_title = document.createElement("div");
  const div_sub_title = document.createElement("div");

  div_title.innerText = title;
  div_sub_title.innerText = sub_title;

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

function get_new_custom_radio( css_class, img_src ) {


  // console.log("###  get_new_custom_radio")

  /* ----------------------------------------------- */
  /* Custom Radio - Elements
  /* ----------------------------------------------- */

  const div_custom_radio = document.createElement("div");
  const img_custom_radio = document.createElement("img");

  div_custom_radio.setAttribute("class", css_class );
  img_custom_radio.setAttribute("src", img_src );
  img_custom_radio.setAttribute("alt", "img" );

  /* ----------------------------------------------- */
  /* Create | Custom Radio Elements
  /* ----------------------------------------------- */

  div_custom_radio.appendChild( img_custom_radio );

  return div_custom_radio;

}

/* ----------------------------------------------------------------- */
/* Get New | Sport Video Link Box
/* ----------------------------------------------------------------- */

function get_new_sport_video_link_box( setted_index, data_sport_video_link ) {

  console.log("➡️ get_new_sport_video_link_box");

  var index = setted_index;
  var data = data_sport_video_link;

  // Prints
  console.log("setted_index= " + setted_index)


  /* -------------------------------------------------------------------- */
  /* To Do
  /* -------------------------------------------------------------------- */

  console.log("data= " + data.challenges[index].content.details.info )
  var info = data.challenges[index].content.details.info;

  // 🟥 create_divs.js | auslagern
  var new_div = createDivClassText( "a", info )

  // global
  add_element_to_add_point_prepend( new_div, content_default_3 )





}
