# MyCard

This is an example using multiple components and Angular Material inside a Zone-based Angular Element.

Portions based on this demo: https://github.com/andrei-antal/ng-europe-demo-angular-elements 

## Test

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` to see it working


## Build

Run `npm run build` to build the project. The production artifacts will be stored in the `dist/` directory. 

## Output

To use in another project, include the files:

    dist/MyCard/index.js
    dist/MyCard/styles.css

Then you can add `<my-card></my-card>` to your markup

The dist/MyCard directory can be packaged for npm with `npm pack` or `npm publish`