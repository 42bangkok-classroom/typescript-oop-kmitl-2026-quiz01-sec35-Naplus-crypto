const n:number = parseFloat(process.argv[2]);
if(isNaN(n)||n<0){
    console.log("Invalid Input");
}
else{
    let result = 1;
    for(let i = 1;i<=n;i++){
            result = result * i;
    }
    console.log(result);
}
