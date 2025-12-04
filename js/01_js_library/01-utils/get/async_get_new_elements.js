// console.log("🟨 async_get_new_elements.js")


/* ----------------------------------------------------------------- */
/* 🟩 Async Get New Radio
/* ----------------------------------------------------------------- */

async function async_get_new_radio( id, name ) {

  // console.log("### async_get_new_radio")

  const new_radio = document.createElement("input");

  new_radio.setAttribute("type", "radio");
  new_radio.setAttribute("id", id);
  new_radio.setAttribute("name", name);

  return new_radio;
  // return new Promise(resolve => {
  //     resolve();

  //   })

  //  return new_radio;

}
