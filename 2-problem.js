let flag = true;
const fs = require("fs");

let data = fs.readFileSync(0, "utf8").trim().split(" ");

let n = Number(data[0]);

let flick = data.slice(1, n + 1);

let flickOrNot = new Array(n);

function inverse(flick) {
    for (let i = 0; i < flick.length; i++) {

        if (flick[i] === "flick") {
            flag = !flag;
        }

        flickOrNot[i] = flag;
    }
    return flickOrNot;
}

let ans = inverse(flick);
console.log(ans);