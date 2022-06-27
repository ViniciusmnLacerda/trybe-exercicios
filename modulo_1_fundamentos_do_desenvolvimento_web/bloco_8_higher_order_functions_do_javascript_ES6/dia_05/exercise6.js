const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = (array) => {
  const newObject = ([carro, montadora, ano] = array) => {
    return {
      carro,
      montadora,
      ano, 
    };
  };
  return newObject();
};

console.log(toObject(palio));