/*
 * Multi hash
 * Hash strings trough multiple hashing algorithms and string manipulation functions
 * Github: https://github.com/awesomelewis2007/multihash
 * Author: Lewis Evans
*/

const hash = require("../lib/index.js");

const string = "Hello World!";

let result = hash(string, ["sha256", "md5", "hex", "base64", "sha384"]);

console.log(result);