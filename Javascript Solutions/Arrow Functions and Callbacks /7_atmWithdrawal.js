const validateWithdrawal = (amount, balance) =>
  amount > 0 &&
  amount % 500 === 0 &&
  amount + 25 <= balance;

const withdrawMoney = (amount, balance, callback) => {
  if (!callback(amount, balance)) {
    console.log("Withdrawal failed: check the amount and available balance.");
    console.log(`Remaining Balance: Rs. ${balance}`);
    return balance;
  }

  const remainingBalance = balance - amount - 25;
  console.log("Withdrawal Successful!");
  console.log("Transaction Fee: Rs. 25");
  console.log(`Remaining Balance: Rs. ${remainingBalance}`);
  return remainingBalance;
};

withdrawMoney(3000, 10000, validateWithdrawal);