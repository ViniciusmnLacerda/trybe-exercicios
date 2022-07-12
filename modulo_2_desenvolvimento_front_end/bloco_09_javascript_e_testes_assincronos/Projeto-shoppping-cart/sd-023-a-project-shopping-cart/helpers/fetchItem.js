const newUrl = (itemId) => `https://api.mercadolibre.com/items/${itemId}`;

const fetchItem = async (itemId) => {
  try {
    const url = newUrl(itemId);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
