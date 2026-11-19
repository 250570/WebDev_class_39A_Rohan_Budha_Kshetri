// 1. Shopping Discount
// • Task: Calculate the final price of an item based on a
// purchaseAmount:
// • $100 or more: 20% discount
// • $50 to $99.99: 10% discount
// • Under $50: No discount

const purchaseAmount = 75;
let finalPrice;

if (purchaseAmount >= 100) {
  finalPrice = purchaseAmount * 0.8; // 20% off
} else if (purchaseAmount >= 50) {
  finalPrice = purchaseAmount * 0.9; // 10% off
} else {
  finalPrice = purchaseAmount;
}

console.log(finalPrice);