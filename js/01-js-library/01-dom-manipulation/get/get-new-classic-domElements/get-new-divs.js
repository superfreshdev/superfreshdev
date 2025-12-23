// console.log("🟨 get-new-divs.js")


/* ----------------------------------------------------------------------------------- */
/* Get New | Div | Text
/* ----------------------------------------------------------------------------------- */

    async function get_new_divText( text ) {

        var newDiv = document.createElement('div');
        var newTextNode = document.createTextNode( text );

        // add text to div
        newDiv.appendChild( newTextNode );

        return new Promise(resolve => {
            resolve( newDiv);
        })

    }

/* ----------------------------------------------------------------------------------- */
/* Get New | Div | CSS Class
/* ----------------------------------------------------------------------------------- */

    async function get_new_divClass( cssClass ) {

        var newDiv = document.createElement('div');

        // add class name
        newDiv.classList.add( cssClass );


        return new Promise(resolve => {
            resolve( newDiv);
        })

    }

/* ----------------------------------------------------------------------------------- */
/* Get New | Div | CSS Class, Text
/* ----------------------------------------------------------------------------------- */

    async function get_new_divClassText( cssClass, text ) {

        var newDiv = document.createElement('div');

        if( text != undefined ) {

            var newTextNode = document.createTextNode( text );
            // add text to div
            newDiv.appendChild( newTextNode );
        }

        // add class name
        newDiv.classList.add( cssClass );

        return new Promise(resolve => {
            resolve( newDiv);
        })

    }
