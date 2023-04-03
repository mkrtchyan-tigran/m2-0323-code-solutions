const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const salePrices = prices.map(price => ({ price, salePrice: price / 2 }));
console.log('\n', salePrices);
const formattedPrices = prices.map(price => `$${price.toFixed(2)}`);
console.log(formattedPrices);
