const n: number = parseFloat(process.argv[2]);
if(isNaN(n)||n<1||!Number.isInteger(n)){
    console.log('Invalid Input')
}
else{
    for(let row = 0;row<n;row++){
        let line = "";
        for(let col = 0;col<n;col++){
            if (row === 0 || row === n - 1 || col === 0 || col === n - 1) {
                line+='x';
            }else{
                line+='o'
            }
        }
        console.log(line);
}
}