console.log('### game about ')



var chkAnimatePlayer = document.getElementById('chk-animate-player');

var divPlayerBox = document.getElementById("player-box");

var imgLegLeftPlayer = document.getElementById("img-player-left-leg");
var imgLegRightPlayer = document.getElementById("img-player-right-leg");


chkAnimatePlayer.addEventListener( 'change' , ()=> {

    if( chkAnimatePlayer.checked == true ) {

        console.log(" Animation active ")

        imgLegLeftPlayer.style.animation = "legAnimLeft .4s infinite"; 
        imgLegRightPlayer.style.animation = "legAnimRight .4s infinite";
        divPlayerBox.style.animation = "runAnim 2s infinite";

    } else {

        console.log(" Animation off ")

        imgLegLeftPlayer.style.animation = "none"; 
        imgLegRightPlayer.style.animation = "none";

        divPlayerBox.style.animation = "none";
    }

} )




function animateRunningLegs( imgLeftLeg, imgRightLeg ) {


}
