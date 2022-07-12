const getSavedCartItems = () => {
  const recoveredItems = localStorage.getItem('cartItems');
  return recoveredItems;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
