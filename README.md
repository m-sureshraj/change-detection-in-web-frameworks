Implementation details of change detection in web frameworks
--------------
This repository demonstrates implementation details of change detection in web frameworks. For background, check out [What every front-end developer should know about change detection in Angular and React](https://medium.com/p/508f83f58c6a/edit). The repository also includes `playground` project where you can experiment with various change detection libraries.


Vanilla JS
--------------
The example is implemented in the `js` folder. It includes basic implementation of change detection using the `setter` JS functionality

#### Run the example

    $ npm run js


Angular
--------------

Demo includes an Angular component compiled with the new Ivy compiler. The `template` property of the `ngComponentDef` contains the code executed during each change detection cycle.

#### Run the example

    $ npm run angular

React
--------------

Demo includes a React component and the implementation of change detection in `react.js` using v-dom library.

#### Run the example

    $ npm run react
