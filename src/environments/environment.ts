// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    firebase: {
    apiKey: 'AIzaSyBWSpXjl3wORS4FXKeyuG-bxI7dN0JWFNc',
    authDomain: 'gallery-3b77e.firebaseapp.com',
    databaseURL: 'https://gallery-3b77e.firebaseio.com',
    projectId: 'gallery-3b77e',
    storageBucket: 'gallery-3b77e.appspot.com',
    messagingSenderId: '711290432342'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
