console.log("🟨 sport-category-handling.js")


/* ----------------------------------------------------------------- */
/* Data Variables
/* 1.1 Layout Elements ( header, nav )
/* 1.2 Data Content ( newest, challenges )
/* ----------------------------------------------------------------- */


/* --------------------------------------------- */
/* [1/2] | Data | Layout Elements
/* --------------------------------------------- */

const data_layout_sport_categories = {

  defImgSrc: "media/img/icons/02-icon-colors/01-black/",
  defSportChallengeTitle: "Challenge",

  sportNavs: [

    {
      imgName: "black-zick-zack-arrow.png",
      imgCss: "img-h-1-1",
      title: "Newest Videos"
    },

    {
      imgName: "black-2-swords.png",
      imgCss: "img-h-0-9",
      title: "Challenges"
    }

  ],

  sportHeaders: [

    {
      imgName: "black-zick-zack-arrow.png",
      imgCss: "img-h-2-5",
      title: "Newest Videos",
      subTitle: "» Max 9 Uploads"
    },

    {
      imgName: "black-2-swords.png",
      imgCss: "img-h-2-5",
      title: "Choose",
      subTitle: "» Challenges"
    }

  ],

  sportChallengeSubTitle: [

    {
      title: "become fit again"

    },
    {
      title: "have a six-pack again"

    }

  ]


}

/* --------------------------------------------- */
/* [2/2] | Data | Content
/* --------------------------------------------- */

const data_content_newest_sport_videos = {

  defImgSrc: "media/img/content/05_my_private/01_sport/fixed_sport/",
  defLinkTitle: "Show Me",

  defImgSrcLinkGrey: "media/img/icons/02-icon-colors/03-grey/",
  defImgLinkGrey: "grey-external-link.png",
  defImgSrcLinkBlack: "media/img/icons/02-icon-colors/01-black/",
  defImgLinkBlack: "black-external-link.png",

  defCssClass: "img-h-0-8",

  videos: [

    {
      imgName: "fixed-sport-1.png",
      externalLink: "https://drive.google.com/file/d/1J9eMjm1CyoqzBIsSzrurCSb6t3eB_f8z/view?usp=sharing"
    },
    {
      imgName: "fixed-sport-2.png",
      externalLink: "https://drive.google.com/file/d/1JrzXdVsQny1V9onl1rmJc_Q83o4WScHI/view?usp=sharing"
    },
    {
      imgName: "fixed-sport-3.png",
      externalLink: "https://drive.google.com/file/d/1Q_z7GMinGYnMW5Adv8lxNM2TgYF20_ih/view?usp=sharing"
    }

  ]

}

const data_content_sport_challenges_videos = {


  defImgSrc: "media/img/content/05_my_private/01_sport/",
  defLinkTitle: "Show Me",

  defImgSrcLinkGrey: "media/img/icons/02-icon-colors/03-grey/",
  defImgLinkGrey: "grey-external-link.png",
  defImgSrcLinkBlack: "media/img/icons/02-icon-colors/01-black/",
  defImgLinkBlack: "black-external-link.png",

  defCssClass: "img-h-0-8",

  challenges: [

    {
      content: [

        {
          imgName: "fixed-sport-1.png",
          externalLink: "https://drive.google.com/file/d/1J9eMjm1CyoqzBIsSzrurCSb6t3eB_f8z/view?usp=sharing"
        },
        {
          imgName: "fixed-sport-2.png",
          externalLink: "https://drive.google.com/file/d/1JrzXdVsQny1V9onl1rmJc_Q83o4WScHI/view?usp=sharing"
        },
        {
          imgName: "fixed-sport-3.png",
          externalLink: "https://drive.google.com/file/d/1Q_z7GMinGYnMW5Adv8lxNM2TgYF20_ih/view?usp=sharing"
        }
      ]

    },
    {
      content: [

        {
          imgName: "fixed-sport-1.png",
          externalLink: "https://drive.google.com/file/d/1J9eMjm1CyoqzBIsSzrurCSb6t3eB_f8z/view?usp=sharing"
        },
        {
          imgName: "fixed-sport-2.png",
          externalLink: "https://drive.google.com/file/d/1JrzXdVsQny1V9onl1rmJc_Q83o4WScHI/view?usp=sharing"
        },
        {
          imgName: "fixed-sport-3.png",
          externalLink: "https://drive.google.com/file/d/1Q_z7GMinGYnMW5Adv8lxNM2TgYF20_ih/view?usp=sharing"
        }
      ]

    }

  ]

}

