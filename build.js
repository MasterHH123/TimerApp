// build.js
const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/static/bundle.js'],
    bundle: true,
    outfile: 'src/static/bundle.bundled.js',
    platform: 'browser',
    format: 'esm'
}).catch(() => process.exit(1));
