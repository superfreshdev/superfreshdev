// console.log("🟨 get-new-label.js")


/* ----------------------------------------------------------------- */
/* Get New | Label
/* ----------------------------------------------------------------- */

  async function get_new_label( forText, cssClass ) {

    // console.log("➡️ get_new_label")

    const new_label = document.createElement("label");

    new_label.setAttribute("for", forText);
    new_label.setAttribute("class", cssClass);



    return new Promise(resolve => {
        resolve(new_label);
      })

  }
