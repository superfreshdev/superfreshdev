// console.log("🟨 unset-checkedElements.js")


/* ----------------------------------------------------------------- */
/* Unset | Checked Element/s
/* ----------------------------------------------------------------- */

  // single
  async function unset_checkedElement( checkedElement ) {

    checkedElement.checked = false;

    return new Promise(resolve => {
          resolve();
        })

  }

  // all
  async function unset_all_checkedElements( checkedElements ) {

    for( let i=0; i < checkedElements.length; i++ ) {

        checkedElements[i].checked = false;

    }

    return new Promise(resolve => {
          resolve();
        })

  }
