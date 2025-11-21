let R="Rock", S="Scissors", P="Paper";

const fs = require("fs");

let data = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

let T=data[0];
while(T--){
let player1 = data[1];
let player2 = data[2];

if(player1===player2)
{
    console.log("Draw!");
}
else if(player1===R&&player2===S)
{
    console.log("Player 1 won!");
}

else if(player1===S && player2===P)
{
    console.log("Player 1 won!");
}

else if(player1===P&& player2===R)
{
    console.log("Player 1 won!");
}

else
{
    console.log("Player 2 won!");
}
}