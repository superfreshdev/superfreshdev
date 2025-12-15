// console.log("🟨 update-labels.js")


/*

    ⚠️ to do, wenn ich einzelne update labels benötige
    auf Basis Text + Info oder auch nur mit Text ohne Info

*/

/* ---------------------------------------------------------------------- */
/* 🟥 Update | Label/s | imgPath, imgCssClass, Text, Info
/* ---------------------------------------------------------------------- */

  // 🟥 single e.g selected label
  async function update_label_by_img_text_info( labelElement, imgPath, imgCssClass, text, info ) {

    // console.log("➡️ update_label_by_img_text_info()")
    // console.log("labelElement = " + labelElement );
    // console.log("imgPath = " + imgPath );
    // console.log("imgCssClass = " + imgCssClass );


    return new Promise(resolve => {
        resolve();
    })

  }

  // 🟥 all
  async function update_labels_by_img_text_info( labelElement, imgPath, imgCssClass, text, info ) {

    // console.log("➡️ update_labels_by_img_text_info()")

    return new Promise(resolve => {
        resolve();
    })

  }


/* ------------------------------------------------------ */
/* ❌❌❌ Trash
/* ------------------------------------------------------ */

/* ------------------------------------------------------ */
/* 🟥 Update | Selected Label | imgPath, imgClass
/* ------------------------------------------------------ */

  async function update_selected_label_with_img_class_text( label, imgPath, imgClass, text ) {


      // console.log("➡️ imgPat= " + imgPat )
      // console.log("➡️ imgClass= " + imgClass )
      // console.log("➡️ text= " + text )

      /* ------------------------------------------------- */
      /* Step 1: Create only Img Tag if entry exist
      /* ------------------------------------------------- */

      if ( imgPath != "" ) {

        // create img tag
        var imgElement = get_new_imgClass( imgPath, imgClass );
        console.log( "✳️" + imgElement )

        // Remove old Img | if exist
        delete_imgElement_from( label.querySelector("div:nth-of-type(1)") )

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

      if( imgPath == "" ) {

        // Remove old img | if exist
        // Choose Mode
        delete_imgElement_from( label.querySelector("div:nth-of-type(1)") )

      }

       return new Promise(resolve => {
            resolve();
          })


  }
