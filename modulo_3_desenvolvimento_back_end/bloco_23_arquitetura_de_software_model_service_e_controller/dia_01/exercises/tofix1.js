const fs = require('fs').promises

const arrayToFile = async () => {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const createFilesPromises = strings
    .map((string, index) => fs.writeFile(`./file${index + 1}.txt`, string));
  
  await Promise.all(createFilesPromises)

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const readFilesPromises = fileNames
    .map((fileName) => fs.readFile(fileName, 'utf-8'));

    const fileContents = await Promise.all(readFilesPromises);

    const newFileContent = fileContents.join(' ');

    await fs.writeFile('./fileAll.txt', newFileContent)
}

arrayToFile();