console.log('[🟡|content|about| ➡️ play-pause-audio-about.js]')

/* ------------------------------------------------------------------ 

    [🚧 Future Aspect ]

    > To play & stop an Audio & helpfull function like 
    > getting seconds from audio and lots of more 
    > functions should be deployed in an own js modul

    > Useful Tutorials: 
    https://www.youtube.com/watch?v=rkqqBA6ohc0&t=222s
    https://www.youtube.com/watch?v=KndQpfPkOOY&t=10s
    
/* ------------------------------------------------------------------ */


/* ------------------------------------------------------------ */
/* 🟨 (1/2) DOM Elements 
/* ------------------------------------------------------------ */ 


/* ----------------------------------- */
// Audio Element 
/* ----------------------------------- */

const elAudioToBeFresh = document.getElementById('js-audio-to-be-fresh')

var chkAudioToBeFresh = document.getElementById('chk-play-audio-to-be-fresh') 

/* ----------------------------------- */
// Info Audio Time 
/* ----------------------------------- */

const elTxtAudioTimeStampToBeFresh = document.getElementById('time-audio-box-to-be-fresh');

const txtMinAudioToBeFresh = document.getElementById('js-min-audio-to-be-fresh');
const txtSecAudioToBeFresh = document.getElementById('js-sec-audio-to-be-fresh');

/* ----------------------------------- */
// Img Element, Play/Pause
/* ----------------------------------- */

var imgPlayPauseToBeFresh = document.getElementById('img-play-pause-audio-to-be-fresh');


/* ----------------------------------- */
// Video Element, to be fresh
/* ----------------------------------- */

const videoElToBeFresh = document.getElementById('video-to-be-fresh'); 


/* ------------------------------------------------------------ */
/* 🟨 (2/2) Variables
/* ------------------------------------------------------------ */ 

// Set Audio Src 
const audioSrcToBeFresh = getAudioObject( elAudioToBeFresh.getAttribute('src') )


var audioDurationToBeFresh = 0;
var savedAudioDurationToBeFresh = 0;

// to handle full seconds not miliseconds
var secBefore = 0;


// Img Path Play/Pause
const imgPathPlayPauseToBeFresh = {

    imgPlay: 'media/img/icons/icons/mp3-play.png',
    imgPause: 'media/img/icons/icons/mp3-pause.png'
}


/* ------------------------------------------------------------ */
/* 🟨 Functions
/* ------------------------------------------------------------ */ 



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
/* Promise Function | 
/* SET Audio Duration by Listening Event onloadedmetadata 
/* -------------------------------------------------------------- */

