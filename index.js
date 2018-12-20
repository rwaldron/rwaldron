#! /usr/bin/env node

const boxen = require("boxen");
const {stripIndent} = require("common-tags");
const csi = "\x1b";
const {grey, magenta, bold} = [
  ["bold", 1, 22],
  ["magenta", 35, 39],
  ["grey", 90, 39 ],
].reduce((accum, [name, prefix, suffix]) =>
  // nod to @darrenjennings
  (accum[name] = input => `${csi}[${prefix}m${input}${csi}[${suffix}m`, accum), {}
);
console.log(
  boxen(
  stripIndent`
    ${bold(magenta("Rick Waldron"))}
    ${bold(grey("Director of Engineering @ Bocoup"))}
    ${bold(grey("rick@bocoup.com"))}

    ${grey("https://github.com/rwaldron")}
    ${grey("https://twitter.com/rwaldron")}
  `,
  {
    borderColor: "magenta",
    borderStyle: "round",
    dimBorder: true,
    margin: 1,
    padding: 1
  })
);
