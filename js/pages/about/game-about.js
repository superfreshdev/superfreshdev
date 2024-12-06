console.log('### game about ')

/* 


    1. Game View Container ( left end )
    2. Collision Mauer = Crash 
    3. Collison Zombier = Zombie gefressen 
    4. Jumping Smooth 
    5. Throw and Detroy 
    6. Get Stars 


*/

/* ------------------------ */
/* Checkbox 
/* ------------------------ */

var chkAnimatePlayer = document.getElementById('chk-animate-player');


/* ------------------------ */
/* Player 
/* ------------------------ */

var divPlayerBox = document.getElementById("player-box");

var imgStarThrow = document.getElementById("img-ninja-star");

var countThrowStars = document.getElementById("js-throw-star");
var nmbOfStars = countThrowStars.innerHTML;

var imgLegLeftPlayer = document.getElementById("img-player-left-leg");
var imgLegRightPlayer = document.getElementById("img-player-right-leg");


/* ------------------------ */
/* Evil
/* ------------------------ */


/* ------------------------ */
/* Hindernisse
/* ------------------------ */



/* ------------------------ */
/* Game View Container 
/* ------------------------ */

var divGameViewContainer = document.getElementById('playing-view-about-container');


getXYsizeOfContainer( divGameViewContainer )

/* ------------------------------------------------------------- */
/* Resize Event for new calculate px sizes in x,y 
/* ------------------------------------------------------------- */

window.addEventListener( "resize" , ()=> {

    console.log("### resize  ### Game View Container ")

    getXYsizeOfContainer( divGameViewContainer )

    
})


// function get x, y
function getXYsizeOfContainer( divContainer ) {
 
    console.log("### fct ### getXYsizeOfContainer ")

    console.log("X(px) = " + divContainer.offsetWidth )
    console.log("Y(px) = " + divContainer.offsetHeight  )

    var arrXY = [];

    arrXY.push(divContainer.offsetWidth);
    arrXY.push(divContainer.offsetHeight);

    return arrXY;

}




/* ------------------------ */
/* Game Control
/* ------------------------ */

var btnGameJump = document.getElementById('btn-game-jump');
var btnGameThrow = document.getElementById('btn-game-throw');


btnGameJump.addEventListener( "click" , ()=> {

    console.log(" Jump Player")

    divPlayerBox.classList.add('animate')

        
    setTimeout(() => {

        divPlayerBox.classList.remove('animate')

      }, 300)


})
       
   




btnGameThrow.addEventListener( "click" , ()=> {

    console.log(" Player is throwing ")

    imgStarThrow.classList.add('compy360Throw')

    nmbOfStars--;
    countThrowStars.innerText = nmbOfStars;

    console.log("Star = " + nmbOfStars )

    if( nmbOfStars == 0 ) {
        nmbOfStars = 17;
    }


    setTimeout(() => {

        imgStarThrow.classList.remove('compy360Throw')

      }, 500)




} )









/* ------------------------------------------------------------ */
/* Change State Checkbox Handler
/* ------------------------------------------------------------ */

chkAnimatePlayer.addEventListener( 'change' , ()=> {

    if( chkAnimatePlayer.checked == true ) {

        console.log(" Animation active ")

        imgLegLeftPlayer.style.animation = "legAnimLeft .4s infinite"; 
        imgLegRightPlayer.style.animation = "legAnimRight .4s infinite";

        // divPlayerBox.style.animation = "runAnim 2s infinite";

    } else {

        console.log(" Animation off ")

        imgLegLeftPlayer.style.animation = "none"; 
        imgLegRightPlayer.style.animation = "none";

        // divPlayerBox.style.animation = "none";
    }

} )




function animateRunningLegs( imgLeftLeg, imgRightLeg ) {


}
