const calculateDiscount = (amount) => {
  if (amount >= 5000) return 0.20;
  if (amount >= 3000) return 0.15;
  if (amount >= 1000) return 0.10;
  return 0;
};

const calculateFinalPrice = (amount, discount) =>
  amount - amount * discount;

const checkout = (customerName, amount, callback) => {
  const discount = calculateDiscount(amount);
  const finalPrice = callback(amount, discount);

  console.log(`Customer: ${customerName}`);
  console.log(`Original Price: Rs. ${amount}`);
  console.log(`Discount: ${discount * 100}%`);
  console.log(`Final Price: Rs. ${finalPrice}`);
};

checkout("Nikesh", 6000, calculateFinalPrice);