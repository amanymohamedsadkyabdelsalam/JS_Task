const fs = require("fs");

let data = fs.readFileSync(0, "utf8").trim().split(" ");

let mounth = Number(data[0]);

let quarter=Math.ceil(mounth/3);
