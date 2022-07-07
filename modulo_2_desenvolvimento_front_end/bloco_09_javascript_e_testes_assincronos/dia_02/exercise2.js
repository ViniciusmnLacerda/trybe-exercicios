const crypto_url = 'https://api.coincap.io/v2/assets';
const currencie_url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.json';

const fetchCrypto = async () => {
  return await fetch(crypto_url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => console.log(error));
}

const fetchCurrencie = async () => {
  return await fetch(currencie_url)
    .then((response) => response.json())
    .then((data) => data.brl)
    .catch((error) => console.log(error));
}

const newTable = async () => {
  const request = await fetchCrypto();
  const currencie = await fetchCurrencie();
  const unorderedList = document.querySelector('.crypto-list');
  request.filter((filter) => filter.rank <= 10)
    .forEach((element) => {
      const listItem = document.createElement('li');
      const price = (Number(element.priceUsd) * currencie).toFixed(2);
      listItem.innerHTML = `${element.name} (${element.symbol}): ${price}`;
      unorderedList.appendChild(listItem);
    })
}

window.onload = () => newTable();