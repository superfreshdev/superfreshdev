// console.log("🟨 update_dom_elements.js")


/* ----------------------------------------------------------------- */
/* Update | Text | Dom Element
/* ----------------------------------------------------------------- */

  async function update_text_from_domElement( newText, domElement ) {

    domElement.innerText = newText;

    return new Promise(resolve => {
            resolve();
          })

  }
