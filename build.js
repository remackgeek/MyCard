const concat = require('concat');

(async function build() {
    const files = [
        './dist/MyCard/runtime.js',
        './dist/MyCard/polyfills.js',
        './dist/MyCard/scripts.js',
        './dist/MyCard/main.js',
    ]

    await concat(files, './dist/MyCard/index.js');
    
})()