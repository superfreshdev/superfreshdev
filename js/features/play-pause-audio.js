console.log('🟡 play-pause-audio.js')

/* ------------------------------------------------------------------ */
/* [🚧 Future Aspect ]

    > Universal Feautre to handle play / stop Audios
    > Audio Files should be in the folder of the context 
    
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------ */
/* Variables
/* ------------------------------------------------------------ */ 

// audio src 
const srcAudioToBeFresh = new Audio('media/audio/content/about/x-bird-spirit.mp3');

// checkbox Element to Play/Stop
var chkAudioToBeFresh = document.getElementById('chk-audio-to-be-fresh') 

// video src
const videoElToBeFresh = document.getElementById('video-to-be-fresh-container'); 


/* ------------------------------------------------------------ */
/* Functions
/* ------------------------------------------------------------ */ 

/* ------------------------------------------------------------ */
/* Events  
/* ------------------------------------------------------------ */ 

chkAudioToBeFresh.addEventListener( 'change', ()=> {

    if( chkAudioToBeFresh.checked == true ) {

        console.log(" Play Wave Audio About")

        srcAudioToBeFresh.play();

        videoElToBeFresh.play();

    } else {

        console.log(" STOP Wave Audio About")

        srcAudioToBeFresh.pause();

        videoElToBeFresh.pause();
    }
    

})


/* ------------------------------------------------------------ */
/* Execute 
/* ------------------------------------------------------------ */