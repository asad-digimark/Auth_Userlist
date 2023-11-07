export const validateProduct = product => {
  return product.name &&
    product.brand &&
    product.purchasePrice &&
    product.purchaseDate &&
    product.salePrice &&
    product.buyerName &&
    product.buyerNo &&
    product.quantity // && product.image
    ? true
    : false;
};

// const ans = validateProduct({
//   name: 'a',
//   brand: 'a',
//   purchasePrice: 'a',
//   purchaseDate: 'a',
//   salePrice: 'a',
//   buyerName: 'a',
//   buyerNo: 'a',
//   quantity: 'a',
//   image: 'a',
// });

// console.log(ans);
