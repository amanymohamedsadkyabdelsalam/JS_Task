const fs = require("fs");

let data = fs.readFileSync(0, "utf8").trim().split(" ");

let n = Number(data[0]);

let sheapOrWolf = data.slice(1);

if (sheapOrWolf[n - 1] === "Wolf") {
    console.log("Pls go away and stop eating my sheep");
} 
else {
    for (let i = n - 1; i >= 0; i--) {
        if (sheapOrWolf[i] === "Wolf") {
            let sheepNumber = n - i;
            console.log("Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!");
            break;
        }
    }
}