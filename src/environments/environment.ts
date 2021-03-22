// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apis: {
    dutti: {
      firebase: {
        apiKey: 'AIzaSyDgGKYOTpYSzqkFhXp5pQfCLq3dbZuoyc0',
        authDomain: 'dutti2021-bf22a.firebaseapp.com',
        projectId: 'dutti2021-bf22a',
        storageBucket: 'dutti2021-bf22a.appspot.com',
        messagingSenderId: '68036066952',
        appId: '1:68036066952:web:b23b9cfa04331cdab9e93d',
      },
      baseUrl: '',
      endpoints: {
        users: '/users',
      },
    },
    starWars: {
      baseUrl: 'https://swapi.dev/api',
      endpoints: {
        ships: '/starships',
      },
    },
    starwarsVisualguide: {
      baseUrl: 'https://starwars-visualguide.com',
      endpoints: {
        shipsImages: '/assets/img/starships',
      },
    },
  },
  resultsPerPage: 10,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
