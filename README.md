# Multi hash

Hash strings trough multiple hashing algorithms and string manipulation functions

While storing passwords and information in a database with a sha256 hash is a good idea, it might still be vulnerable to cracking. By hashing the hash with multiple algorithms and string manipulation functions, the hash becomes more secure. This is especially useful when storing passwords in a database.

## Usage

```javascript
const multi_hash = require("@lewisevans2007/multihash");

const string = "Hello World!";

hash = multi_hash.hash(string, ["sha256", "md5", "hex", "base64", "sha256"]);

console.log(hash);

// This will output:
// d1f05379ee11c05da9c9ae1c084804f5ce5d2d5a0158b2279a48806fcc7d2db6

```

## Functions

### Hash functions

- `md5`
- `sha1`
- `sha256`
- `sha512`
- `sha3_224`
- `sha3_256`
- `sha3_384`
- `sha3_512`
- `bcrypt`
- `bcrypt_strong`
- `bcrypt_strongest`
- `blake2b`
- `crc32`
- `murmurhashv2`
- `murmurhashv3`
- `xxhash`
- `keccak`

### String manipulation functions

- `base64`
- `base32`
- `hex`
- `binary`
- `reverse`