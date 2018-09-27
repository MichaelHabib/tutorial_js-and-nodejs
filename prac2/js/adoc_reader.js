const asciidoctor = require('asciidoctor.js')();


function MyAsciidoc() {

    var content = "http://asciidoctor.org[*Asciidoctor*] " +
            "running on https://opalrb.com[_Opal_] " +
            "brings AsciiDoc to Node.js!";
    var html = asciidoctor.convert(content);
//    return "test text";
    return html;
}