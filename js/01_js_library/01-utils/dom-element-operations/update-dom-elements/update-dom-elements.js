// console.log("🟨 update-dom-elements.js")


/* ------------------------------------------------------ */
/* Update | Selected Label
/* ------------------------------------------------------ */

function update_selected_label( label, imgSrc, imgClass, text ) {

  // console.log("❌❌❌ imgSrc= " + imgSrc )
  // console.log("❌❌❌ imgClass= " + imgClass )
  // console.log("❌❌❌ text= " + text )

  /* ------------------------------------------------- */
  /* Step 1: Create only Img Tag if entry exist
  /* ------------------------------------------------- */

  if ( imgSrc != "" ) {

    // create img tag
    var imgElement = createImgClass( imgSrc, imgClass );
    console.log( "✳️" + imgElement )

    // Remove old Img | if exist
    remove_img_in_element( label.querySelector("div:nth-of-type(1)") )

    // Add new Img Before | not Append
    label.querySelector("div:nth-of-type(1)").insertBefore( imgElement, label.querySelector("div:nth-of-type(1)").children[0] );

  }

  /* ------------------------------------------------- */
  /* Step 2: Update new Text Category
  /* ------------------------------------------------- */

  label.querySelector("div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)").innerText = text;


  /* ------------------------------------------------- */
  /* Step 3: Delete old Img by Choose ...
  /* ------------------------------------------------- */

  if( imgSrc == "" ) {

    // Remove old img | if exist
    // Choose Mode
    remove_img_in_element( label.querySelector("div:nth-of-type(1)") )

  }

}
