const os = require('os');
const path = require('path');

// winとその他でディレクトリ表記切り分け
const dirPath = os.type().toString().match('Windows') !== null ? '\\' : '/';

const root = path.resolve(`.${dirPath}`);
const { dependencies } = require(`${root}${dirPath}package.json`);
const tsconfig = `${root}${dirPath}tsconfig.json`;
const srcDir = `${root}${dirPath}src${dirPath}ts`;
const mainPath = `${srcDir}${dirPath}main${dirPath}main.ts`;
const rendererPath = `${srcDir}${dirPath}renderer${dirPath}pixijs${dirPath}index.ts`;
const mapchipPath = `${srcDir}${dirPath}renderer${dirPath}pixijs${dirPath}mapchip.ts`;
const distPath = `${root}${dirPath}dist`;
const template = `${root}${dirPath}public${dirPath}index.html`
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  root,
  dependencies,
  tsconfig,
  mainPath,
  rendererPath,
  mapchipPath,
  template,
  distPath,
  isDev
};