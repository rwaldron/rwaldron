#! /usr/bin/env node

const boxen = require("boxen");
const {stripIndent} = require("common-tags");
const csi = "\x1b";
// nod to @darrenjennings
const format = (prefix, input, suffix) => `${csi}[${prefix}m${input}${csi}[${suffix}m`;
const {bold, cyan, green, grey, magenta, red, white, yellow} = [
  ["bold", 1, 22],
  ["cyan", 36, 39 ],
  ["green", 32, 39 ],
  ["grey", 90, 39 ],
  ["magenta", 35, 39 ],
  ["red", 31, 39 ],
  ["white", 37, 39 ],
  ["yellow", 33, 39 ],
].reduce((acc, [name, p, s]) =>
  (acc[name] = (tpl, ...subs) => tpl.reduce((acc, raw, i) => acc += `${format(p, raw, s)}${subs[i] ? subs[i] : ""}`, ""), acc), {}
);
const flags = {
  xmas: process.argv.includes("--xmas") || process.argv.includes("--christmas"),
  newyear: process.argv.includes("--newyear"),
};

if (flags.xmas) {
  // https://www.asciiart.eu/holiday-and-events/christmas/trees
  // TODO: Make a parser that will turn the plain ASCII into "formatted" ASCII
  console.log(
    boxen(
    `
${red`Merry Christmas!`}

    ${yellow`  .`}
    ${yellow`_\\|/_`}
    ${yellow` /|\\ `}
    ${green` /^\\ `}
    ${green`/^${white`*`}^\\ `}
    ${green`/${cyan`~~~`}\\`}${red`o`}
   ${green`/${red`o`}^^^^\\`}
  ${green`/${cyan`~~`}${white`*`}${cyan`~~~~`}\\`}
 ${red`o${green`/^^^^`}o${green`^^\\`}`}
 ${green`/${cyan`~~~~~~~~~`}\\${cyan`~`}`}
${green`/__${white`*`}_______${white`*`}\\`}
     | |
  `,
    {
      dimBorder: true,
      margin: 1,
      padding: 1
    })
  );
}

if (flags.newyear) {

  console.log("coming soon...");

}

if (!flags.xmas && !flags.newyear) {
  console.log(
    boxen(
    stripIndent`
      ${bold`${magenta`Rick Waldron`}`}
      ${bold`${grey`Director of Engineering @ Bocoup`}`}
      ${bold`${grey`rick@bocoup.com`}`}

      ${grey`https://bocoup.com/about/bocouper/rick-waldron`}
      ${grey`https://github.com/rwaldron`}
      ${grey`https://twitter.com/rwaldron`}
    `,
    {
      borderColor: "magenta",
      borderStyle: "round",
      dimBorder: true,
      margin: 1,
      padding: 1
    })
  );
}
