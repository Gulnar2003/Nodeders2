const express = require('express');
const app = express();

let products = [
  { id: 1, ad: 'Məhsul 1', qiymət: 10, miqdar: 50 },
  { id: 2, ad: 'Məhsul 2', qiymət: 20, miqdar: 30 },
];
app.get('/',(req,res) => {
  res.send("Home page");
})
app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/product:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find(product => product.id == productId[2]);
  console.log(productId);
  if (!product) {
    res.status(404).json({ message: 'Məhsul tapılmadı' });
  }
  res.json(product);

});

app.listen(3000, () => {
  console.log('Server çalışır...');
});
