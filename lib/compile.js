var marked = require('marked');
var path = require('path');
var fs = require('fs');
var Mustache = require('mustache');

module.exports = function (argv, md) {
    var tokens = marked.lexer(md);

    // Set title.
    var title = "Mardown";
    if (argv.title) {
        title = argv.title;
    } else if (argv._[0] != null) {
        title = path.basename(argv._[0], path.extname(argv._[0]));
        for (var i = 0; i < tokens.length; i += 1) {
            if (tokens[i].type === 'heading') {
                title = tokens[i].text;
                break;
            }
        }
    }


    content = marked.parser(tokens);

    // Load style.
    var style = fs.readFileSync(argv.style);

    // Load script
    var script = argv.script ? fs.readFileSync(argv.script) : '';

    // Output
    var out = process.stdout;
    if (argv['output-file']) {
        out = fs.createWriteStream(path.resolve(argv['output-file']));
    }
    console.log(argv.template);
    var template = "";
    if (argv.template != null) {
        template = fs.readFileSync(argv.template, "utf8");
    }

    // Compile template and pipe it out.
    var output = Mustache.render(template, {
        content: content,
        style: style,
        title: title,
        script: script
    });

    out.write(output);
};