/* ----------------------------------------------------------------- */
/* Variables & DOM Elements
/* ----------------------------------------------------------------- */

var max_content_items_newest_sport_videos = get_max_content_items_newest_sport_videos( data_content_newest_sport_videos.videos )
var max_content_items_sport_challenges = get_max_content_items_sport_challenges( data_content_sport_challenges_videos.challenges )

/* --------------------------------------------------- */
/* Checkbox | Selected Sport Category
/* --------------------------------------------------- */

const chk_selected_sport_category = document.getElementById("chk-selected-sport-category");
const lbl_selected_sport_category = document.querySelector("label[for='chk-selected-sport-category']")

const img_lbl_selected_sport_category = document.getElementById("js-img-selected-sport-category");
const txt_lbl_selected_sport_category = document.getElementById("js-text-selected-sport-category");
const txt_count_lbl_selected_sport_category = document.getElementById("js-countText-selected-sport-category");

/* --------------------------------------------------- */
/* Radios | Sport Categories
/* --------------------------------------------------- */

const txt_radio_name_sport_category = "radio-name-sport-category";

var radios_sport_categories = [

  document.getElementById("radio-sport-newest-videos"),
  document.getElementById("radio-sport-challenge-videos"),

]

var lbl_radios_sport_categories = [

  document.querySelector('label[for="radio-sport-newest-videos"]'),
  document.querySelector('label[for="radio-sport-challenge-videos"]')

]

/* --------------------------------------------------- */
/* Header | Sport Category
/* --------------------------------------------------- */

const img_header_sport_category = document.getElementById("js-header-img-sport-category");
const title_header_sport_category = document.getElementById("js-header-title-sport-category");
const sub_title_header_sport_category = document.getElementById("js-header-sub-title-sport-category");

/* --------------------------------------------------- */
/* Checkbox | Selected Sport Challenges
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/* Radios | Sport Challenges
/* --------------------------------------------------- */

const add_point_radio_sport_challenges = document.getElementById("sport-container-my-private");
const add_point_radio_labels_sport_challenges = document.getElementById("nav-sport-category-challenges");


