const assertObjectsEqual = require('../assertObjectsEqual');

// Test - should print Assertion Passed
assertObjectsEqual({name:"John",lastName:"Doe"},{name:"John",lastName:"Doe"});

// Test - should print Assertion Failed
assertObjectsEqual({name:"Jane",lastName:"Doe"},{name:"John",lastName:"Doe"});
