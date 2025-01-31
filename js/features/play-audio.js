console.log('🟡 play-audio.js')

/* ------------------------------------------------------------ */
/* Variables
/* ------------------------------------------------------------ */ 

// get audio src 
const audioSrcAboutWave = new Audio('js/features/x-bird-spirit.mp3');

var chkAudioAboutWave = document.getElementById('chk-play-audio')

// get audio src 
const videoSrcAboutWave = document.getElementById('video-bgc-waves');

/* ------------------------------------------------------------ */
/* Functions
/* ------------------------------------------------------------ */ 

chkAudioAboutWave.addEventListener( 'change', ()=> {

    if( chkAudioAboutWave.checked == true ) {

        console.log(" Play Wave Audio About")

        audioSrcAboutWave.play();

        videoSrcAboutWave.play();

    } else {

        console.log(" STOP Wave Audio About")

        audioSrcAboutWave.pause();

        videoSrcAboutWave.pause();
    }
    

})

/* ------------------------------------------------------------ */
/* Events  
/* ------------------------------------------------------------ */ 

/* ------------------------------------------------------------ */
/* Execute 
/* ------------------------------------------------------------ */