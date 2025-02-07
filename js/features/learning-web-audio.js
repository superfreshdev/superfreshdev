console.log('🧠🟡 learning-web-audio.js')


/* ----------------------------------- */
/* Step 1 
/* ----------------------------------- */

// Create Instance of Audio Context
// Step 1, to get access to all features & functions of web audio api
// After this, it was an 'BaseAudioContext' created for us and 
// extended to an online audio context.
const audioCtx = new AudioContext();

/* ----------------------------------- */
/* Step 2 
/* ----------------------------------- */

// Step 2, Loading Sound - to load Audio we have many 
// ways to do it, we go for the simple one

// we need to grab the sound from the html audio-Element and pipe it into the context 
// we had created before, to do this we use the createMediaElementSource - Function

const track = audioCtx.createMediaElementSource( audioFileToBeFresh );

/* ----------------------------------- */
/* Step 3
/* ----------------------------------- */

// Step 3, Starting to Controlling the Sound for the User, we 
// implent things like the default audio control-property.

// we like to have, play/pause, volume, pan sound left to right

// controlling sound programmatically from js code is covered by browsers
// autoplay support policies

// Now we do 2-steps, first create the layout to handle play/pause
// programmatically and then connect our track to an audio graph from 
// the source/input node to the destination 

// So with track we created an input node by passing our audio element into the api. 
// For the most part , u dont need to create an output node. 

track.connect( audioCtx.destination ) 

// with the connection to the destination we have full access all functions auf web audio api 
// to handling our audio file 

const source = audioCtx.createBufferSource();

const gainNode = audioCtx.createGain();
gainNode.connect( audioCtx.destination )
