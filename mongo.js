const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://giri:T9BQNAYbjYrwSl6k@cluster0.y8tqhxx.mongodb.net/products_test?retryWrites=true&w=majority";

const client = new MongoClient(url);

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("products").insertOne(newProduct);
  } catch (error) {
    return res.json({ message: "Could not store data." });
  }
  client.close();

  res.json(newProduct);
};

const getProducts = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
