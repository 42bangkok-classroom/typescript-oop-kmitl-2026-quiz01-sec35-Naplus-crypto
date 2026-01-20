const n:number = parseFloat(process.argv[2]);
if(isNaN(n)||n<1||!Number.isInteger(n)){
    console.log("Invalid Input")
}else{
    for(let row = 0;row<n;row++){
        console.log(" ".repeat(row) + "*".repeat(n));
  }
}
