const input = process.argv[2];

if (input === undefined) {
  process.exit(0);
}

let letters = 0;
let digits = 0;
let others = 0;

for (let i = 0; i < input.length; i++) {
  const char = input[i];

  if (char >= '0' && char <= '9') {
    digits++;
  } else if (
    (char >= 'a' && char <= 'z') ||
    (char >= 'A' && char <= 'Z')
  ) {
    letters++;
  } else {
    others++;
  }
}

console.log(`Letters: ${letters}`);
console.log(`Digits: ${digits}`);
console.log(`Others: ${others}`);