const input = process.argv[2];

if(!input){
    process.exit(0);
}
let letter=0;
let digit=0;
let other=0;
for(let i = 0;i<input.length;i++){
    const char = input[i];

    if (char >= '0' && char <= '9') {
    digit++;
}
    else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
    letter++;
}
} 
