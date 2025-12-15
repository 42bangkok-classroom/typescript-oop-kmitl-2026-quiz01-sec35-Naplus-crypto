export {}

const operator = process.argv[2];
const aInput = process.argv[3];
const bInput = process.argv[4];

// ตรวจ argument หาย / ว่าง
if (
  operator === undefined ||
  aInput === undefined ||
  bInput === undefined ||
  operator.trim() === "" ||
  aInput.trim() === "" ||
  bInput.trim() === ""
) {
  console.log("Invalid input");
} else {
  const a = Number(aInput);
  const b = Number(bInput);

  // ตรวจว่าเป็นตัวเลขไหม
  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log("Invalid input");
  } else {
    switch (operator) {
      case "add":
        console.log((a + b).toString());
        break;

      case "sub":
        console.log((a - b).toString());
        break;

      case "mul":
        console.log((a * b).toString());
        break;

      case "div":
        if (b === 0) {
          console.log("Invalid input");
        } else {
          console.log((a / b).toString());
        }
        break;

      default:
        console.log("Invalid operator");
    }
  }
}
