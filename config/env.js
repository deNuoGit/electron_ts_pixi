const path = require('path');

const root = path.resolve('.\\');
const { dependencies } = require(`${root}\\package.json`);
const tsconfig = `${root}\\tsconfig.json`;
const srcDir = `${root}\\src\\ts`;
const mainPath = `${srcDir}\\main\\main.ts`;
const rendererPath = `${srcDir}\\renderer\\pixijs\\index.ts`;
const mapchipPath = `${srcDir}\\renderer\\pixijs\\mapchip.ts`;
const distPath = `${root}\\dist`;
const template = `${root}\\public\\index.html`
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