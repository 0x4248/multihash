/*
 * Multi hash
 * Hash strings trough multiple hashing algorithms and string manipulation functions
 * Github: https://github.com/0x4248/multihash
 * Author: Lewis Evans
 */

const hash = require("../lib/index.js");

const string = "Hello World!";

test("md5", () => {
    expect(hash(string, ["md5"])).toBe("ed076287532e86365e841e92bfc50d8c");
});

test("sha1", () => {
    expect(hash(string, ["sha1"])).toBe("2ef7bde608ce5404e97d5f042f95f89f1c232871");
});

test("sha256", () => {
    expect(hash(string, ["sha256"])).toBe("7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069");
});

test("sha512", () => {
    expect(hash(string, ["sha512"])).toBe("861844d6704e8573fec34d967e20bcfef3d424cf48be04e6dc08f2bd58c729743371015ead891cc3cf1c9d34b49264b510751b1ff9e537937bc46b5d6ff4ecc8");
});

test("sha3_224", () => {
    expect(hash(string, ["sha3_224"])).toBe("716596afadfa17cd1cb35133829a02b03e4eed398ce029ce78a2161d");
});

test("sha3_256", () => {
    expect(hash(string, ["sha3_256"])).toBe("d0e47486bbf4c16acac26f8b653592973c1362909f90262877089f9c8a4536af");
});

test("sha3_384", () => {
    expect(hash(string, ["sha3_384"])).toBe("f324cbd421326a2abaedf6f395d1a51e189d4a71c755f531289e519f079b224664961e385afcc37da348bd859f34fd1c");
});

test("sha3_512", () => {
    expect(hash(string, ["sha3_512"])).toBe("32400b5e89822de254e8d5d94252c52bdcb27a3562ca593e980364d9848b8041b98eabe16c1a6797484941d2376864a1b0e248b0f7af8b1555a778c336a5bf48");
});

test("base64", () => {
    expect(hash(string, ["base64"])).toBe("SGVsbG8gV29ybGQh");
});

test("base32", () => {
    expect(hash(string, ["base32"])).toBe("91jprv3f41bpywkccggg");
});

test("hex", () => {
    expect(hash(string, ["hex"])).toBe("48656c6c6f20576f726c6421");
});

test("binary", () => {
    expect(hash(string, ["binary"])).toBe("1001000110010111011001101100110111110000010101111101111111001011011001100100100001");
});

test("reverse", () => {
    expect(hash(string, ["reverse"])).toBe("!dlroW olleH");
});