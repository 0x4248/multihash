/*
 * Multi hash
 * Hash strings trough multiple hashing algorithms and string manipulation functions
 * Github: https://github.com/0x4248/multihash
 * Licence: GNU General Public License v3.0
 * Author: Lewis Evans
 */

const crypto = require("crypto");
const base32 = require("base32");
const sha3_512 = require('js-sha3').sha3_512;
const sha3_384 = require('js-sha3').sha3_384;
const sha3_256 = require('js-sha3').sha3_256;
const sha3_224 = require('js-sha3').sha3_224;
const blake2b = require('blake2b');
const crc32 = require('crc32');
const murmurhash = require('murmurhash');
const xxhash = require('xxhash');
const createKeccakHash = require('keccak')
const bcrypt = require("bcrypt");
const colour = require('ansi-colors');

const help_message = `
Valid algorithms:
md5
sha1
sha256
sha512
sha3_224
sha3_256
sha3_384
sha3_512
bcrypt
bcrypt_strong
bcrypt_strongest
blake2b
crc32
murmurhashv2
murmurhashv3
xxhash
keccak

Valid string manipulation functions:
base64
base32
hex
binary
reverse
`;

function to_md5(string) {
    let md5 = crypto.createHash("md5");
    md5.update(string);
    return md5.digest("hex");
}

function to_sha1(string) {
    let sha1 = crypto.createHash("sha1");
    sha1.update(string);
    return sha1.digest("hex");
}

function to_sha256(string) {
    let sha256 = crypto.createHash("sha256");
    sha256.update(string);
    return sha256.digest("hex");
}

function to_sha384(string) {
    let sha384 = crypto.createHash("sha384");
    sha384.update(string);
    return sha384.digest("hex");
}

function to_sha512(string) {
    let sha512 = crypto.createHash("sha512");
    sha512.update(string);
    return sha512.digest("hex");
}

function to_sha3_224(string) {
    return sha3_224(string);
}

function to_sha3_256(string) {
    return sha3_256(string);
}

function to_sha3_384(string) {
    return sha3_384(string);
}

function to_sha3_512(string) {
    return sha3_512(string);
}

function to_bcrypt(string) {
    return bcrypt.hashSync(string, 10);
}

function to_bcrypt_strong(string) {
    return bcrypt.hashSync(string, 12);
}

function to_bcrypt_strongest(string) {
    return bcrypt.hashSync(string, 16);
}

function to_blake2b(string) {
    string = Buffer.from(string);
    return blake2b(64).update(string).digest('hex');
}

function to_crc32(string) {
    return crc32(string);
}

function to_murmurhash_v2(string) {
    return murmurhash.v2(string);
}

function to_murmurhash_v3(string) {
    return murmurhash.v3(string);
}

function to_xxhash(string) {
    return xxhash.hash64(string, 0xCAFEBABE);
}

function to_keccak(string) {
    return createKeccakHash('keccak256').update(string).digest('hex');
}

function to_base64(string) {
    return Buffer.from(string).toString("base64");
}

function to_hex(string) {
    return Buffer.from(string).toString("hex");
}

function to_binary(string) {
    let binary = "";
    for (let i = 0; i < string.length; i++) {
        binary += string[i].charCodeAt(0).toString(2);
    }
    return binary;
}

function to_base32(string) {
    return base32.encode(string);
}

function reverse_string(string) {
    return string.split("").reverse().join("");
}

function hash(string, algorithms = ["sha256", "sha256", "base64"]) {
    let hashed = "";
    algorithms.forEach(algorithm => {
        switch (algorithm) {
            case "md5":
                hashed = to_md5(string);
                break;
            case "sha1":
                hashed = to_sha1(string);
                break;
            case "sha256":
                hashed = to_sha256(string);
                break;
            case "sha512":
                hashed = to_sha512(string);
                break;
            case "sha3_224":
                hashed = to_sha3_224(string);
                break;
            case "sha3_256":
                hashed = to_sha3_256(string);
                break;
            case "sha3_384":
                hashed = to_sha3_384(string);
                break;
            case "sha3_512":
                hashed = to_sha3_512(string);
                break;
            case "bcrypt":
                hashed = to_bcrypt(string);
                break;
            case "bcrypt_strong":
                hashed = to_bcrypt_strong(string);
                break;
            case "bcrypt_strongest":
                hashed = to_bcrypt_strongest(string);
                break;
            case "blake2b":
                hashed = to_blake2b(string);
                break;
            case "crc32":
                hashed = to_crc32(string);
                break;
            case "murmurhashv2":
                hashed = to_murmurhash_v2(string);
                break;
            case "murmurhashv3":
                hashed = to_murmurhash_v3(string);
                break;
            case "xxhash":
                hashed = to_xxhash(string);
                break;
            case "keccak":
                hashed = to_keccak(string);
                break;
            case "base64":
                hashed = to_base64(string);
                break;
            case "base32":
                hashed = to_base32(string);
                break;
            case "hex":
                hashed = to_hex(string);
                break;
            case "binary":
                hashed = to_binary(string);
                break;
            case "reverse":
                hashed = reverse_string(string);
                break;
            default:
                console.log(colour.red("Invalid algorithm"));
                console.log(help_message)
                throw new Error("Invalid algorithm");
        }
    });
    return hashed;
}

module.exports = hash;