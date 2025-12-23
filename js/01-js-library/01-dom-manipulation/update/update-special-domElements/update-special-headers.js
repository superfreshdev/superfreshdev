// console.log("🟨 update-special-headers.js")


/* ------------------------------------------------------ */
/* 🟥 Update | Content Header
/* ------------------------------------------------------ */

 async function update_content_header( header, imgPath, imgClass, title, subTitle ) {

    // update img
    header.querySelector("img:nth-of-type(1)").setAttribute( "src", imgPath );
    header.querySelector("img:nth-of-type(1)").setAttribute( "class", imgClass );

    // update titles
    header.querySelector("div:nth-of-type(1) .header-content-title").innerText = title;
    header.querySelector("div:nth-of-type(1) .header-content-sub-title").innerText = subTitle;

    return new Promise(resolve => {
          resolve();
        })


  }
