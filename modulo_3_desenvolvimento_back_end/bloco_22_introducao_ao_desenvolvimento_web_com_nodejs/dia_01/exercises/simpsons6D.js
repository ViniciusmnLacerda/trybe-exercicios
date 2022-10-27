const fs = require('fs').promises;

async function createSimpsonsFamily() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const simpsonsFamily = simpsons.filter(simpson => +simpson.id > 0 && +simpson.id < 5);
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

async function main() {
  await createSimpsonsFamily();
}

main();