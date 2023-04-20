# Multi hash

Hash strings trough multiple hashing algorithms and string manipulation functions

While storing passwords and information in a database with a sha256 hash is a good idea, it might still be vulnerable to cracking. By hashing the hash with multiple algorithms and string manipulation functions, the hash becomes more secure. This is especially useful when storing passwords in a database.

## Usage

```javascript
const multi_hash = require("../src/index.js");

const string = "Hello World!";

hash = multi_hash.hash(string, ["sha256", "md5", "hex", "base64", "sha256"]);

console.log(hash);
```

## Functions

### Hash functions

- `md5`
- `sha1`
- `sha256`
- `sha512`

### String manipulation functions

- `base64`
- `base32`
- `hex`
- `binary`
- `reverse`