/* ----------------------------------------------------------------------------------- */
/* Functions
/* ----------------------------------------------------------------------------------- */

  /* -------------------------------------------------------------- */
  /* Get Max Content Items | Newest Sport Vidoes
  /* -------------------------------------------------------------- */

  function get_max_content_items_newest_sport_videos( data_videos ) {

    return data_videos.length;
  }

  /* -------------------------------------------------------------- */
  /* Get Max Content Items | Sport Challenges
  /* -------------------------------------------------------------- */

  function get_max_content_items_sport_challenges ( data_challenges ) {

    return data_challenges.length;
  }

  /* ------------------------------------------ */
  /* Start View | Sport Category Content
  /* ------------------------------------------ */

  function start_view_sport_category_content() {

    /* -------------------------------------------------- */
    /* Step 1:
    /* Update (Nav Selected & Header) - Sport Category &
    /* if no setting content found, set default
    /* content index = 0
    /* -------------------------------------------------- */

    var setted_index = get_setted_radio_index( txt_radio_name_sport_category )

    if( setted_index == -1 ) {

      // console.log("Use Default Index = " + 0)

      // Update Label | Selected Sport Category
      update_nav_selected_sport_category( 0 )

      // 🟥 unset radios sport challenges
      console.log("⚠️⚠️⚠️ Uncheck | Sport Challenges  ")

      // Update Header | Sport Category
      update_header_sport_category( 0 )


    } else {

    // console.log("Use Setted Index = " + setted_index)

    // Update Label | Selected Sport Category
    update_nav_selected_sport_category( setted_index )

    // 🟥 Update Labels | Sport Categories ( newest, challanges )

    // Update Header | Sport Category
    update_header_sport_category( setted_index )

    }

    /* -------------------------------------- */
    /* Step 2:
    /* Update Nav Sport Categories
    /* ( newest, challenges )
    /* -------------------------------------- */
    update_nav_sport_categories( lbl_radios_sport_categories );


  }

  /* ------------------------------------------ */
  /* Update Nav | Selected Sport Category
  /* ------------------------------------------ */

  function update_nav_selected_sport_category( sport_category_index ) {

    var index = sport_category_index;

    /* ----------------------------------------------------- */
    /* Step 1:
    /* Set Content by given Radio Index
    /* ----------------------------------------------------- */

    set_radio( radios_sport_categories[index] )

    /* ----------------------------------------------------- */
    /* Step 2:
    /* Update | Nav
    /* ----------------------------------------------------- */

    // img
    var def_img_path = data_layout_sport_categories.defImgSrc;
    var img_name = data_layout_sport_categories.sportNavs[index].imgName;
    var img_css_class = data_layout_sport_categories.sportNavs[index].imgCss;

    // title & max items
    var title = data_layout_sport_categories.sportNavs[index].title;
    var max_content_items = "";

    /* -------------------------------------------- */
    /* Count Max Countent Items
    /* ( Newest Vidoes, Challenges )
    /* -------------------------------------------- */

    switch( index ) {

      // Update | Newest Videos
      case 0:
        max_content_items = max_content_items_newest_sport_videos;
        break;

      // Update | Challenges
      case 1:
        max_content_items = max_content_items_sport_challenges;
        break;

      default:
        console.log("🟥 Wrong Sport Category Index")
        break;

    }

    /* ----------------------------------------------------- */
    /* Step 3
    /* Update Label | Setted Sport Category
    /* ----------------------------------------------------- */

    // Update Img Src + Css Class Selector
    update_img_src_and_size( img_lbl_selected_sport_category, def_img_path+img_name, img_css_class )

    // Update Title
    update_text( txt_lbl_selected_sport_category, title )

    // Update Max Items
    txt_count_lbl_selected_sport_category.innerText = "("+max_content_items+")";


  }

  /* -------------------------------------------------------------- */
  /* Update Nav | Sport Categories ( Newest, Challenges )
  /* -------------------------------------------------------------- */

  function update_nav_sport_categories( label_radio_elements ) {

    // console.log("🌳🌳🌳")
    // console.log("Max Radio Elements = " + label_radio_elements.length )

    var def_img_path = "";
    var img_name = "";
    var img_css_class = "";

    var title = "";
    var max_content_items = "";

    // update all nav sport categories
    for( let i=0; i < label_radio_elements.length; i++ ) {

      // update | img
      def_img_path = data_layout_sport_categories.defImgSrc;
      img_name = data_layout_sport_categories.sportNavs[i].imgName;
      img_css_class = data_layout_sport_categories.sportNavs[i].imgCss;

      // console.log("😈 def_img_path= " + def_img_path)
      // console.log("😈 = img_name" + img_name)
      // console.log("😈 = img_css_class" + img_css_class)

      label_radio_elements[i].querySelector("div > div img:nth-of-type(1)").src = def_img_path + img_name;
      label_radio_elements[i].querySelector("div > div img:nth-of-type(1)").style.height = img_css_class;

      // update | title
      title = data_layout_sport_categories.sportNavs[i].title;
      // console.log("😈 = " + title)
      label_radio_elements[i].querySelector("div > div > span:nth-of-type(1)").innerText = title;

      // update | max content items
      switch( i ){

        case 0:
          // global
          max_content_items = max_content_items_newest_sport_videos;
          break;
        case 1:
          // global
          max_content_items = max_content_items_sport_challenges;
          break;
        default:
          break;
      }

      label_radio_elements[i].querySelector("div > div > span:nth-of-type(2)").innerText = "("+max_content_items+")";

    }


  }

  /* ------------------------------------------ */
  /* Update Header | Setted Sport Category
  /* ------------------------------------------ */

  function update_header_sport_category( sport_category_index ) {

    var index = sport_category_index;

    /* ----------------------------------------------------- */
    /* Step 1:
    /* Set Data by setted Sport Category Index
    /* ----------------------------------------------------- */

    // img
    var def_img_path = data_layout_sport_categories.defImgSrc;
    var img_name = data_layout_sport_categories.sportHeaders[index].imgName;
    var img_css_class = data_layout_sport_categories.sportHeaders[index].imgCss;

    // console.log("1 = " + def_img_path)
    // console.log("1 = " + img_name)
    // console.log("1 = " + img_css_class)

    // Update Img Src + Css Class Selector
    update_img_src_and_size( img_header_sport_category, def_img_path+img_name, img_css_class )

    // title
    var title = data_layout_sport_categories.sportHeaders[index].title;
    // console.log("1 = " + title )

    // Update Title
    update_text( title_header_sport_category, title )

    // sub title
    var sub_title = data_layout_sport_categories.sportHeaders[index].subTitle;
    // console.log("1 = " + sub_title )

    // Update Title
    update_text( sub_title_header_sport_category, sub_title )


  }



