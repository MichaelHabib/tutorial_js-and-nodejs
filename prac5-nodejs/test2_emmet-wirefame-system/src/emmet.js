// const fs = require('fs');
const fs = require('fs-extra')
const http = require('http');
const https = require('https');
const url = require('url');
const util = require('util')
const os = require('os');
const path = require('path');

const expand = require('emmet').default;
const {d, dd} = require("./debugger");

class emmet_code_generator {
    constructor() {
        this.emmet_string = '';
    }

    // get emmet_string() {
    //     return this.emmet_string;
    // }

    // set emmet_string(string) {
    //     this.emmet_string;
    // }

    string() {
        return this.emmet_string;
    }

    s() {
        return this.string();
    }

    append(string) {
        this.emmet_string = this.emmet_string.concat(string);
        return this;
    }

    a(string) {
        return this.append(string)
    }

    parse() {
        return expand(this.emmet_string);
    }

    p() {
        return this.parse();
    }

    wrtieHTMl(filepath) {
        fs.outputFile(filepath, this.parse(), (error) => {

            if (error) throw error;
        });
    }
}

let s1 = "Vivamus nisl lorem, porta ac luctus eget, maximus vel sapien. Vestibulum semper suscipit nulla vitae ultricies.";

let s2 = "Phasellus nec lectus vel libero lobortis sollicitudin sed ac tortor. Vestibulum vitae sapien interdum, condimentum justo a, laoreet felis. Quisque est nulla, rutrum a maximus in, porttitor et arcu. Sed placerat venenatis lacus vel euismod. Quisque ultrices sagittis ex, bibendum tristique ipsum porta non. ";

let s3 = "Nullam cursus venenatis orci eu scelerisque. Sed suscipit cursus risus, et sodales mauris ultricies non. Aenean tempus varius laoreet. Pellentesque accumsan magna dolor, nec vulputate nisi sodales nec. Duis a lectus porttitor, aliquam dui sed, molestie lorem. Maecenas sit amet feugiat mi. In sit amet sem ac felis pretium sollicitudin. Curabitur maximus risus feugiat felis lobortis, id lacinia odio posuere. Aliquam efficitur tempus imperdiet. Nullam a efficitur leo. Morbi tristique magna a ipsum varius, et laoreet elit accumsan. Fusce diam ante, porta in convallis et, lacinia sed purus. Vestibulum consequat eros quis est hendrerit, sit amet scelerisque arcu volutpat.";

let primary_nav_ul = 'ul.navbar-nav>' +
    '(li.nav-item.active>a.nav-link[href="home.html"]>{Home})+' +
    // '(li.nav-item>a.nav-link[href="about.html"]>{About})+' +
    '(li.nav-item>a.nav-link[href="accommodation.html"]>{Accommodation})+' +
    '(li.nav-item>a.nav-link[href="functions-and-events.html"]>{Functions & Events})+' +
    '(li.nav-item>a.nav-link[href="rooms.html"]>{Rooms})' +
    '(li.nav-item>a.nav-link[href="contact.html"]>{Contact})' +
    '';
let header = 'header>' +
    'link:css[href="./css/custom.css"]+' +
    'link:css[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]+' +
    // 'link:css+'+
    'nav.navbar.navbar-expand-md.fixed-top.bg-dark>' +
    '.container>.row>' +
    '(' +
    '(.col-sm-12.col-md-3>(a.navbar-brand>{LOGO})+(button.navbar-toggler>span.navbar-toggler-icon))+' +
    `(.col-sm-12.col-md-9>#navbarCollapse.collapse.navbar-collapse.justify-content-end>(${primary_nav_ul}))` +
    ')' +
    '';

let footer = `footer>` +
    '(.container-fluid.bg-dark>.container>' +
    '(.row>(.col-sm-12.col-md-4.text-center>.h200px)*3)' +
    '(.row>(.col-sm-12.col-md-6>span{})*2)' +
    ')' + //end container
    ``;

let rooms_summary_grid = `` +

    ``;
