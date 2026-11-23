const calculateDelivery = (distance) =>
  distance <= 2 ? 30 : 30 + (distance - 2) * 15;

const checkFreeDelivery = (orderAmount) => orderAmount >= 1000;

const processOrder = (customer, distance, orderAmount, callback) => {
  const deliveryCharge = checkFreeDelivery(orderAmount)
    ? 0
    : callback(distance);

  console.log(`Customer: ${customer}`);
  console.log(`Order Amount: Rs. ${orderAmount}`);
  console.log(`Distance: ${distance} km`);
  console.log(`Delivery Charge: Rs. ${deliveryCharge}`);
};

processOrder("Shyam", 5, 800, calculateDelivery);