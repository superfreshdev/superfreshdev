// console.log("🟨 timeout.js")


/* ----------------------------------------------------------- */
/* Async Timeout Simulation 5 Sec
/* ----------------------------------------------------------- */

async function myTimeout() {

  console.log("🟩Timeout Beginnt | 3 Sec");

  return new Promise(resolve => {

    setTimeout(() => {
      console.log("🟥Timeout Ende");
      resolve();
    }, 3000);

  })

}
