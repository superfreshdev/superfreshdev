// console.log("🟨 async-set-sport-challenges.js")


/* ------------------------------------------------------------------------- */
// 🟥 Async | Set Content By Data
/* ------------------------------------------------------------------------- */

async function async_set_content_sport_challenges_by_data() {

    console.log("➡️ async_set_content_sport_challenges_by_data ")

    // data from radios
    var data_radios = data_header_nav_sport_categories.sportChallengeCategories;
    var max_radios = data_radios.length;
    // console.log("⚙️(max_radios)= " + max_radios )


    // dom elements from label
    var nav_sport_challenges = add_point_radio_labels_sport_challenges;
    var label_elements = nav_sport_challenges.querySelectorAll("label")
    var custom_radios_imgs = nav_sport_challenges.querySelectorAll("label > .custom-radio-small > img");


    /* ----------------------------------------------- */
    // Step 1:
    // Set Content by Data Checked = true
    /* ----------------------------------------------- */

    for( let i=0; i < max_radios; i++ ) {


      console.log(i + ": " + data_radios[i].checked )

      // Set Content from Data
      if( data_radios[i].checked == "true" ) {

        // window.alert("⚠️ content = " + i + " must be shown");

        /* -------------------------------------------------- */
        /* Set | New CSS Style & Handling
        /* -------------------------------------------------- */

          // set css | background color
          label_elements[ i ].style.backgroundColor = "wheat";

          // css css | img custom radio
          custom_radios_imgs[ i ].style.display = "flex";

          // set css | set content by index
          // 0      = choose => banner
          // 1      = fixed 30 videos
          // Others = default 3 videos
          set_content_sport_challenges_by_index( i )

        // end of loop
        i = max_radios;

      }


    }


  return new Promise(resolve => {
      resolve();
  })

}
