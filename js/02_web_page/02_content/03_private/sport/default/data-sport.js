// console.log("🟨 data-sport.js")


  /* ------------------------------------------------- */
  // Data | Header Nav | Sport Categories
  /* ------------------------------------------------- */

  const data_header_nav_sport_categories = {

    defaults: {

      img_icon_src: "media/img/icons/02-icon-colors/01-black/",

      custom_radio_class: "custom-radio-small",
      custom_radio_img_src: "media/img/icons/02-icon-colors/01-black/black-styling-art-x.png"

    },

    defaultsSportChallenges: {

      radio_name_sport_challenge: "radio-sport-challenges-XXX",
      label_class_sport_challenge: "drop-down-2-lines-light-grey-medium",

      title_choose_sport_challenge: "Choose ...",
      title_sport_challenge: "Challenge",

    },

    sportCategories: [

      {
        imgName: "black-zick-zack-arrow.png",
        imgClass: "img-h-1-1",
        title: "Newest Videos🦁"
      },

      {
        imgName: "black-2-swords.png",
        imgClass: "img-h-0-9",
        title: "Challenges🦆"
      }

    ],

    sportCategoriesHeaders: [

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

    ],

    sportChallengeCategories: [


      {
        checked: "false",
        radioId: "radio-sport-challenge-choose",
        subTitle: "Challenges"

      },
      {
        checked: "false",
        radioId: "radio-sport-challenge-1",
        subTitle: "become fit again"

      },
      {
        checked: "true",
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

    ]

  }

  /* ------------------------------------------------- */
  // Data | Newest Sport Videos
  /* ------------------------------------------------- */

  const data_newest_sport_videos = {

    defaults: {

      imgVideoSrc: "media/img/content/05_my_private/01_sport/fixed_sport/",
      linkTitle: "Show Me",

      imgIconGreySrc: "media/img/icons/02-icon-colors/03-grey/",
      imgIconGreyName: "grey-external-link.png",

      imgIconBlackSrc: "media/img/icons/02-icon-colors/01-black/",
      imgIconBlackName: "black-external-link.png",

      imgIconCssClass: "img-h-0-8"


    },

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

  /* ------------------------------------------------- */
  // Data | Sport Challenges
  /* ------------------------------------------------- */

  const data_sport_challenges_videos = {

    defaults: {

      imgVideoSrc: "media/img/content/05_my_private/01_sport/fixed_sport/",
      linkTitle: "Show Me",

      imgLinkGreySrc: "media/img/icons/02-icon-colors/03-grey/",
      imgLinkGreyName: "grey-external-link.png",

      imgLinkBlackSrc: "media/img/icons/02-icon-colors/01-black/",
      imgLinkBlackName: "black-external-link.png",

      imgLinkCssClass: "img-h-0-8",

      titleDays: "30 Days",
      imgDaysSrc: "media/img/icons/03-emojies/04-hobbys/emojie-dart.png",
      imgDaysClass: "img-h-0-8",

      imgSportArtSrc: "media/img/icons/02-icon-colors/03-grey/"

    },

    challenges: [

      {
        content: {

          details: {

            info: "Parts of Training Sessions 🦖",

            sportArts: [

              {
                days: "3 Days",

                items: [

                  {
                    imgName: "grey-running-human.png",
                    imgCssClass: "img-h-0-7",
                    title: "Running"
                  },

                  {
                    imgName: "grey-biceps.png",
                    imgCssClass: "img-h-0-7",
                    title: "Strength"
                  },

                  {
                    imgName: "light-grey-human-flexibility.png",
                    imgCssClass: "img-h-0-8",
                    title: "Flexibility"
                  }


                ]

              },

              {
                days: "2 Days",

                items: [

                  {
                    imgName: "grey-6-plastic.png",
                    imgCssClass: "img-h-0-7",
                    title: "Stomach"
                  },

                  {
                    imgName: "grey-body-back.png",
                    imgCssClass: "img-h-0-7",
                    title: "Back"
                  },

                  {
                    imgName: "grey-gymnastics.png",
                    imgCssClass: "img-h-0-7",
                    title: "Calisthenics"
                  },

                  {
                    imgName: "light-grey-human-flexibility.png",
                    imgCssClass: "img-h-0-7",
                    title: "Flexibility"
                  }


                ]

              },

              {
                days: "",

                items: [

                  {
                    imgName: "grey-gymnastics.png",
                    imgCssClass: "img-h-0-7",
                    title: "Calisthenics"
                  },

                  {
                    imgName: "light-grey-human-flexibility.png",
                    imgCssClass: "img-h-0-7",
                    title: "Flexibility"
                  },




                ]

              }

            ]

          },

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

      },

      {
        content: {

          details: {

            info: "Parts of Training Sessions 🍌🍌🍌",

            sportArts: [

              {
                days: "3 Days",

                items: [

                  {
                    imgName: "grey-running-human.png",
                    imgCssClass: "img-h-0-7",
                    title: "Running"
                  },

                  {
                    imgName: "grey-biceps.png",
                    imgCssClass: "img-h-0-7",
                    title: "Strength"
                  },

                  {
                    imgName: "light-grey-human-flexibility.png",
                    imgCssClass: "img-h-0-8",
                    title: "Flexibility"
                  }


                ]

              },

              {
                days: "2 Days",

                items: [

                  {
                    imgName: "grey-6-plastic.png",
                    imgCssClass: "img-h-0-7",
                    title: "Stomach"
                  },

                  {
                    imgName: "grey-body-back.png",
                    imgCssClass: "img-h-0-7",
                    title: "Back"
                  },

                  {
                    imgName: "grey-gymnastics.png",
                    imgCssClass: "img-h-0-7",
                    title: "Calisthenics"
                  },

                  {
                    imgName: "light-grey-human-flexibility.png",
                    imgCssClass: "img-h-0-7",
                    title: "Flexibility"
                  }


                ]

              },

              {
                days: "",

                items: [

                  {
                    imgName: "grey-gymnastics.png",
                    imgCssClass: "img-h-0-7",
                    title: "Calisthenics"
                  },

                  {
                    imgName: "light-grey-human-flexibility.png",
                    imgCssClass: "img-h-0-7",
                    title: "Flexibility"
                  },




                ]

              }

            ]

          },

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

      },

      {
        content: {

          details: {

            info: "🐉 Dragon Ball Z - Training Sessions",

            sportArts: [

              {
                days: "3 Days",

                items: [

                  {
                    imgName: "grey-running-human.png",
                    imgCssClass: "img-h-0-7",
                    title: "Running"
                  },

                  {
                    imgName: "grey-biceps.png",
                    imgCssClass: "img-h-0-7",
                    title: "Strength"
                  },

                  {
                    imgName: "light-grey-human-flexibility.png",
                    imgCssClass: "img-h-0-8",
                    title: "Flexibility"
                  }


                ]

              },

              {
                days: "2 Days",

                items: [

                  {
                    imgName: "grey-6-plastic.png",
                    imgCssClass: "img-h-0-7",
                    title: "Stomach"
                  },

                  {
                    imgName: "grey-body-back.png",
                    imgCssClass: "img-h-0-7",
                    title: "Back"
                  },

                  {
                    imgName: "grey-gymnastics.png",
                    imgCssClass: "img-h-0-7",
                    title: "Calisthenics"
                  },

                  {
                    imgName: "light-grey-human-flexibility.png",
                    imgCssClass: "img-h-0-7",
                    title: "Flexibility"
                  }


                ]

              },

              {
                days: "",

                items: [

                  {
                    imgName: "grey-gymnastics.png",
                    imgCssClass: "img-h-0-7",
                    title: "Calisthenics"
                  },

                  {
                    imgName: "light-grey-human-flexibility.png",
                    imgCssClass: "img-h-0-7",
                    title: "Flexibility"
                  },




                ]

              }

            ]

          },

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

      }

    ]

  }
