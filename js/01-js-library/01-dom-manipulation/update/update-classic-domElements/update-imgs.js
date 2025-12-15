// console.log("🟨 update-imgs.js")



/* ----------------------------------------------------------------- */
/* 🟥 Update | Img, Path, CSS Class
/* ----------------------------------------------------------------- */

  async function update_imgElement_by_path_class( imgElement, path, cssClass ) {

    imgElement.src = path;
    imgElement.style.height = cssClass;

    return new Promise(resolve => {
            resolve();
          })

  }
