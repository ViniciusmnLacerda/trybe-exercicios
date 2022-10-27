const fs = require('fs').promises; 

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const simpsonsFamilyWithoutNelson = simpsons.filter(simpson => simpson.id !== '8');
  simpsonsFamilyWithoutNelson.push({ id: '15', name: 'Maggie Simpson' });
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamilyWithoutNelson));
}

async function main() {
  await replaceNelson();
}

main();