/* ----------------------------------------------------------------------------------- */
/* Events
/* ----------------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------------- */
  /* Radio Change | Sport Categories ( Newest, Challenges )
  /* -------------------------------------------------------------------------------- */

  for( let index=0; index < radios_sport_categories.length; index++ ) {

    radios_sport_categories[index].addEventListener("change", ()=> {

      console.log("Radio Changed State = " + index )

      /* ----------------------------------------------------------- */
      /* Step 1:
      /* close layout view | selected sport category
      /* ----------------------------------------------------------- */

      chk_selected_sport_category.checked = false;

      // 🟥 unset radios sport challenges
      if( radios_sport_categories[0].checked == true ) {

        console.log("⚠️⚠️⚠️ Uncheck | Sport Challenges  ")

      }

      /* ----------------------------------------------------------- */
      /* Step 2:
      /* update label | nav selected sport category
      /* ----------------------------------------------------------- */
      update_nav_selected_sport_category( index )

      /* ----------------------------------------------------------- */
      /* Step 3:
      /* update header | sport category
      /* ----------------------------------------------------------- */

      update_header_sport_category( index )

    })


  }

  /* -------------------------------------------------------------------------------- */
  /* Radio Change | Sport Categories ( Newest, Challenges )
  /* -------------------------------------------------------------------------------- */

  // Radio Change | Sport Category Selections

/* ----------------------------------------------------------------- */
/* ➡️ Execute ( Start Point )
/* ----------------------------------------------------------------- */

  function create_radio_labels_sport_challenges( data_layout , add_point_radios, add_point_radio_labels ) {

    console.log("🦖 Create Radio Labels | Sport Challenges ")

    // dyn. create css selectors ?

    // const ?!
    var radio_sport_challenge_id = "";
    var radio_sport_challenge_name = "";

    var title = data_layout;
    var sub_title = "";
    var nr = "";

    console.log("🟥 Radio Add Point | " + add_point_radios )
    console.log("🟥 Radio Labels Add Point | " + add_point_radio_labels )

    console.log("------")

    /*

        1. Prints

        2. Add Radio Elements
        3. Add Label Elements

        4. Add CSS Selector Elements -> ( extra Funktion )

    */

    /* -------------------------------------------- */
    /* Create Radios
    /* -------------------------------------------- */

    /* -------------------------------------------- */
    /* Create Labels
    /* -------------------------------------------- */


    // data_layout_sport_categories

  }

  /* -------------------------------------------------- */
  /* Show Content
  /* -------------------------------------------------- */

  start_view_sport_category_content();


  create_radio_labels_sport_challenges( data_layout_sport_categories,
                                        add_point_radio_sport_challenges,
                                        add_point_radio_labels_sport_challenges );
