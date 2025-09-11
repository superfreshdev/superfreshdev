console.log("🟨 header-link-nav.js");


// 3 Header Link Nav
const linkHeaderAbout = document.getElementById("link-header-nav-about");
const linkHeaderMyit = document.getElementById("link-header-nav-my-it");
const linkHeaderMyprivate = document.getElementById("link-header-nav-my-private");

const headerNavLinkIds = [

  'link-header-nav-about',
  'link-header-nav-my-it',
  'link-header-nav-my-private'
]


// linkHeaderAbout.classList.replace("unset-header-nav-link","set-header-nav-link");

/* --------------------------------------------------------- */
/* Methode: Select only clicked element
/* --------------------------------------------------------- */

function styleHeaderNavLink ( idClicked, idElements ) {

  const idString = idClicked.getAttribute("id");


  for( let i=0; i < idElements.length; i++ ) {


    if( idString == idElements[i]) {

      // set link
      console.log("🟩 true = " + i)

      // check if this link was clicked, has it ? if no do it. has class ?

      idClicked.classList.replace("unset-header-nav-link","set-header-nav-link");

    } else {

      // unset all others
      console.log("🟥 false = " + i)

      // idClicked.classList.replace("set-header-nav-link","unset-header-nav-link");
    }


  }

}


/* --------------------------------------------------------- */
/* [1/3] | Click Listener | Link Header About
/* --------------------------------------------------------- */

linkHeaderAbout.addEventListener("click", ()=> {

  console.log(">> " + linkHeaderAbout.getAttribute('id')  )

  styleHeaderNavLink ( linkHeaderAbout, headerNavLinkIds )

  // Set
  // linkHeaderAbout.classList.replace("unset-header-nav-link","set-header-nav-link")

})

/* --------------------------------------------------------- */
/* [2/3] |Click Listener | Link Header My IT
/* --------------------------------------------------------- */

linkHeaderMyit.addEventListener("click", ()=> {

  console.log(">> " + linkHeaderMyit.getAttribute('id')  )

  styleHeaderNavLink ( linkHeaderMyit, headerNavLinkIds )


})


/* --------------------------------------------------------- */
/* [3/3] | Click Listener | Link Header My Private
/* --------------------------------------------------------- */

linkHeaderMyprivate.addEventListener("click", ()=> {

  console.log(">> " + linkHeaderMyprivate.getAttribute('id')  )

  styleHeaderNavLink ( linkHeaderMyprivate, headerNavLinkIds )


})
