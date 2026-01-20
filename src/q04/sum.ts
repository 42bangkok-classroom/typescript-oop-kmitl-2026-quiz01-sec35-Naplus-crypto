const n: number = parseFloat(process.argv[2]);


if (Number.isNaN(n) || n < 0 || !Number.isInteger(n)) {
  console.log('Invalid Input');
} 
else {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`Sum: ${sum}`);
}
