console.log('[🟡|content|about|my-top-3-it-projects| ➡️ data-it-project-1-js]')

/* --------------------------------------------------------- */
/* Data Object | Project 1
/* --------------------------------------------------------- */

var dataTop3Project1 = [

    {
        header: {

            imgSrcCover: "media/img/content/about/my-top-3-about/project-1/project-1-sass-dashboard.png",
            txtProjectNr: "Project 1:",
            status: "in progress",
            imgSrcProjectTtile: "media/img/icons/tech-icons/styled-tech-icons/sass-logo-sfd.png",
            projectTitle: "German Step by Step Video Tutorial | CSS to SASS | How to build an Responsive Dashboard #1 by Inspiration of an User Template from Pinterest",
            skillItems: [ "CSS" , "SASS", "Layout Concepts", "UX", "Responsive", "Java Script", "chart.js", "VSCoce" ],

        }
    },

    {
        header: {

            imgSrcCover: "media/img/content/about/my-top-3-about/project-1/project-cover-img-in-construction.png",
            txtProjectNr: "Project 2:",
            status: "coming soon",
            imgSrcProjectTtile: "media/img/icons/tech-icons/styled-tech-icons/storybook-logo-sfd.png",
            projectTitle: "German Step by Step Video Tutorial | CSS to SASS | How to build an Responsive Dashboard #2 by Inspiration of an User Template from Pinterest",
            skillItems: [ "test-1" , "test-2", "test-3", "test-4" ],

        }
    },
]


/* --------------------------------------------------------- */
/* DOM Elements 
/* --------------------------------------------------------- */

// IDs Elements of Radio Project 1 ( My Top 3 IT Projects )
var radio_p1_1_it_project = document.getElementById('radio-top-3-it-project-1-1');
var radio_p1_2_it_project = document.getElementById('radio-top-3-it-project-1-2');

// header elements of it project card 
var img_cover_top3_project_1 = document.getElementById('js-img-cover-top-3-project-1');

// txt project nr & status 
var div_p1_nr_project_t3 = document.getElementById('js-p1-nr-project-t3');
var div_p1_status_project_t3 = document.getElementById('js-p1-status-project-t3');

// img small project title & project title
var img_small_p1_project_t3 = document.getElementById('js-img-small-project-title-p1-t3')
var div_project_title_p1_project_t3 = document.getElementById('js-project-title-p1-t3')

/* ----------------------------------------------------------------------------------- */
/* Functions
/* ----------------------------------------------------------------------------------- */


/* ------------------------------------------------------------------- */
/* ⚠️ Function | Set | Header | IT Project Card 
/* ------------------------------------------------------------------- */

/* ------------------------------------------------------------------- */
/* ⚠️ Function | Set | Video List |  IT Project Card 
/* ------------------------------------------------------------------- */

/* ------------------------------------------------------------------- */
/* ⚠️ Function | Set | zip-github-container |  IT Project Card 
/* ------------------------------------------------------------------- */


/* --------------------------------------------------------------------------------------------------- */
/* Events
/* --------------------------------------------------------------------------------------------------- */

// Reminder: by visiting wepage & no radio was default 
// checked, we set the first radio

/* ------------------------------------------------------------------- */
/* Radio | Project 1 | Change Event  
/* ------------------------------------------------------------------- */

