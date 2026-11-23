const calculateBill = (units) => {
  let usageCost = 0;

  if (units <= 20) {
    usageCost = units * 5;
  } else if (units <= 50) {
    usageCost = 20 * 5 + (units - 20) * 7;
  } else {
    usageCost = 20 * 5 + 30 * 7 + (units - 50) * 10;
  }

  return usageCost + 50;
};

const displayBill = (name, units, callback) => {
  const bill = callback(units);
  console.log(`Customer: ${name}`);
  console.log(`Units Consumed: ${units}`);
  console.log(`Total Electricity Bill: Rs. ${bill}`);
};

displayBill("Ram", 65, calculateBill);