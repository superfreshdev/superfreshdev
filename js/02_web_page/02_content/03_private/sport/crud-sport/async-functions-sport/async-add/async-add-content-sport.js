// console.log("🟨 async-add-content-sport.jst.js")


/* -------------------------------------------------------------------- */
// Async | Add New Content | Sport 3 Videos Link Container To
/* -------------------------------------------------------------------- */

async function async_add_new_content_sport_3_video_link_container_to( dataDefaults, dataWishedVideos, startNr, addNr, addPoint ) {

  console.log("➡️ async_add_new_content_sport_3_video_link_container_to()")

  /* ------------------------------------------------------ */
  // Step 1:
  // Get Default Datas
  /* ------------------------------------------------------ */

  // var imgVideoPath = dataDefaults.imgVideoPath;
  // var linkTitle = dataDefaults.linkTitle;

  // var imgIconGreyPath = dataDefaults.imgIconGreyPath;
  // var imgIconGreyName = dataDefaults.imgIconGreyName;

  // var imgIconBlackPath = dataDefaults.imgIconBlackPath;
  // var imgIconBlackName = dataDefaults.imgIconBlackName;

  // var imgIconCssClass = dataDefaults.imgIconCssClass;

  // console.log("🔥### Prints | Data Defaults: ")
  // console.log("imgVideoPath= " + imgVideoPath)

  console.log("🔥### Prints | Data Wished Videos: ")
  // Test Prints
  for( let i=0; i < dataWishedVideos.length; i++ ) {
    console.log(i + " : dataVideos= " + dataWishedVideos[i].imgName)
    // console.log(i + " : dataVideos= " + dataVideos[i].externalLink)

  }

  console.log("starNr = " + startNr )
  console.log("AddNr = " + addNr )

  /* -------------------------------------------------------------------------------- */
  // Step 2:
  // Create new Element | ".sport-3-videos-link-container"
  /* -------------------------------------------------------------------------------- */

    var new_sport_3_vidoes_link_container = document.createElement("div");
    var css_class_3_vidoes_link_container = "sport-3-videos-link-container";

    new_sport_3_vidoes_link_container.setAttribute("class", css_class_3_vidoes_link_container )

  /* ------------------------------------------------------------------------------------------------------ */
  // Step 3:
  // 3.1 Create new ".sport-video-link-box" by datas
  // 3.2 Add new ".sport-video-link-box" to  ".sport-3-videos-link-container"
  /* ------------------------------------------------------------------------------------------------------ */

      /*
          1,15 = 1, 1+15=16, 16+15=31
      */

      var sport_video_link_boxes = [];

      for( let i=0; i < dataWishedVideos.length; i++ ) {

        // console.log(i + ": " + wishedVideoDatas[i].imgName )

        sport_video_link_boxes.push( await async_get_created_content_sport_video_link_box_by_startIndex( dataDefaults, dataWishedVideos[i], startNr ) )
        // console.log("🐒 = " + sport_video_link_boxes[i].innerText )

        // if addNr > 1 start next step to addtion
        startNr = startNr + addNr;

        // subtract only by addNr bigger than 1 because of loop additions
        // e.g 1,15 = 1+15=16 but should be 15
        if( addNr > 1 && i == 0 ) {

          startNr = startNr -1;

        }


        // Add "sport_video_link_boxes[i]" to "new_sport_3_vidoes_link_container"
        new_sport_3_vidoes_link_container.appendChild( sport_video_link_boxes[i] )

      }


  /* -------------------------------------------------------------------------------- */
  // Step 4:
  // 4.1 Add "css Order: 2" to ".sport-3-videos-link-container"
  // 4.2 Add Final ".sport-3-videos-link-container" to "addPoint"
  /* -------------------------------------------------------------------------------- */

      new_sport_3_vidoes_link_container.style.order = "2";
      addPoint.appendChild( new_sport_3_vidoes_link_container )



  return new Promise(resolve => {
        resolve();
  })

}


// 🟣 auslagern get wished
/* -------------------------------------------------------------------- */
// Async | Get Wished Arrays from Data By Index Range
/* -------------------------------------------------------------------- */

