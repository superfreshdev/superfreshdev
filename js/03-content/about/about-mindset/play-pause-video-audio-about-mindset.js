console.log('### content -> about -> mindset ###')
console.log('🟡 play-pause-video-audio-about-mindset.js')


/* ------------------------------------------------------------ */
/* DOM Elements
/* ------------------------------------------------------------ */

var chkPlayPauseVideoMindsetReflect = document.getElementById("chk-about-mindset-video-reflect");

var txtMinReflect = document.getElementById("audio-min-reflect");
var txtSecReflect = document.getElementById("audio-sec-reflect");

var audioFileMindsetReflect = document.getElementById("audio-about-mindset-reflect");
var videoFileMindsetReflect = document.getElementById("video-about-mindset-reflect");

/* ------------------------------------------------------------ */
/* Varialbles
/* ------------------------------------------------------------ */


/* ------------------------------------------------------------ */
/* Functions
/* ------------------------------------------------------------ */





/* ------------------------------------------------------------ */
/* Events
/* ------------------------------------------------------------ */

chkPlayPauseVideoMindsetReflect.addEventListener( 'change', ()=> {


  if( chkPlayPauseVideoMindsetReflect.checked == true ) {


    console.log("🟢[checkbox] = Start Audio ")

    /* -------------------------------------- */
    /* Play Audio
    /* -------------------------------------- */
    audioFileMindsetReflect.play();

    /* -------------------------------------- */
    /* Play Video
    /* -------------------------------------- */
    videoFileMindsetReflect.play();


  } else {


    console.log("🤚[checkbox] = Pause Audio ")

    /* -------------------------------------- */
    /* Pause Audio
    /* -------------------------------------- */
    audioFileMindsetReflect.pause();

    /* -------------------------------------- */
    /* Pause Video
    /* -------------------------------------- */
    videoFileMindsetReflect.pause();


  }


})
