import { readFile, readFileSync, writeFile } from 'fs';

export const readData = (file: string) => {
  const data = readFileSync(file, { encoding: 'utf-8' });
  console.log('Sync', data);
};

export const readDataAsync = (file: string) => {
  readFile(file, { encoding: 'utf-8' }, (error, data) => {
    if (error) {
      console.log('Error', (error as Error).message);
      return;
    }

    console.log('Async', data);
  });
};

// Temp
// readDataAsync('sample.txt');

const data = 'Soy un nuevo fichero recién creado';
writeFile('sample2.txt', data, { encoding: 'utf-8' }, (error) => {
  if (error) {
    console.log('Error', (error as Error).message);
    return;
  }

  console.log('Todo bien');
  readDataAsync('sample2.txt');
});