async function async_get_wished_arrays_from_data_by_index_range( dataOfAllArrays, startIndex, endIndex ) {

  console.log("➡️ async_get_wished_arrays_from_data_by_index_range() ")

  console.log("🟣|startIndex= " + startIndex)
  console.log("🟣|endIndex= " + endIndex)

  /* --------------------------------------------------- */
  // Step 1:
  // Change Index to Array Index
  // e.g Index 1 = Array Index 0
  /* --------------------------------------------------- */

  var startArrayIndex = startIndex -1;
  var endArrayIndex = endIndex -1;

  /* --------------------------------------------------- */
  // Step 2:
  // Get wishes Arrays from Data by Index Range
  /* --------------------------------------------------- */

  var wishedDatas = [];

  for( let i=startArrayIndex; i <= endArrayIndex; i++ ) {

    wishedDatas.push( dataOfAllArrays[i] )

  }

  //Test Prints
  for( let i=0; i < wishedDatas.length; i++ ) {
    console.log(i + " : wishedDatas= " + wishedDatas[i].imgName)
  }



  return new Promise(resolve => {
      resolve( wishedDatas );
  })

}

    /* ----------------------------------------- */
    /* 🟣 Auslagern
    /* ----------------------------------------- */

    async function async_get_created_content_sport_video_link_box_by_startIndex( dataDefaults, wishedVideo, nrCounter ) {

      console.log("➡️ async_get_created_content_sport_video_link_box_by_startIndex()")

        /* --------------------------------------------------------- */
        /* Step 1:
        /* Create ".sport-video-link-box"
        /* --------------------------------------------------------- */

        var new_sport_video_link_box = document.createElement("div")
        var css_class_sport_video_link_box = "sport-video-link-box";
        new_sport_video_link_box.setAttribute("class", css_class_sport_video_link_box);


          /* -------------------------------------------------- */
          /* Step 1:
          /* Create & Adding | Nr
          /* -------------------------------------------------- */

            var nr_element = "";
            var css_class_nr = "nr-sport-video-link";
            var sub_nr_element = "";

            /* ---------------------------------- */
            /* Creatings ...
            /* ---------------------------------- */

            // Create Div Nr
            nr_element = document.createElement("div");
            nr_element.setAttribute("class", css_class_nr )

            // Create Sub Div Nr
            sub_nr_element = document.createElement("div");
            sub_nr_element.innerText = nrCounter;

            /* ---------------------------------- */
            /* Adding ...
            /* ---------------------------------- */

            // Add "sub_nr_element" to "nr_element"
            nr_element.appendChild( sub_nr_element)

            // Add "nr_element" to "new_sport_video_link_box"
            new_sport_video_link_box.appendChild( nr_element )


          /* -------------------------------------------------- */
          /* Step 2:
          /* Create & Adding | Img
          /* -------------------------------------------------- */

            var img_video = "";
            var imgVideoPath = dataDefaults.imgVideoPath;

            // Create img
            img_video = document.createElement("img");
            img_video.setAttribute("src", imgVideoPath + wishedVideo.imgName )
            img_video.setAttribute("alt", "img" )

            // Add "img_video" to "new_sport_video_link_box"
            new_sport_video_link_box.appendChild( img_video )


          /* -------------------------------------------------- */
          /* Step 3:
          /* Create & Adding | Link Show Me
          /* -------------------------------------------------- */

          // create only if externalLink is not empty
          if( wishedVideo.externalLink != "" ) {


            var link_element = "";

            /* ------------------------------------------------- */
            /* Get Default Link Datas
            /* ------------------------------------------------- */

            var linkTitle = dataDefaults.linkTitle;

            var imgIconGreyPath = dataDefaults.imgIconGreyPath;
            var imgIconGreyName = dataDefaults.imgIconGreyName;

            var imgIconBlackPath = dataDefaults.imgIconBlackPath;
            var imgIconBlackName = dataDefaults.imgIconBlackName;

            var imgIconCssClass = dataDefaults.imgIconCssClass;

            /* ---------------------------------- */
            /* Creatings ...
            /* ---------------------------------- */

            // Create Link Element
            link_element = document.createElement("a");
            link_element.setAttribute("href", wishedVideo.externalLink )
            link_element.setAttribute("target", "_blank" )

            // Create Sub Link Img Grey
            imgGreyLink = document.createElement("img");
            imgGreyLink.setAttribute("src", imgIconGreyPath + imgIconGreyName )
            imgGreyLink.setAttribute("alt", "img" )
            imgGreyLink.setAttribute("class", imgIconCssClass )

            // Create Sub Link Img Black
            imgBlackLink = document.createElement("img");
            imgBlackLink.setAttribute("src", imgIconBlackPath + imgIconBlackName )
            imgBlackLink.setAttribute("alt", "img" )
            imgBlackLink.setAttribute("class", imgIconCssClass )

            // Create Sub Link Div "Show Me"
            divTextShowMe = document.createElement("div");
            divTextShowMe.innerText = linkTitle;

            /* ---------------------------------- */
            /* Adding ...
            /* ---------------------------------- */

            // Add img grey
            link_element.appendChild( imgGreyLink );

            // Add img black
            link_element.appendChild( imgBlackLink );

            // Add div show me
            link_element.appendChild( divTextShowMe );

            // Add "link_element" to "new_sport_video_link_box"
            new_sport_video_link_box.appendChild( link_element)

          }


      return new Promise(resolve => {
          resolve( new_sport_video_link_box );
      })

    }










































