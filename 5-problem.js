
const { log } = require("console");
const fs = require("fs");

let data = fs.readFileSync(0, "utf8").trim().split(" ");

let n = Number(data[0]);

let match = data.slice(1, 11);

let winOrNot =0 ;

function Win(match) {
    for (let i = 0; i < match.length; i++) {
            if(match[i][0]>match[i][2])
            {
               winOrNot+=3;
            } 
            else if(match[i][0]===match[i][2])
            {
                winOrNot+=1;
            }
    }
    return winOrNot;
}

console.log(Win(match));
