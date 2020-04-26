const rehype = require("rehype");
const parse = require("rehype-parse");
const report = require("vfile-reporter");

const source = `
<html>
  <head>
    <noscript>&lt;h1&gt;Hello, world&lt;/h1&gt;</noscript>
    <style>
      body { background-color: #ccc; }
    </style>
  </head>
  <body>
    <h1>Goodbye, Earthlings!</h1>
  </body>
</html>
`;

rehype()
  .use(parse)
  .process(source, (err, file) => {
    if (err) {
      console.log("error", err.message);
    } else {
      console.log(report(err || file));
      console.log(String(file));
    }
  });
