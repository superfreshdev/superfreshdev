// console.log("🟨 data-layout-sport.js")


/* ------------------------------------------------- */
// Data | Layout | Default Sport
/* ------------------------------------------------- */

  const data_layout_defaultSport = {

    defaults: {

        imgDefaultBlackPath: "media/img/icons/02-icon-colors/01-black/",
        imgDefaultGreyPath: "media/img/icons/02-icon-colors/03-grey/",

        imgNameBlackExternalLink: "black-external-link.png",
        imgNameGreyExternalLink: "grey-external-link.png",

        cssClassImgExternalLink: "img-h-0-8",
        textExternalLink: "Show Me",

        cssClassSmallCustomRadio: "custom-radio-small",
        imgNameBlackCreativeX: "black-styling-art-x.png",

    },

    sport3VideoLinkContainer: {

      cssClassSport3VideosLinkContainer: "sport-3-videos-link-container",
      cssClassSportVideoLinkBox: "sport-video-link-box",

      cssClassNrSportVideoLink: "nr-sport-video-link",


    }


  }

/* ------------------------------------------------- */
// Data | Layout | Sport Categories
/* ------------------------------------------------- */

  const data_layout_sportCategories = {

    navs: [

      {
        imgName: "black-zick-zack-arrow.png",
        imgClass: "img-h-1-2",
        title: "Newest Videos🦁"
      },

      {
        imgName: "black-2-swords.png",
        imgClass: "img-h-0-9",
        title: "Challenges🦆"
      }


    ],

    headers: [

      {
        imgName: "black-zick-zack-arrow.png",
        imgClass: "img-h-2-5",
        title: "Newest Videos",
        subTitle: "» Max 9 Uploads"
      },

      {
        imgName: "black-2-swords.png",
        imgClass: "img-h-2-5",
        title: "Choose",
        subTitle: "» Challenges"
      }

    ]

  }

/* ------------------------------------------------- */
// Data | Layout | Sport Challenges
/* ------------------------------------------------- */

  const data_layout_sportChallenges = {

    defaults: {

      radioName: "radio-sport-challenges-XXX",
      cssClassLabel: "action-element-2-lines-light-grey",
      cssClassActiveLabel: "active-sport-challenge",

      imgEmojiesPath: "media/img/icons/03-emojies/04-hobbys/",
      imgNameDart: "emojie-dart.png",
      cssClassImgDard: "img-h-1",

      imgNameGreyCalendar: "grey-calendar.png",
      cssClassImgGreyCalender: "img-h-1",

      textChallenge: "Challenge",
      textChoose: "Choose ..."

    },

    nav: [

      {
        checked: "true",
        radioId: "radio-sport-challenge-choose",
        subTitle: "Challenges"

      },
      {
        checked: "false",
        radioId: "radio-sport-challenge-1",
        subTitle: "become fit again"

      },
      {
        checked: "false",
        radioId: "radio-sport-challenge-2",
        subTitle: "have a six-pack again"

      },
      {
        checked: "false",
        radioId: "radio-sport-challenge-3",
        subTitle: "🐉 Dragon Ball Z"

      },
      {
        checked: "false",
        radioId: "radio-sport-challenge-4",
        subTitle: "👒 One Piece"

      }

    ],

    infoAbout: {

      cssClassInfoAbout: "info-about-sport-challenge-container",
      cssClassHeaderInfoWorkout: "header-info-workout-sport-challenge",

      cssClassWeekWorkoutContainer: "week-workout-sport-challenge-container",
      cssClassInfoDays: "info-days-sport-workout",
      cssClassInfoSport: "info-sport-workout-category"

    }

  }