/* ---------------------------------------------------- */
// ❌❌❌ Trash
/* ---------------------------------------------------- */


/* ------------------------------------------------------------------------- */
// Async | Create Radios | Sport Challenges
/* ------------------------------------------------------------------------ */

  async function async_create_radios_sport_challenges() {

    console.log("➡️ create_radios_sport_challenges")

    /* ---------------------------------------------- */
    /* Step 1:
    /* Get Data for Radios
    /* ---------------------------------------------- */

    var data_new_radios = data_header_nav_sport_categories;

    var max_radios = data_new_radios.sportChallengeCategories.length;
    var new_radio = "";

    var radio_id = "";
    var radio_name = data_new_radios.defaultsSportChallenges.radio_name_sport_challenge;



    // prints
    // console.log("max_radios= " + max_radios )

    // defaults
    // console.log("defauls:")
    // console.log("radio_name:" + radio_name )

    /* ---------------------------------------------- */
    /* Step 2:
    /* 1.1 Create Radios from Data
    /* 1.2 Add New Radio to Add Point
    /* ---------------------------------------------- */

    for( let i=0; i < max_radios; i++ ) {

      radio_id = data_new_radios.sportChallengeCategories[i].radioId
      // console.log(i + ": " + radio_id )

      // create radio
      new_radio = get_new_radio( radio_id, radio_name );

      // add to add point
      add_element_to_add_point_append( new_radio, add_point_radio_sport_challenges )

    }

    return new Promise(resolve => {
        resolve();
    })

  }

/* ------------------------------------------------------------------------- */
// Async | Create Labels | Sport Challenges
/* ------------------------------------------------------------------------- */

  async function async_create_labels_sport_challenges() {

    console.log("➡️ create_labels_sport_challenges")

    /* ---------------------------------------------- */
    /* Step 1:
    /* Get Data for Labels
    /* ---------------------------------------------- */

    // data
    var data_labels = data_header_nav_sport_categories;

    // max label creations
    var max_labels = data_labels.sportChallengeCategories.length;

    // default title choose
    var title_choose = data_labels.defaultsSportChallenges.title_choose_sport_challenge;

    var radio_id = "";
    var label_class = data_labels.defaultsSportChallenges.label_class_sport_challenge;

    var title_label = "";
    var sub_title_label = "";

    var custom_radio_class = data_labels.defaults.custom_radio_class;
    var custom_radio_img_src = data_labels.defaults.custom_radio_img_src;

    // creation elements
    var new_label = "";
    var new_title_block = "";
    var new_custom_radio = "";


    /* ---------------------------------------------- */
    /* Step 2:
    /* 1.1 Create Labels from Data
    /* 1.2 Add New Label to Add Point
    /* ---------------------------------------------- */

     for( let i=0; i < max_labels; i++ ) {

        radio_id = data_labels.sportChallengeCategories[i].radioId;

        title_label =  data_labels.defaultsSportChallenges.title_sport_challenge;
        sub_title_label = data_labels.sportChallengeCategories[i].subTitle;

        // overwrite title_label only by index = 0 = Choose
        if( i == 0 ) {

          // overwrite to choose
          title_label = title_choose;

        } else {

          title_label = title_label+" #" + i;

        }

        // create label
        new_label = get_new_label( radio_id, label_class )

          // [Sub-Element] create double line
          new_title_block = get_new_div_double_line( title_label, "» "+sub_title_label );
          add_element_to_add_point_append( new_title_block, new_label )

          // [Sub-Element] create custom radio
          new_custom_radio = get_new_custom_radio( custom_radio_class, custom_radio_img_src );
          add_element_to_add_point_append( new_custom_radio, new_label )


        // add final to add point
        add_element_to_add_point_append( new_label, add_point_radio_labels_sport_challenges )

    }

    return new Promise(resolve => {
        resolve();
    })


  }

