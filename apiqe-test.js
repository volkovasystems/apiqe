
const assert = require( "assert" );
const apiqe = require( "./apiqe.js" );

assert.deepEqual( apiqe( [ 1, 2 ,3 ], [ 4, 5, 6, 1, 2, 3 ] ), [ 1, 2, 3, 4, 5, 6 ], "should be equal to [ 1, 2, 3, 4, 5, 6 ]" );

console.log( "ok" );