function setAudioDuration( src ) {

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


/* ------------------------------------------------------------ */
/* 🟨 Events  
/* ------------------------------------------------------------ */ 


/* ------------------------------------------------------------ */
/* Change Event | Checkbox
/* ------------------------------------------------------------ */ 

chkAudioToBeFresh.addEventListener( 'change', ()=> {

    if( chkAudioToBeFresh.checked == true ) {

        // console.log("🟢[checkbox] = Start Audio ")

        // Set CSS Opacity 1 of Audio TimeStamp
        elTxtAudioTimeStampToBeFresh.style.opacity = 1; 

    
        /* -------------------------------------- */
        /* Change IMG to Pause 
        /* -------------------------------------- */
        setAttrSrc( imgPlayPauseToBeFresh , imgPathPlayPauseToBeFresh.imgPause ) 
                
        /* -------------------------------------- */
        /* Play Audio
        /* -------------------------------------- */
        audioSrcToBeFresh.play();

        /* -------------------------------------- */
        /* Change CSS Style of Video
        /* -------------------------------------- */
        videoElToBeFresh.style.zIndex = '10';
        videoElToBeFresh.style.animation = 'slowOpacityUp 11s 1 ease';
        
        /* -------------------------------------- */
        /* Play Video 
        /* -------------------------------------- */
        videoElToBeFresh.play();

    } else {

        // console.log("🔴[checkbox] = Pause Audio")

        /* -------------------------------------- */
        /* Change IMG to Play
        /* -------------------------------------- */
        setAttrSrc( imgPlayPauseToBeFresh , imgPathPlayPauseToBeFresh.imgPlay ) 

        /* -------------------------------------- */
        /* Pause Audio
        /* -------------------------------------- */
        audioSrcToBeFresh.pause();
   
        /* -------------------------------------- */
        /* Pause Video 
        /* -------------------------------------- */
        videoElToBeFresh.pause();
    }
    

})

/* ---------------------------------------------------------------------- */
/*  timeupdate Event |
/*  Event for Audio Src to listen on running time of playing audio 
/*  ( second by second )
/* ---------------------------------------------------------------------- */

audioSrcToBeFresh.addEventListener("timeupdate", () => {

   
    // console.log("The currentTime attribute has been updated. Again. - " + audioSrcToBeFresh.currentTime );

    // Just Increment Time (Minutes : Seconds ) by full detected second, not by milli seconds
    if( 1 == getFullSecond( audioSrcToBeFresh.currentTime ) ) {

        audioCountdownIncrement()

        // console.log('> Increment = ' + audioDurationToBeFresh )

        // Set Incremented Minutes
        txtMinAudioToBeFresh.innerText = setZeroStylingByNumbers( getMinutesBySeconds( audioDurationToBeFresh ) );

        // Set Incremented Seconds
        txtSecAudioToBeFresh.innerText = setZeroStylingByNumbers( getRestSecondsFromMinutes( audioDurationToBeFresh ) );

    }
    

});

/* ---------------------------------------------------------------------- */
/*  ended Event |
/*  Event for Audio Src to listen if the audio playing
/*  was ended to handle
/* ---------------------------------------------------------------------- */

audioSrcToBeFresh.addEventListener( 'ended', ()=> {

    // Pause Audio
    audioSrcToBeFresh.pause();

    // Change Img to Play
    setAttrSrc( imgPlayPauseToBeFresh , imgPathPlayPauseToBeFresh.imgPlay )
       

    // Unset Checkbox for Playing Audio
    chkAudioToBeFresh.checked = false;

    console.log('🚧 Audio End')

    // Stop Playing Video
    videoElToBeFresh.pause();

   

    // Set running Down Audio Duration back to Max Saved Audio Duration 
    audioDurationToBeFresh = savedAudioDurationToBeFresh;

    // Set Max Minutes
    txtMinAudioToBeFresh.innerText = setZeroStylingByNumbers( getMinutesBySeconds( audioDurationToBeFresh ) );

    // Set Max Seconds
    txtSecAudioToBeFresh.innerText = setZeroStylingByNumbers( getRestSecondsFromMinutes( audioDurationToBeFresh ) );

})




/* ------------------------------------------------------------ */
/* 🟨 Execute 
/* ------------------------------------------------------------ */

// console.log('🎵(choose)=' + elAudioToBeFresh.getAttribute('src') )

// Step 1: Set Audio Duration by Promise
setAudioDuration( elAudioToBeFresh.getAttribute('src') )

    .then( ( audioDuration ) => {

        // Set Max Audio Duration 
        audioDurationToBeFresh = Math.floor(audioDuration);

        // Save Max Audio Duration to set again by ending Playing Audio 
        savedAudioDurationToBeFresh = audioDurationToBeFresh;

        // console.log('[⌚ Max ]: ' + audioDurationToBeFresh  + ' Seconds' )

        // Set Max Minutes
        txtMinAudioToBeFresh.innerText = setZeroStylingByNumbers( getMinutesBySeconds( audioDurationToBeFresh ) );

        // Set Max Seconds
        txtSecAudioToBeFresh.innerText = setZeroStylingByNumbers( getRestSecondsFromMinutes( audioDurationToBeFresh ) );
 

    } )