/* ------------------------------------------------------------------------- */
// ➡️🟥 Async | Create | Radio Change Listener | Sport Challenges
/* ------------------------------------------------------------------------- */

  async function async_create_radio_change_listener_sport_challenges() {

    console.log("➡️ async_create_radio_change_listener_sport_challenges ")

    /* ---------------------------------------------- */
    /* Step 1:
    /* Get Data for Radio & Labels
    /* ---------------------------------------------- */

    // global
    var data = data_header_nav_sport_categories;

    // get created | radios
    var radio_name = data.defaultsSportChallenges.radio_name_sport_challenge;
    var radio_elements = document.querySelectorAll('input[name="'+radio_name+'"]')
    var max_radios = radio_elements.length;

    // get created | labels
    var nav_sport_challenges = add_point_radio_labels_sport_challenges;
    var label_elements = nav_sport_challenges.querySelectorAll("label")
    var custom_radios_imgs = nav_sport_challenges.querySelectorAll("label > .custom-radio-small > img");

    // Prints
    // console.log("radio_elements(lenght) = " + radio_elements.length )
    // console.log("label_elements(lenght) = " + label_elements.length )
    // console.log("custom_radios|lenght=" + custom_radios_imgs.length )


    /* ---------------------------------------------- */
    // Step 2:
    // 2.1 Create Radio Change Lister
    // 2.2 Set CSS Styling & Handlings
    /* ---------------------------------------------- */

    for( let i=0; i < max_radios; i++ ) {


      /* ------------------------------------------------------- */
      /* Add | Radio Change Listener
      /* ------------------------------------------------------- */

      radio_elements[i].addEventListener( "change", ()=> {

        // window.alert("🦁 Jetzt gehts rund = " + i )

        /* -------------------------------------------------- */
        // Step 1:
        // Unset all CSS Styles & Handlings
        /* -------------------------------------------------- */

          // unset css | label
          unset_elements_css_backgroundColor( label_elements )
          // unset css | radio
          unset_elements_css_display_none( custom_radios_imgs )

          // unset css | content 30 videos (global)
          unset_element_css_display_none( add_point_sport_challenge_30_videos_container )
          // unset css | content 3 videos (global)
          unset_element_css_display_none( add_point_sport_challange_3_videos_container )


        /* -------------------------------------------------- */
        // Step 2:
        // Set New CSS Style & Handling ( radio & label )
        /* -------------------------------------------------- */

          // set css | label
          label_elements[ i ].style.backgroundColor = "wheat";

          // set css | label -> custom radio > img
          custom_radios_imgs[ i ].style.display = "flex";


        /* -------------------------------------------------- */
        // Step 3:
        // Set Content | Sport Challenge by Index
        /* -------------------------------------------------- */

          /* info:
            index = 0 = choose => empty view
            index = 1 = 30 videos sport challenge
            index >=2 = 3 videos sport challenge
          */

          async_set_content_sport_challenges_by_index( i );


      } )

    }

    return new Promise(resolve => {
          resolve();
    })

  }
