const express = require('express');
const server = express();
const port = 3000;
//                      ./routes/index.js
const Routes = require('./routes');
// host => localhost:3000/clients
// misitowebdivertidoygenial.com/clients
server.use(express.json());
server.use('/api/v1/clients', Routes.ClientRoutes);
server.use('/api/v1/products', Routes.ProductRoutes);
server.use('/api/v1/sales', Routes.SaleRoutes);

server.listen(port, () => {
  console.log(`API escuchando en puerto ${port}.`);
});
