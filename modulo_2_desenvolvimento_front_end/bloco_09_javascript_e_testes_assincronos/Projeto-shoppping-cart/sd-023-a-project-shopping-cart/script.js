const cartItems = document.querySelector('.cart__items');
const btnClear = document.querySelector('.empty-cart');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');

const finalPrice = () => {
  const divPrice = document.querySelector('.total-price');
  const arrayOfItems = cartItems.innerHTML.split(' ');
  const arrayAssistant = arrayOfItems.filter((element) =>
    element.includes('R$'))
    .map((element) => element.replace(/\D+/g, '.'))
    .map((element) => element.slice(0, -1))
    .map((element) => element.slice(1))
    .map((element) => +element);
  const price = arrayAssistant.reduce((acc, cur) => acc + cur, 0);
  divPrice.innerHTML = `<h5>R$${price.toFixed(2)}</h5>`;
};

const clearShoppingCart = () => {
  while (cartItems.firstChild) {
    cartItems.removeChild(cartItems.lastChild);
    saveCartItems(cartItems.innerHTML = '');
    finalPrice();
  }
};

btnClear.addEventListener('click', clearShoppingCart);

const loadPage = () => {
  cartItems.innerHTML = getSavedCartItems();
  finalPrice();
};

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const cartItemClickListener = (event) => {
  event.target.parentElement.remove();
  saveCartItems(cartItems.innerHTML);
  finalPrice();
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  if (element === 'button') {
    e.type = 'button';
  }
  return e;
};

const createCartItemElement = ({ sku, name, salePrice, image }) => {
  const ol = document.querySelector('.cart__items');
  const newDiv = document.createElement('div');
  newDiv.className = 'item-cart-container';
  ol.appendChild(newDiv);
  const imageCartItem = document.createElement('img');
  imageCartItem.className = 'image-cart-item';
  imageCartItem.src = image;
  newDiv.appendChild(imageCartItem);
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerHTML = `${name} <span class = 'price'>R$:${salePrice}</span>`;
  newDiv.appendChild(li);
  const newImg = document.createElement('img');
  newImg.src = '/img/x-svgrepo-com.svg';
  newImg.className = 'remove-icon';
  newDiv.width = '50px';
  newDiv.appendChild(newImg);
  newImg.addEventListener('click', cartItemClickListener);
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const chosenProduct = async (item) => {
  const skuItem = getSkuFromProductItem(item);
  const result = await fetchItem(skuItem);
  const { id: sku, title: name, price: salePrice, thumbnail: image } = result;
  createCartItemElement({ sku, name, salePrice, image });
  saveCartItems(cartItems.innerHTML);
  finalPrice();
};

const createProductItemElement = ({ sku, name, image }) => {
  const items = document.querySelector('.items');
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const btn = createCustomElement('button', 'item__add btn btn-success', 'Adicionar ao carrinho!');
  btn.addEventListener('click', () => {
    chosenProduct(section);
  });
  section.appendChild(btn);
  items.appendChild(section);
};

const beforeLoading = () => {
  const listOfItems = document.querySelector('.items');
  const li = document.createElement('li');
  li.className = 'loading';
  li.innerHTML = 'carregando...';
  listOfItems.appendChild(li);
};

const afterLoading = () => {
  const loading = document.querySelector('.loading');
  loading.remove();
};

const listOfProducts = async (product) => {
  beforeLoading();
  const productFromApi = await fetchProducts(product);
  productFromApi.results.forEach((element) => {
    const object = {
      sku: element.id,
      name: element.title,
      image: element.thumbnail,
    };
    createProductItemElement(object);
  });
  afterLoading();
};

const restoreRemove = () => {
  if (cartItems.firstChild) {
    const imgClick = document.querySelectorAll('.remove-icon');
    imgClick.forEach((element) => {
      element.addEventListener('click', cartItemClickListener);
    });
  }
};

const newProduct = () => {
  const allItems = document.querySelectorAll('.item');
  const itemsContainer = document.querySelector('.items');
  while (itemsContainer.firstChild) {
    itemsContainer.removeChild(itemsContainer.lastChild);
  }
  const typedText = searchInput.value;
  listOfProducts(typedText);
};

searchButton.addEventListener('click', newProduct);

window.onload = () => {
  listOfProducts('computador');
  loadPage();
  restoreRemove();
  finalPrice();
};