radio_p1_1_it_project.addEventListener( 'change', ()=> {

    var setProjectIndex = -1;

    /* --------------------------------------------------- */
    /* Console Logs
    /* --------------------------------------------------- */
    console.log(' Radio | 1 > changed ')
    console.log(' New Index Checked: ' + getCheckedIndex( radios_top_3_it_projects_1 ) )


    /* --------------------------------------------------- */
    /* Update Infos: Project Card
    /* --------------------------------------------------- */

    setProjectIndex = getCheckedIndex( radios_top_3_it_projects_1 );

    console.log('----------------------------------------------')

    console.log(' Set IMG SRC = ' + dataTop3Project1[setProjectIndex].header.imgSrcCover )

    console.log(' Set txt Project Nr = ' + dataTop3Project1[setProjectIndex].header.txtProjectNr )

    console.log(' Set Skill Item 1 = ' + dataTop3Project1[setProjectIndex].header.skillItems[0] )

    console.log('----------------------------------------------')


    /* ------------------------------------------ */
    /* Build in Function
    /* ------------------------------------------ */

    // img cover
    setValueAttribute( 'src', dataTop3Project1[setProjectIndex].header.imgSrcCover , img_cover_top3_project_1)

    // project nr & status
    setTextToDomElement( dataTop3Project1[setProjectIndex].header.txtProjectNr, div_p1_nr_project_t3 )
    setTextToDomElement( dataTop3Project1[setProjectIndex].header.status, div_p1_status_project_t3 )

    // img small project title & project title
    setValueAttribute( 'src', dataTop3Project1[setProjectIndex].header.imgSrcProjectTtile , img_small_p1_project_t3 )
    setTextToDomElement( dataTop3Project1[setProjectIndex].header.projectTitle, div_project_title_p1_project_t3 )

})

/* ------------------------------------------------------------------- */
/* Radio | Project 2 | Change Event 
/* ------------------------------------------------------------------- */

radio_p1_2_it_project.addEventListener( 'change', ()=> {

    var setProjectIndex = -1;

    /* --------------------------------------------------- */
    /* Console Logs
    /* --------------------------------------------------- */
    console.log(' Radio | 2 > changed ')
    console.log(' New Index Checked: ' + getCheckedIndex( radios_top_3_it_projects_1 ) )

    /* --------------------------------------------------- */
    /* Update Infos: Project Card
    /* --------------------------------------------------- */

    setProjectIndex = getCheckedIndex( radios_top_3_it_projects_1 );

    console.log('----------------------------------------------')

    console.log(' Set IMG SRC = ' + dataTop3Project1[setProjectIndex].header.imgSrcCover )

    console.log(' Set txt Project Nr = ' + dataTop3Project1[setProjectIndex].header.txtProjectNr )

    console.log(' Set Skill Item 1 = ' + dataTop3Project1[setProjectIndex].header.skillItems[0] )

    console.log('----------------------------------------------')



    /* ------------------------------------------ */
    /* Build in Function
    /* ------------------------------------------ */

    // img cover
    setValueAttribute( 'src', dataTop3Project1[setProjectIndex].header.imgSrcCover , img_cover_top3_project_1)

    // project nr & status
    setTextToDomElement( dataTop3Project1[setProjectIndex].header.txtProjectNr, div_p1_nr_project_t3 )
    setTextToDomElement( dataTop3Project1[setProjectIndex].header.status, div_p1_status_project_t3 )

    // img small project title & project title
    setValueAttribute( 'src', dataTop3Project1[setProjectIndex].header.imgSrcProjectTtile , img_small_p1_project_t3 )
    setTextToDomElement( dataTop3Project1[setProjectIndex].header.projectTitle, div_project_title_p1_project_t3 )

 









    /* -------------------------------------------------------------- */
    /* Step 1 | SET | IMG DOC Cover
    /* -------------------------------------------------------------- */ 

    /* -------------------------------------------------------------- */
    /* Step 2 | SET | Project Nr Info 
    /* -------------------------------------------------------------- */ 

    /* -------------------------------------------------------------- */
    /* Step 3 | SET | Project Title & Small Img
    /* -------------------------------------------------------------- */ 

    /* -------------------------------------------------------------- */
    /* Step 4 | SET | Skill Items 
    /* -------------------------------------------------------------- */ 


    /* -------------------------------------------------------------- */
    /* Step 5 | SET | Optional ( Video / GitHub )
    /* -------------------------------------------------------------- */ 
})