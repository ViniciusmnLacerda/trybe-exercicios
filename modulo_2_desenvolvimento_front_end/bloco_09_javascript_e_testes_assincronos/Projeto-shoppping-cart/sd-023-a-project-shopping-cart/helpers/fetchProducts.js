const getUrl = (productName) => `https://api.mercadolibre.com/sites/MLB/search?q=${productName}`;

const fetchProducts = async (productName) => {
  try {
    const url = getUrl(productName);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
