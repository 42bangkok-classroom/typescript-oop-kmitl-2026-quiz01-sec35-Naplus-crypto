export {}

const balanceInput = process.argv[2];
const withdrawInput = process.argv[3];

// ตรวจ input หาย / ว่าง / ช่องว่าง
if (
  balanceInput === undefined ||
  withdrawInput === undefined ||
  balanceInput.trim() === "" ||
  withdrawInput.trim() === ""
) {
  console.log("Invalid Input");
} else {
  const balance = Number(balanceInput);
  const withdraw = Number(withdrawInput);

  // ตรวจว่าเป็นตัวเลขจริงไหม
  if (Number.isNaN(balance) || Number.isNaN(withdraw)) {
    console.log("Invalid Input");
  } else {
    // ❗ ต้องเช็กตามลำดับในโจทย์
    if (withdraw > balance) {
      console.log("Insufficient balance");
    } else if (withdraw > 5000) {
      console.log("Exceeds per-withdrawal limit");
    } else {
      console.log("Withdrawal approved");
    }
  }
}
