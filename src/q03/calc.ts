const operator = process.argv[2];
const aInput = process.argv[3];
const bInput = process.argv[4];

const validOperators = ["add", "sub", "mul", "div"];

// 1. ไม่มี operator เลย
if (operator === undefined) {
  console.log("Invalid input");
  process.exit(0);
}

// 2. operator ไม่ถูกต้อง (แม้ไม่มีตัวเลข ก็ต้องเป็น Invalid operator)
if (!validOperators.includes(operator)) {
  console.log("Invalid operator");
  process.exit(0);
}

// 3. operator ถูก แต่ตัวเลขหาย / ว่าง
if (
  aInput === undefined ||
  bInput === undefined ||
  aInput.trim() === "" ||
  bInput.trim() === ""
) {
  console.log("Invalid input");
  process.exit(0);
}

const a = Number(aInput);
const b = Number(bInput);

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.log("Invalid input");
  process.exit(0);
}

// 4. คำนวณ
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
}
