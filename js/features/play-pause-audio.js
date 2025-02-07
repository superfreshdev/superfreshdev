console.log('🟡 play-pause-audio.js')

/* ------------------------------------------------------------------ 

    [🚧 Future Aspect ]

    > Universal Feautre to handle play / stop Audios
    > Audio Files should be in the folder of the context 

    https://www.youtube.com/watch?v=rkqqBA6ohc0&t=222s
    https://www.youtube.com/watch?v=KndQpfPkOOY&t=10s
    
    Reminder: 
    1. U can work with just the audio-Object, be new Audio()
    2. Or u can work with the Audio Web API by creating Audio Context 
        - The Web Audio API brings more sexy handlings but it 
          depends on ur use case if u really need them, for example 
          if u like to have louder volume, better audio speed ,... 
          then u should use web audio api 

    > Actually I Just work with Audio - Object because i dont 
    have good knowledge in working fast with the web audio api
    So thats why i use here events to handle different states of 
    an audio

/* ------------------------------------------------------------------ */




/* ------------------------------------------------------------ */
/* 🟨 Variables
/* ------------------------------------------------------------ */ 

var audioDurationToBeFresh = 0;

// to handle full seconds not miliseconds
var secBefore = 0;
var secCount = false;

const objImgSrcsPlayPauseToBeFresh = {

    playButton: 'media/img/icons/icons/mp3-play.png',
    pauseButton: 'media/img/icons/icons/mp3-pause.png'
}

var songs = [

    'media/audio/content/about/x-bird-spirit.mp3',
    'media/audio/content/about/20-seconds.mp3',
    'media/audio/content/about/full-house.mp3'
]



// audio src 
const srcAudioToBeFresh = new Audio( songs[0] );

const audioFileToBeFresh = document.getElementById('js-src-audio-to-be-fresh');

const txtMinAudioToBeFresh = document.getElementById('js-min-audio-to-be-fresh');
const txtSecAudioToBeFresh = document.getElementById('js-sec-audio-to-be-fresh');

// checkbox Element to Play/Stop
var chkAudioToBeFresh = document.getElementById('chk-audio-to-be-fresh') 

// img Element to Play/Stop
var imgSrcPlayStopToBeFresh = document.getElementById('img-play-stop-audio-to-be-fresh');

// video src
const videoElToBeFresh = document.getElementById('video-to-be-fresh-container'); 






/* ------------------------------------------------------------ */
/* 🟨 Functions
/* ------------------------------------------------------------ */ 


// ➕ Help Function - Set Src to HtmlElement
function setSourceAttr( element , strSrc ) {

    // ⚠️ no safty for wrong given parameters
    element.setAttribute('src',strSrc);
}

// ➕ Help Function - Format Seconds to Minutes and Seconds 
function formatSecondsToMin( maxSeconds ) {

    return ( Math.floor( maxSeconds / 60 ) )

}

function formatRestSecondsOfMin ( maxSeconds ) {

    return ( Math.floor( maxSeconds % 60 ) )
}




// Promise -  Set Audio Duration by listening Event onloadedmetadata 
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


// set audio countdown 
function audioCountdownIncrement() {

    if( audioDurationToBeFresh-1 != -1 ) {

        audioDurationToBeFresh-=1;
        console.log('[⌚ Countdown| 432 ]: ' + audioDurationToBeFresh + ' Seconds' )
    }
    

}

// handle full seconds not mili seconds 
function getFullSecond( secValue ) {

    var formatedSec = Math.floor( secValue ); 

    // New Second was detected 
    if( secBefore != formatedSec ) {

        secBefore = formatedSec;
        console.log('⌚-' + secBefore + ' Sec')
        txtSecAudioToBeFresh.innerText = secBefore;

        return 1;

    } else {

        return 0;
    }

}



function setFormatZeroBySingle( number ) {

    if( number >= 0 && number <= 9 ) {

        return String('0' + number)
    }

    return number;
}


// console.log( '↗️ ' + setFormatZeroBySingle( 8 ) ) 




/* ------------------------------------------------------------ */
/* 🟨 Events  
/* ------------------------------------------------------------ */ 


/* ------------------------------------------------------------ */
/* Checkbox - Change
/* ------------------------------------------------------------ */ 

chkAudioToBeFresh.addEventListener( 'change', ()=> {

    if( chkAudioToBeFresh.checked == true ) {

        console.log("🟢 Start Audio | " )

    
        /* -------------------------------------- */
        /* Change IMG to Pause 
        /* -------------------------------------- */
        setSourceAttr( imgSrcPlayStopToBeFresh , objImgSrcsPlayPauseToBeFresh.pauseButton )   

        audioFileToBeFresh.play();



        videoElToBeFresh.style.zIndex = '10';
        videoElToBeFresh.style.animation = 'slowOpacityUp 11s 1 ease';
        

        // srcAudioToBeFresh.play();

        videoElToBeFresh.play();

    } else {

        console.log("🔴 Stop Audio")

        /* -------------------------------------- */
        /* Change IMG to Play
        /* -------------------------------------- */
        setSourceAttr( imgSrcPlayStopToBeFresh , objImgSrcsPlayPauseToBeFresh.playButton )


        /* -------------------------------------- */
        /* Handling Audio 
        /* -------------------------------------- */


        audioFileToBeFresh.pause();

    
        // srcAudioToBeFresh.pause();

        videoElToBeFresh.pause();
    }
    

})

/* ---------------------------------------------------------------------- */
/*  Get Seconds by Playing Audio
/* ---------------------------------------------------------------------- */

audioFileToBeFresh.addEventListener("timeupdate", () => {

    console.log("The currentTime attribute has been updated. Again. - " + audioFileToBeFresh.currentTime );

    if( 1 == getFullSecond( audioFileToBeFresh.currentTime ) ) {

        audioCountdownIncrement()

        // Set actually min countdown
        txtMinAudioToBeFresh.innerText = setFormatZeroBySingle( formatSecondsToMin( audioDurationToBeFresh ) );

        // Set actually  seconds countdown
        txtSecAudioToBeFresh.innerText = setFormatZeroBySingle( formatRestSecondsOfMin( audioDurationToBeFresh ) );

    }
    
   
    
   
    
    

    
    
  });


/* ------------------------------------------------------------ */
/* Audio Playing End 
/* ------------------------------------------------------------ */ 

audioFileToBeFresh.addEventListener( 'ended', ()=> {


    // Pause Audio
    audioFileToBeFresh.pause();

    // Change Img to Play
    setSourceAttr( imgSrcPlayStopToBeFresh , objImgSrcsPlayPauseToBeFresh.playButton )

    // Unset Checkbox for Playing Audio
    chkAudioToBeFresh.checked = false;

    console.log('🚧 Audio End')

    // alert('🚧 Audio End');

    videoElToBeFresh.pause();

    setAudioDuration( songs[2] )

    .then( (maxAudioSec) => {

        audioDurationToBeFresh = Math.floor(maxAudioSec);

        console.log('[⌚ Max ]: ' + audioDurationToBeFresh  + ' Seconds' )

    } )

})




/* ------------------------------------------------------------ */
/* 🟨 Execute 
/* ------------------------------------------------------------ */

console.log('📙' + songs[0])

setSourceAttr( audioFileToBeFresh, songs[2] )

// Step 1: Set Audio Duration 
setAudioDuration( songs[2] )

    .then( (maxAudioSec) => {

        audioDurationToBeFresh = Math.floor(maxAudioSec);

        console.log('[⌚ Max ]: ' + audioDurationToBeFresh  + ' Seconds' )

    } )





 


