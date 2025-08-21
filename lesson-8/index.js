const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 8;

const MAX_CALLS = 8;
const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (err, hash) => {
    console.log("Hash:", Date.now() - start);
  });
}
