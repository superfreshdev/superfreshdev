console.log("🟨 about-mindset.js" )


/* ------------------------------------------------------------ */
/* DOM Elements
/* ------------------------------------------------------------ */

// audio time elements
var audio_min_reflect_video = document.getElementById("js-audio-min-mindset-reflect-video");
var audio_sec_reflect_video = document.getElementById("js-audio-sec-mindset-reflect-video");

// audio src
var audio_from_reflect_video = document.getElementById("audio-mindset-reflect-video");

// video src
var video_reflect = document.getElementById("js-video-about-mindset-reflect");

// default set video loop, because it runs so long like audio time
// video_reflect.loop = true;

/* ------------------------------------------------------------ */
/* ⚫ Varialbles
/* ------------------------------------------------------------ */

var audio_max_duration = 0;
var audio_save_duration = 0;

// to handle full seconds not miliseconds
var secBefore = 0;

/* ------------------------------------------------------------ */
/* ⛓️ Functions
/* ------------------------------------------------------------ */

/* -------------------------------------------------------------------------- */
/* Handling Full Seconds Not Mili Seconds
/* ( because our Event prints from a second many mili seconds too )
/* -------------------------------------------------------------------------- */

function getFullSecond( secValue ) {

    var formatedSec = Math.floor( secValue );

    // New Second was detected
    // At the beginning, 0 != (0.12=0, 0.82=0, 1.12=1 => yes )
    // then our secBefore is 1 and should be check if 2.12 then we
    // have the 2sec, and secBefore is 2 and so on ...
    if( secBefore != formatedSec ) {

        // set new sec
        secBefore = formatedSec;
        // console.log('⌚:' + secBefore + ' Sec')
        // txtSecAudioToBeFresh.innerText = secBefore;

        return 1;

    } else {

        return 0;
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

/* -------------------------------------------------------- */
/*  Get | Minutes By Seconds
/* -------------------------------------------------------- */

function getMinutesBySeconds( maxSeconds ) {

    return ( Math.floor( maxSeconds / 60 ) )
}



/* -------------------------------------------------------- */
/*  Get | Rest Seconds by Elimanting Full Minutes
/* -------------------------------------------------------- */

function getRestSecondsFromMinutes( maxSeconds ) {

    return ( Math.floor( maxSeconds % 60 ) )
}

/* -------------------------------------------------------------- */
/* Set Audio Countdown by sec by sec
/* -------------------------------------------------------------- */

function audioCountdownIncrement() {

    // stop increment if second is zero
    if( audio_max_duration-1 != -1 ) {

        audio_max_duration-=1;
        // console.log('[⌚ Countdown| ??? ]: ' + audioDurationToBeFresh + ' Seconds' )
    }


}


/* ------------------------------------------------------------------------------------ */
/* 🪄 Events
/* ------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------ */
/* Timeupdate

> it starts only by playing audio & then it will print many milliseconds from
     running audio - we like just detect full seconds, so thats why we
     check if second number is full second, for example time event prints:
     0.5, 0.8, 1.1 | by 1.1 we detect 1 Second, then we print this and so on

/* ------------------------------------------------------------------------------------ */

audio_from_reflect_video.addEventListener("timeupdate", () => {

    // console.log("The currentTime attribute has been updated. Again. - " + audioSrcToBeFresh.currentTime );

    // Just Increment Time (Minutes : Seconds ) by full detected second, not by milli seconds
    if( 1 == getFullSecond( audio_from_reflect_video.currentTime ) ) {

        audioCountdownIncrement()

        // console.log('> Increment = ' + audioDurationToBeFresh )

        // Set Incremented Minutes
        audio_min_reflect_video.innerText = setZeroStylingByNumbers( getMinutesBySeconds( audio_max_duration ) );

        // Set Incremented Seconds
        audio_sec_reflect_video.innerText = setZeroStylingByNumbers( getRestSecondsFromMinutes( audio_max_duration ) );

    }


    // Set Video Duration
    video_reflect.duration = ( video_reflect.duration + 500 )
    console.log("🟣🚀 Video Time = " + video_reflect.duration )

    // Video Duration Update by Audio
    if( video_reflect.duration > 0 ) {

      // scale audio position to video length
      // const scale = video_reflect.duration / audio_from_reflect_video.duration;
      // video_reflect.currentTime = (  audio_from_reflect_video.currentTime * scale ) % video_reflect.duration;

      // video_reflect.currentTime = 120;

      console.log("🟩🚀 Video Time = " + video_reflect.duration )
      console.log("🟩🚀 Video Current Time = " + video_reflect.currentTime )

    }

});

// get src data at the beginning

video_reflect.addEventListener("loadedmetadata", () => {

   console.log("🟩 Video Time = " + video_reflect.duration )
   console.log("🟩 Audio Time = " + audio_max_duration )

})





video_reflect.addEventListener("play", ()=> {

  console.log("🟩 Video startet")



  /* -------------------------------------- */
  /* Play Audio
  /* -------------------------------------- */
  audio_from_reflect_video.play();

  // set audio duration to video duration because its only 10sec
  // and we dont like to create an loop because then we dont cant handle
  // the time of the song




})


video_reflect.addEventListener("pause", ()=> {

    console.log("🟩 Video Pause/(Ended ?!)")

  /* -------------------------------------- */
  /* Pause Audio
  /* -------------------------------------- */
  audio_from_reflect_video.pause();

  /* -------------------------------------- */
  /* Pause Video
  /* -------------------------------------- */
  video_reflect.pause();

})

video_reflect.addEventListener("ended", ()=> {

  alert(" 🟥 Video Ende ")

  /* -------------------------------------- */
  /* Pause Audio
  /* -------------------------------------- */
  audio_from_reflect_video.pause();

  /* -------------------------------------- */
  /* Pause Video
  /* -------------------------------------- */
  video_reflect.pause();


  // Set Max Duration by Saved Duration again
  // because it is actually by 0 because audio is ended
  audio_max_duration = audio_save_duration;

  // Reset Max Minutes Again
  audio_min_reflect_video.innerText = setZeroStylingByNumbers( getMinutesBySeconds( audio_max_duration ) );

  // Reset Max Seconds Again
  audio_sec_reflect_video.innerText = setZeroStylingByNumbers( getRestSecondsFromMinutes( audio_max_duration ) );

})

/* ------------------------------------------------------------ */
/* Execute
/* ------------------------------------------------------------ */

audio_min_reflect_video.innerText = "06";
audio_sec_reflect_video.innerText = "88";

/* ------------------------------------------------------- */
/* Step 1
/* ------------------------------------------------------- */

// >> Get Time of Audio to set this play time to video running time

/* -------------------------------------------------------------- */
/* Promise Function |
/* SET Audio Duration by Listening Event onloadedmetadata
/* -------------------------------------------------------------- */

function getAudioDuration( src ) {

    console.log("### getAudioDuration() ")

    return new Promise( (resolve)=> {

        var audio = new Audio();

        // Event - onloadmetadata , if this event
        // could startet, then resolve and go
        // set src to audio.src
        audio.onloadedmetadata = () => {

            resolve(audio.duration);
        }

        audio.src = src;

    });
}


// Set Audio Timer by using promise function

getAudioDuration( audio_from_reflect_video.getAttribute('src') )

    .then( ( audioDuration ) => {

        // Set Max Audio Duration
        audio_max_duration = Math.floor(audioDuration);

        // Save Max Audio Duration to set again by ending Playing Audio
        audio_save_duration = audio_max_duration;

        // console.log('[⌚ Max ]: ' + audioDurationToBeFresh  + ' Seconds' )

        // Set Max Minutes
        audio_min_reflect_video.innerText = setZeroStylingByNumbers( getMinutesBySeconds( audio_max_duration ) );

        // Set Max Seconds
        audio_sec_reflect_video.innerText = setZeroStylingByNumbers( getRestSecondsFromMinutes( audio_max_duration ) );


    } )





/* ------------------------------------------------------- */
/* Step 2
/* ------------------------------------------------------- */


/* ------------------------------------------------------- */
/* Step 3
/* ------------------------------------------------------- */


/* ------------------------------------------------------- */
/* Step 4
/* ------------------------------------------------------- */

// Get Time of Audio

// Video run so long like audio & then stop
