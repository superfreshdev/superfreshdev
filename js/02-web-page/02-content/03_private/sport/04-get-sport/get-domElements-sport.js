// console.log("🟨 get-domElements-sport.js")

// 🟥🟥 get-new-domElements-sport.js

/* ---------------------------------------------------------------- */
/* Get New WeekWorkoutSportChallengeContainer( data )
/* ---------------------------------------------------------------- */

  async function get_new_weekWorkoutSportChallengeContainer( data ) {

    // console.log("➡️ get_new_weekWorkoutSportChallengeContainer()")
    // console.log("data = " + data )

    var new_WeekWorkoutSportChallengeContainer = document.createElement("div");
    new_WeekWorkoutSportChallengeContainer.setAttribute("class", "week-workout-sport-challenge-container")


    /*
        1. eigene Methode für Days erstellen
        2. eigene Method für Items erstellen
    */


    /* --------------------------------------------------------- */
    // Step 1:
    // Create "Days" Element if exist
    /* --------------------------------------------------------- */

      if( data.days != "" ) {

        console.log("Days 🦍= " + data.days )

        // get data
        var textDays = data.days;
        var cssClass_daysElement = "info-days-sport-workout";

        // create "days" element
        var div_days = document.createElement("div");
        div_days.setAttribute("class", cssClass_daysElement );

          // create span
          var span_days = document.createElement("span");
          span_days.innerText = textDays;

          // add "span" to "div"
          div_days.appendChild( span_days );


        // Add "div_days" to "new_weekWorkoutSportChallengeContainer"
        new_WeekWorkoutSportChallengeContainer.appendChild( div_days );


      } else {

        console.log("Days 🦍=  ❌ dont create")

      }



    /* --------------------------------------------------------- */
    // Step 2:
    // Creates "items" of sport workout categories
    /* --------------------------------------------------------- */

      /* -------------------------------------------------- */
      // Step 1:
      // Get Var & Data
      /* -------------------------------------------------- */

        // all created sport items
        var new_sportItems = [];

        // default img path
        var imgDefaultPath_sportItem = data_layout_sport_categories.defaults.imgGreyPath;

        // img
        var imgFullPath_sportItem = "";
        var cssClass_sportItem = "";

        // creating elements
        var newDiv = [];
        var newImg = [];
        var newTextDiv = [];


      /* -------------------------------------------------- */
      // Step 2:
      // Creating element & adding to "new_sportItems"
      /* -------------------------------------------------- */

      for( let i=0; i < data.items.length; i++ ) {

        console.log(i + ": " + data.items[i].imgName )

        /* ---------------------------------------------------- */
        // Step 1:
        // Create "Div" | ".info-sport-workout-category"
        /* ----------------------------------------------------- */

          newDiv.push( document.createElement("div") );
          newDiv[i].setAttribute("class", "info-sport-workout-category")


        /* ---------------------------------------------------- */
        // Step 2:
        // Create "Img" | ".info-sport-workout-category"
        /* ----------------------------------------------------- */

          // Get img path
          imgFullPath_sportItem = imgDefaultPath_sportItem+data.items[i].imgName;
          cssClass_sportItem = data.items[i].imgCssClass;

          // console.log("imgFullPath_sportItem = " + imgFullPath_sportItem)
          // console.log("cssClass_sportItem  = " + cssClass_sportItem )

          newImg.push( await get_new_imgClass( imgFullPath_sportItem, cssClass_sportItem ) )


          // add "newImg[i]" to "newDiv[i]"
          newDiv[i].appendChild( newImg[i] )

        /* ---------------------------------------------------- */
        // Step 3:
        // Create "Div Text"
        /* ----------------------------------------------------- */

          newTextDiv.push( document.createElement("div") );
          newTextDiv[i].innerText = data.items[i].title;


          // add "newTextDiv[i]" to "newDiv"
          newDiv[i].appendChild( newTextDiv[i] )

          // console.log("🌴=" + newDiv[i].outerHTML )

          // add "newDiv[i]" to "new_sportItems"
          new_sportItems.push( newDiv[i] )

      }

      for( let k=0; k < new_sportItems.length; k++ ) {

        console.log( k + ":(🌴) " + new_sportItems[k].outerHTML)
        new_WeekWorkoutSportChallengeContainer.appendChild( new_sportItems[k] )
      }







    return new Promise(resolve => {
        resolve( new_WeekWorkoutSportChallengeContainer );
    })

  }