let pages = [];
pages.push({
    filename: "public/home.html",
    emmet: '!.bootstrap-wirefame>' +
        `(${header})+` +
        '(main>' +
        '(.container-fluid.px-0>' +
        `(.image-placeholder.bg-grey2.w100.h300px)` +
        ')' + //end container
        '(.container-fluid>.container>' +
        '(.row>.col-sm-12.text-center>h2{About Us})+' +
        `(.row>(.col-sm-12.text-center>p>{${s3}}))` +
        ')' + //end container
        '(.container-fluid>.container>' +
        '(.row>.col-sm-12.text-center>h2{Accommodations})+' +
        '(.row>(.col-sm-12.col-md-12.col-lg-4.text-center>.card>((.image-placeholder.h200px)+(.card-header>h3{Accomm... Type $})))*3)' +
        ')+' + //end container
        '(.container-fluid>.container>' +
        '(.row>.col-sm-12.text-center>h2{Functions & Events})+' +
        '(.row>(.col-sm-12.col-md-12.col-lg-4.text-center>.card>((.image-placeholder.h200px)+(.card-header>h3{Function Type $})))*3)' +
        '(.row>(.col-sm-12.col-md-12.col-lg-4.text-center>.card>((.image-placeholder.h200px)+(.card-header>h3{Event Type $})))*3)' +
        ')' + //end container
        '(.container-fluid>.container>' +
        '(.row>.col-sm-12.text-center>h2{Our Clients})+' +
        '(.row>(.col-sm-4.col-md-2.px-1.text-center>.image-placeholder.w100.h100px)*6)' +
        ')' + //end container
        '(.container-fluid>.container>' +
        '(.row>.col-sm-12.text-center>h2{Testimonials})+' +
        '(.row>(.col-sm-12.col-md-6.text-center.p-2>' +
        `(.row>(.col-sm-3.p-2>.image-placeholder.w100.h100px)+(.col-sm-9>blockquote.blockquote>(p{${s1}})+(footer.blockquote-footer>{Michael H})))` +
        ')*2)' + //end .row.col
        ')' + //end container
        ')+' + //end main
        `(${footer})` +
        ''
});

pages.push({
    filename: 'public/accommodation.html',
    emmet: '!.bootstrap-wirefame>' +
        `(${header})+` +
        '(main>' +
        '(.container-fluid>.container>' +
        '(.row>.col-sm-12.text-center>h2{Accommodations})+' +
        '(.row.accommodation.type-$>(' + //start section repeater
        '(.col-sm-12.text-center>h4{Accommodation Type $})+' +
        '(.col-sm-12.col-md-12.col-lg-3.text-center>.image-placeholder.bg-grey1.h200px)+' +
        `(.col-sm-12.col-md-12.col-lg-6.text-center>p.p-4{${s2}})+` +
        '(.col-sm-12.col-md-12.col-lg-3.text-center.py-4>(button.btn.btn-dark.btn-lg.book-now>span{Book Now}+br+span.badge.badge-light>(span.price{&#36;1$0}+span.occurrence{ / Night}))+(.py-2)+(button.btn.btn-light{More Details})+())' +
        '(.col-sm-12.text-center>(.row>.col-2.px-1*6>.image-placeholder.h100px))+' +
        '))*3' + //end repeater~
        ')+' + //end container
        ".test[v='asd' s='asd']" +
        ')+' + //end main
        `(${footer})` +
        ''

});
pages.push({
    filename: 'public/functions-and-events.html',
    emmet: '!.bootstrap-wirefame>' +
        `(${header})+` +
        '(main>' +
        '(.container-fluid>.container>' +
        '(.row>.col-sm-12.text-center>h2{Functions & Events})+' +
        '(.row>(.col-md-4.function.type-$>.row>(' + //start section repeater
        '(.col-sm-12.text-center>h4{F or E Type $})+' +
        '(.col-sm-12.col-md-12.col-lg-12.p-1.text-center>.image-placeholder.bg-grey1.h200px)+' +
        '))*6)' + //end repeater~
        ')+' + //end container
        ".test[v='asd' s='asd']" +
        ')+' + //end main
        `(${footer})` +
        ''

});

// pages.push({
//     filename: '',
//     emmet: ""
//
// });

pages.forEach(page => {
    if (typeof page != 'object') {
        console.log(`page must be an object, ${typeof page} was provided.`);
        return;
    }
    if (!page.hasOwnProperty('filename')) {
        console.log(`page object must have the property 'filename'`);
        return;
    }
    if (!page.hasOwnProperty('emmet')) {
        console.log(`page object must have the property 'emmet'`);
        return;
    }


    let generator = new emmet_code_generator();
    generator.a(page.emmet);
    generator.wrtieHTMl(page.filename);

});


// Attempt at hierarchical emmet string ..
// let page_segments =
//     {
//         header: {
//             links: [
//                 'string>',
//                 {group: 'not>reallt>'}
//             ],
//             nav: []
//
//         }
//     };

// function emmet_generator(obj) {
//     for (let p in obj) {
//         let pt = typeof obj[p];
//         let pv = obj[p];
//         d(`-- p = ${p} & pt = ${pt}`);
//         switch (pt) {
//             case 'object':
//                 emmet_generator(pv);
//                 break;
//             case 'string':
//
//                 break;
//         }
//
//     }
// }
// emmet_generator(page_segments);
