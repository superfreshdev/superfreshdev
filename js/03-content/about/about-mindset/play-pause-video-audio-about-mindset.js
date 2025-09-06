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

var audioDurationToBeFresh = 0;
var savedAudioDurationToBeFresh = 0;


/* ------------------------------------------------------------ */
/* 🟨 Functions
/* ------------------------------------------------------------ */


/* -------------------------------------------------------- */
/*  🟨 Get | Minutes By Seconds
/* -------------------------------------------------------- */

function getMinutesBySeconds( maxSeconds ) {

    return ( Math.floor( maxSeconds / 60 ) )
}



/* -------------------------------------------------------- */
/*  🟨 Get | Rest Seconds by Elimanting Full Minutes
/* -------------------------------------------------------- */

function getRestSecondsFromMinutes( maxSeconds ) {

    return ( Math.floor( maxSeconds % 60 ) )
}

/* -------------------------------------------------------------- */
/* Set Audio Countdown by sec by sec
/* -------------------------------------------------------------- */

function audioCountdownIncrement() {

    // stop increment if second is zero
    if( audioDurationToBeFresh-1 != -1 ) {

        audioDurationToBeFresh-=1;
        // console.log('[⌚ Countdown| ??? ]: ' + audioDurationToBeFresh + ' Seconds' )
    }


}

/* -------------------------------------------------------------------------- */
/* Set Zero Styling By Numbers
/* -------------------------------------------------------------------------- */

function setZeroStylingByNumbers ( number ) {

    if( number >= 0 && number <= 9 ) {

        return String('0' + number)
    }

    return number;
}




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




/* ---------------------------------------------------------------------- */
/*  timeupdate Event |
/*  Event for Audio Src to listen on running time of playing audio
/*  ( second by second )
/* ---------------------------------------------------------------------- */

audioFileMindsetReflect.addEventListener("timeupdate", () => {


    // console.log("The currentTime attribute has been updated. Again. - " + audioSrcToBeFresh.currentTime );

    // Just Increment Time (Minutes : Seconds ) by full detected second, not by milli seconds
    if( 1 == getFullSecond( audioFileMindsetReflect.currentTime ) ) {

        audioCountdownIncrement()

        // console.log('> Increment = ' + audioDurationToBeFresh )

        // Set Incremented Minutes
        txtMinReflect.innerText = setZeroStylingByNumbers( getMinutesBySeconds( audioDurationToBeFresh ) );

        // Set Incremented Seconds
        txtSecReflect.innerText = setZeroStylingByNumbers( getRestSecondsFromMinutes( audioDurationToBeFresh ) );

    }


});
