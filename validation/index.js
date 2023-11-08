export const validateProduct = product => {
  return product.name &&
    product.brand &&
    product.purchasePrice &&
    product.purchaseDate &&
    product.salePrice &&
    product.buyerName &&
    product.buyerNo &&
    product.quantity &&
    product.image
    ? true
    : false;
};
