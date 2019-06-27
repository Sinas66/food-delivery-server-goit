const fs = require('fs');
const { promisify } = require('util');

const filePath = './src/db/products.json';

const readFileAsync = promisify(fs.readFile);

const writeFileAsync = promisify(fs.writeFile);

(async () => {

  const buffer = await readFileAsync(filePath);

  console.log('File was read');

  const products = JSON.parse(buffer);
  const newProducts = [...products, { name: 'coca cola', price: 200 }];

  const newProductsToSave = JSON.stringify(newProducts);

  console.log('Before file write');

  // await writeFileAsync(filePath, newProductsToSave);

  console.log('File was written');

})();
