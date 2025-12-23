// console.log("🟨 async-unshown-sport-challenges.js")


/* ------------------------------------------------------------------------- */
//  Async | Unshown Radio Sport Challenges
/* ------------------------------------------------------------------------- */

  async function unshow_radios_sport_challenges() {

    console.log("➡️ unshow_radios_sport_challenges() ")

    /* ---------------------------------------------- */
    /* Step 1:
    /* Get Data for Radio
    /* ---------------------------------------------- */

    // data
    var data = data_layout_sport_categories ;

    // get created | radios
    var radio_name = data.defaultsSportChallenges.radio_name_sport_challenge;
    var radio_elements = document.querySelectorAll('input[name="'+radio_name+'"]')

    /* ---------------------------------------------- */
    /* Step 2:
    /* Set CSS | Display None to all
    /* ---------------------------------------------- */

    unset_elements_css_display_none( radio_elements )


    return new Promise(resolve => {
        resolve();
    })


  }
