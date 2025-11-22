
const fs = require("fs");

let data = fs.readFileSync(0, "utf8").trim().split(" ");

let n = Number(data[0]);

let arr = data.slice(1, n + 1);

let SumFun=new Array(n);
function Sort(arr) {
    arr.sort((a,b) => b-a );
    for (let i = 0; i < arr.length-1; i++) {
         SumFun[i]=(arr[i]-arr[i+1]);
    }
    for(let i=0;i<SumFun.length;i++)
    {
        SumFun[i]+=SumFun[i+1];
    }
    return SumFun;
}

let ans = Sort(arr);
for(let i=0;i<ans.length;i++){
   console.log(ans[i]+" ");
}

