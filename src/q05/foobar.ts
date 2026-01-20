const n: number = parseFloat(process.argv[2]);
if(isNaN(n)|| n < 1 ||!Number.isInteger(n)){
    console.log("Invalid Input");
}
else{
    for(let i = 1;i<=n;i++){
        if(i % 3 ===0 && i % 7 ===0){
            console.log("FooBar");
        } else if(i % 3 === 0){
            console.log('Foo');
        }else if(i % 7 === 0){
            console.log('Bar');
        }
        else{
            console.log(i);
        }
        }
    }
