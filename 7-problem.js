function finalGrade(grade,projects){
    if(grade > 90 || projects > 10)
        return 100;
    else if(grade > 75 && projects >= 5)
        return 90;
    else if(grade > 50 && projects>= 2)
        return 75;
    else
        return 0;

}

const fs = require("fs");

let data = fs.readFileSync(0, "utf8").trim().split(" ");

let grade=Number(data[0]);

let projects=Number(data[1]);

console.log(finalGrade(grade,projects));
