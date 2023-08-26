import { readFile, writeFile } from 'fs/promises';

export const readData = (file: string) => {
  readFile(file, { encoding: 'utf-8' })
    .then((data) => console.log('Promise', data))
    .catch((error) => console.log('Error', (error as Error).message));
};

export const readDataAsync = async (file: string) => {
  try {
    const data = await readFile(file, { encoding: 'utf-8' });
    console.log('Promise', data);
  } catch (error) {
    console.log('Error', (error as Error).message);
  }
};

export const writeData = (file: string, data: string) => {
  writeFile(file, data, { encoding: 'utf-8' })
    .then(() => readData(file))
    .catch((error) => console.log('Error', (error as Error).message));
};

const file = 'sample.txt';
readData(file);
writeData('sample2.txt', 'Hola de nuevo');
