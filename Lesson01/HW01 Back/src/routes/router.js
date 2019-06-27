const { getUser, createUser } = require('./users');
const { getProduct, createProduct } = require('./products');

const routes = {
  'signup': (req, res) => {
    if (req.method === 'POST') return createUser(req, res);
  },
  'users': (req, res) => {
    if (req.method === 'GET') return getUser(req, res);
  },
  'products': (req, res) => {
    if (req.method === 'GET') return getProduct(req, res);
    if (req.method === 'POST') return createProduct(req, res);
  },
  'default': (req, res) => {
    res.end('<h1>Default route</h1>')
  }
};

const getRoute = (req, res) => {
  const url = req.url;

  if (url.includes('signup')) {
    console.log(`route:req`, req.body);
    routes.signup(req, res);
    return;
  }

  if (url.includes('users')) {
    console.log(`should show users`);
    routes.users(req, res);
    return;
  }

  if (url.includes('products')) {
    routes.products(req, res);
    return;
  }

  routes.default(req, res);
};

module.exports = getRoute;