const arg = process.argv[2];

if (arg === undefined) {
  console.log("Invalid input");
  process.exit(0);
}

const n = Number(arg);

if (!Number.isInteger(n) || n < 1) {
  console.log("Invalid input");
  process.exit(0);
}

for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 7 === 0) {
    console.log("FooBar");
  } else if (i % 3 === 0) {
    console.log("Foo");
  } else if (i % 7 === 0) {
    console.log("Bar");
  } else {
    console.log(i.toString());
  }
}
