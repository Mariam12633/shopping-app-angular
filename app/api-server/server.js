const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Lire le fichier db.json
const readDB = () => {
  const data = fs.readFileSync('./db.json', 'utf8');
  return JSON.parse(data);
};

// Écrire dans db.json
const writeDB = (data) => {
  fs.writeFileSync('./db.json', JSON.stringify(data, null, 2));
};

// Routes

// GET tous les produits
app.get('/products', (req, res) => {
  const db = readDB();
  res.json(db.products);
});

// GET produit par ID
app.get('/products/:id', (req, res) => {
  const db = readDB();
  const product = db.products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Produit non trouvé' });
  }
});

// GET produits par catégorie
app.get('/products/category/:category', (req, res) => {
  const db = readDB();
  const products = db.products.filter(p => 
    p.category.toLowerCase() === req.params.category.toLowerCase()
  );
  res.json(products);
});

// GET tous les utilisateurs
app.get('/users', (req, res) => {
  const db = readDB();
  res.json(db.users);
});

// POST ajouter un utilisateur
app.post('/users', (req, res) => {
  const db = readDB();
  const newUser = {
    id: db.users.length + 1,
    username: req.body.username,
    password: req.body.password
  };
  db.users.push(newUser);
  writeDB(db);
  res.status(201).json(newUser);
});

// GET le panier
app.get('/cart', (req, res) => {
  const db = readDB();
  res.json(db.cart);
});

// POST ajouter au panier
app.post('/cart/add', (req, res) => {
  const db = readDB();
  const productId = req.body.productId;
  const product = db.products.find(p => p.id === productId);
  
  if (!product) {
    return res.status(404).json({ message: 'Produit non trouvé' });
  }

  const existingItem = db.cart.items.find(item => item.productId === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    db.cart.items.push({
      productId: productId,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }
  
  db.cart.totalQuantity += 1;
  db.cart.totalPrice += product.price;
  
  writeDB(db);
  res.json(db.cart);
});

// POST retirer du panier
app.post('/cart/remove', (req, res) => {
  const db = readDB();
  const productId = req.body.productId;
  const itemIndex = db.cart.items.findIndex(item => item.productId === productId);
  
  if (itemIndex > -1) {
    const item = db.cart.items[itemIndex];
    db.cart.totalPrice -= item.price;
    db.cart.totalQuantity -= 1;
    
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      db.cart.items.splice(itemIndex, 1);
    }
    
    writeDB(db);
    res.json(db.cart);
  } else {
    res.status(404).json({ message: 'Produit non trouvé dans le panier' });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur JSON lancé sur http://localhost:${PORT}`);
  console.log(`📦 Endpoints disponibles :`);
  console.log(`   GET  /products`);
  console.log(`   GET  /products/:id`);
  console.log(`   GET  /products/category/:category`);
  console.log(`   GET  /users`);
  console.log(`   POST /users`);
  console.log(`   GET  /cart`);
  console.log(`   POST /cart/add`);
  console.log(`   POST /cart/remove`);
});