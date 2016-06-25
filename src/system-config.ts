// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular': '../node_modules/@angular',
  'rxjs': '../node_modules/rxjs',
  'main': 'main.js'
};

/** User packages configuration. */
const packages: any = {
};

// Angular specific barrels.
var ngBarrels = [
  'core',
  'common',
  'compiler',
  'platform-browser',
  'platform-browser-dynamic',
  'router'
];

// Add package entries for angular packages
ngBarrels.forEach(function(pkgName) {
  // Bundled (~40 requests):
  packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  // Individual files (~300 requests):
  //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
});

////////////////////////////////////////////////////////////////////////////////////////////////
const barrels: string[] = [
  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app'
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  packages[barrelName] = { main: 'index', defaultExtension: 'js' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the user's configuration.
System.config({ map, packages });
