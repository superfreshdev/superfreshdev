//console.log('[🟡|default| ➡️ windowsOnLoad.js]')

/* ------------------------------------------------------------ */
/* DOM Elements 
/* ------------------------------------------------------------ */ 

    /* --------------------------------------------------- */
    /* Body ( header, main, footer )
    /* --------------------------------------------------- */ 

    // Footer: Year Element 
    var yearBodyFooter = document.getElementById('js-txt-year-copyright');

    /* --------------------------------------------------- */
    /* About
    /* --------------------------------------------------- */ 

    // Actually Date Elements
    var day = document.getElementById('js-txt-day');
    var month = document.getElementById('js-txt-month');
    var year = document.getElementById('js-txt-year');

    /* --------------------------------------------------- */
    /* IT Docs 
    /* --------------------------------------------------- */ 

    // IT Docs Items Counter 
    var spanItDocsDone = document.getElementById('js-counter-it-doc-done');
    var spanItDocsInProgress = document.getElementById('js-counter-it-doc-in-progress');
    var spanItDocsComingSoon = document.getElementById('js-counter-it-doc-coming-soon');

    /* --------------------------------------------------- */
    /* My Top 3 IT Projects 
    /* --------------------------------------------------- */ 

    // Project 1: Radio of Projects | SASS ...
    var radios_top_3_it_projects_1 = document.getElementsByName('name-radio-top-3-it-project-1');;
    // console.log('⚔️⚔️⚔️ = ' +radios_top_3_it_projects_1.length )

    // Project 2: Radio of Projects | Angular ...

    // Project 3: Radio of Projects | Java ...


/* ------------------------------------------------------------ */
/* [empty] | Functions
/* ------------------------------------------------------------ */ 


/* ------------------------------------------------------------ */
/* Events  
/* ------------------------------------------------------------ */ 

window.addEventListener( 'load', ()=> {

    
    /* ---------------------------------------------- */
    /* About
    /* ---------------------------------------------- */

        setEnglishFormattedDate( day, month, year )
        yearBodyFooter.innerText = getYear();
    
    /* ---------------------------------------------- */
    /* IT Docs 
    /* ---------------------------------------------- */

        // Span Elements | Count IT Doc for done, in progress, coming soon 
        spanItDocsDone.innerText = document.querySelectorAll('#open-close-smooth-done-it-docs .it-doc-item-card').length;
        spanItDocsInProgress.innerText =  document.querySelectorAll('#open-close-smooth-in-progress-it-docs .it-doc-item-card').length;
        spanItDocsComingSoon.innerText =  document.querySelectorAll('#open-close-smooth-coming-soon-it-docs .it-doc-item-card').length;

    /* ---------------------------------------------- */
    /* My Top 3 IT Projects
    /* ---------------------------------------------- */

       
        /* ------------------------------------------------------------------------------------------ */
        /* Project 1
        /* ------------------------------------------------------------------------------------------ */

            /* -------------------------------------------------------- */
            /* Step 1: Secure Check
            /*
            /* > if no default project was checked, than 
            /*   check the first index element (0)
            /* -------------------------------------------------------- */ 
            setDefaultCheckedElement( radios_top_3_it_projects_1 )


            /* -------------------------------------------------------- */
            /* Step 2: Set Project Card 1 ( Project 1 of 3 )
            /* 
            /* > Use setted Project Index to create
            /*   Project Card 1 
            /* -------------------------------------------------------- */ 

                /* ------------------------------------------------------------------------------------ */
                /* Step 2.1: Set | Header | Project Card 1
                /* ------------------------------------------------------------------------------------ */
                
                var setProject1Index = getCheckedIndex( radios_top_3_it_projects_1 );
                setValueAttribute( 'src', dataTop3Project1.projects[setProject1Index].header.imgSrcCover, img_cover_top3_project_1 ) 


                // ❌ Quick Fix 

                 // GET | New Checked Project Index 
                // setProjectIndex = getCheckedIndex( radios_top_3_it_projects_1 );

                // UPDATE | IT Project Card by Checked Project Index
                //updateItProjectCard( setProjectIndex )



                /* ------------------------------------------------------------------------------------ */
                /* Step 2.2: Set | Video List & zip-github Container | Project Card 1
                /*
                /* > This will be only created if in the json data object property allows that to create
                /*    because its possible for e.g not to show zip-github container but video list
                /* ------------------------------------------------------------------------------------ */
                
                

           




        /* ------------------------------------------------------------------------------------------ */
        /* Project 2
        /* ------------------------------------------------------------------------------------------ */
    
    
} )

   

/* ------------------------------------------------------------ */
/* Execute 
/* ------------------------------------------------------------ */