//I just realized that I didn't add the part where the reserved tables are noted as reserved.  I'm working on that now, hopefully will get that done before class.


"use strict";

$(() => {  

    $(`.tableClass`).on(`click`, () => {
        $(`#myModal`).toggleClass(`hide`);
        $(`#myModal`).toggleClass(`show`);
       
        });

        $(`.tableClass`).on(`click`, (e) => {
            let tableSelection = (e.target.firstChild.data);
            $(`.modal`).show();
            $(`.confirmingTable`).text(tableSelection);
        });


        $(`.close-button`).on(`click`, () => {
            $(`#myModal`).hide();
        });

        $(`.popModalButton`).on(`click`, () => {
            $(`#myModal`).hide()
    });
});



// $(() => {
//     $(`.tableClass`).on(`click`, () => {
//         $(`.confirmingTable`).append(console.log($(spongebob.target).attr(`id`));
//     });
// });


