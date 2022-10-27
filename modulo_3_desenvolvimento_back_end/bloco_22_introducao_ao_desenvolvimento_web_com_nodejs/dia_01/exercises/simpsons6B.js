const fs = require('fs').promises;

async function getSimpsonsById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const chosenSimpson = simpsons.find((simpson) => +simpson.id === id);
  if(!chosenSimpson) throw new Error ('id não econtrado');
  return chosenSimpson;
}

async function main() {
  const simpson = await getSimpsonsById(33);
  console.log(simpson);
}

main();
