
/* IMPORT */

import {describe} from 'fava';

/* MAIN */

describe ( 'Domino Global', it => {

  it ( 'works', async t => {

    t.true ( typeof globalThis.window === 'undefined' );
    t.true ( typeof globalThis.document === 'undefined' );
    t.true ( typeof globalThis.location === 'undefined' );

    await import ( '../dist/index.js' );

    t.true ( typeof globalThis.window === 'object' );
    t.true ( typeof globalThis.document === 'object' );
    t.true ( typeof globalThis.location === 'object' );

  });

});
