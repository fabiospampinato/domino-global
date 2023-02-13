
/* IMPORT */

import {createWindow} from 'domino';

/* MAIN */

const window = createWindow ( '' );

/* REGISTER */

Object.assign ( globalThis, {
  window,
  document: window.document,
  location: window.location
});
