const getFoodPrice = (foodName) => {
  const prices = {
    burger: 250,
    pizza: 500,
    momo: 150,
    chowmein: 180
  };

  return prices[foodName.toLowerCase()];
};

const calculateServiceCharge = (total) => total * 0.05;

const calculateOrder = (foodName, quantity, callback) => {
  const price = getFoodPrice(foodName);
  if (price === undefined) return null;

  return callback(price, quantity);
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
  const foodAmount = callback(foodName, quantity, calculateTotal);

  if (foodAmount === null) {
    console.log(`Sorry, ${foodName} is not on the menu.`);
    return;
  }

  const serviceCharge = calculateServiceCharge(foodAmount);
  console.log(`Customer: ${customerName}`);
  console.log(`Food: ${foodName}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Food Amount: Rs. ${foodAmount}`);
  console.log(`Service Charge: Rs. ${serviceCharge}`);
  console.log(`Final Amount: Rs. ${foodAmount + serviceCharge}`);
};

const calculateTotal = (price, quantity) => price * quantity;

generateReceipt("Suman", "Burger", 2, calculateOrder);