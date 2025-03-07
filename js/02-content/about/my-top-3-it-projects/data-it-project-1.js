console.log('🟡 data-it-project-1.js')

/* --------------------------------------------------------- */
/* Data Object 
/* --------------------------------------------------------- */

const imgSrcs = [

    'media/img/content/about/my-top-3-about/project-1/project-1-sass-dashboard.png',
    'media/img/content/about/my-top-3-about/project-1/project-cover-img-in-construction.png'
]

var dataItProject1 ={

    project1: {

        header: {

            a:"a-1",
            b:"b-1"

        }
       
    },

    project2: {

        header: {

            a:"a-2",
            b:"b-2"

        }

    }
}

/* --------------------------------------------------------- */
/* DOM Elements 
/* --------------------------------------------------------- */

// 2 x Radio Boxes 
var radio_p1_1_it_project = document.getElementById('radio-top-3-it-project-1-1');
var radio_p1_2_it_project = document.getElementById('radio-top-3-it-project-1-2');

// header elements of it project card 
var img_cover_top3_project_1 = document.getElementById('js-img-cover-top-3-project-1');


/* --------------------------------------------------------- */
/* Functions
/* --------------------------------------------------------- */

// ⚠️ Auslagern:
// ⚠️ Universal Function,
//  check if one of a radio list is checked if not set the first 

function setCheckboxRadio( attrNameList ) {

    var foundChecked = 0

    if( attrNameList.length != null && attrNameList.length != undefined ) {


        for( let i=0; i < attrNameList.length; i++ ) {

            if( attrNameList[i].checked == true ) {

                // manuel html checked was found & exit 
                i = attrNameList.length;
                foundChecked = 1;
            } 
        }

        if( foundChecked == 0 ) {

            // not manuel html checked found , set default index 0
            attrNameList[0].checked = true;
        }
       

    } else {

        return '🆘Error|setCheckboxRadio()|: given attrNameList is null/undefined'

    }

}

// Set Header Content 

function setHeaderItProject( radioElements ) {

    var checkedIndex = 0;

    for( let i=0; i < radioElements.length; i++ ) {

        if( radioElements[i].checked == true ) {
            checkedIndex = i;
        }
    }

    /* ---------------------------------------------------- */
    /* Set New Header Data ( to js dom elements )
    /* ---------------------------------------------------- */
    console.log('imgSrcs[i]= ' + imgSrcs[checkedIndex] )
    // console.log('imgSrcs[i]' = imgSrcs[i] )
    img_cover_top3_project_1.setAttribute('src', imgSrcs[checkedIndex]);


}

/* --------------------------------------------------------- */
/* Events
/* --------------------------------------------------------- */

// Reminder: by visiting wepage & no radio was default 
// checked, we set the first

/* --------------------------------------- */
/* Change Event Radio | Project 1 
/* --------------------------------------- */

radio_p1_1_it_project.addEventListener( 'change', ()=> {

    console.log(' Radio | 1 > changed ')
    setHeaderItProject( radio_top_3_it_projects_1 )
})

/* --------------------------------------- */
/* Change Event Radio | Project 2 
/* --------------------------------------- */

radio_p1_2_it_project.addEventListener( 'change', ()=> {

    console.log(' Radio | 2 > changed ')
    setHeaderItProject( radio_top_3_it_projects_1 )
})