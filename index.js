const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.tvkzth2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
});

async function run() {
  try {
    const productCollection = client.db('Big-Tech').collection('tech');
    const mycartCollection = client.db('Big-Tech').collection('mycart');

    app.get('/tech', async (req, res) => {
      const cursor = productCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/tech/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.findOne(query);
      res.send(result);
    });

    app.get('/tech/brand/:brand', async (req, res) => {
      const brand = req.params.brand;
      const query = { brand: brand.toLowerCase() };
      const result = await productCollection.find(query).toArray();
      res.send(result);
    });

    app.post('/tech', async (req, res) => {
      const newtech = req.body;
      console.log(newtech);
      const result = await productCollection.insertOne(newtech);
      res.send(result);
    });

    app.get('/mycart', async (req, res) => {
      const getdata = mycartCollection.find();
      const result = await getdata.toArray();
      res.send(result);
    });

    app.get('/mycart/:id', async (req, res) => {
      const id = req.params.id;
      console.log("object ",id);
      const query = { _id: new ObjectId(id) };
      const result = await mycartCollection.findOne(query);
      res.send(result);
    });

    app.post('/mycart', async (req, res) => {
      const cartdata = req.body;
      const result = await mycartCollection.insertOne(cartdata);
      res.send(result);
    });

    app.put('/tech/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedTechnology = req.body;
      const Technology = {
        $set: {
          name: updatedTechnology.name,
          brand: updatedTechnology.brand.toLowerCase(),
          product_pic: updatedTechnology.product_pic,
          details: updatedTechnology.details,
          price: updatedTechnology.price,
          type: updatedTechnology.type,
        }
      };
      const result = await productCollection.updateOne(filter, Technology, options);
      res.send(result);
    });

    app.delete('/mycart/:id', async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: id };
     
      const result = await mycartCollection.deleteOne(query);
      res.send(result);
    });
    

    app.delete('/tech/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.deleteOne(query);
      res.send(result);
    });

    app.get('/user', async (req, res) => {
      const cursor = userCollect.find();
      const users = await cursor.toArray();
      res.send(users);
    });

    app.post('/user', async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await userCollect.insertOne(user);
      res.send(result);
    });

    app.patch('/user', async (req, res) => {
      const user = req.body;
      const filter = { email: user.email };
      const updateDoc = {
        $set: {
          lastLoggedAt: user.lastLoggedAt,
        },
      };
      const result = await userCollect.updateOne(filter, updateDoc);
      res.send(result);
    });

    app.delete('/user/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollect.deleteOne(query);
      res.send(result);
    });

    await client.db('admin').command({ ping: 1 });
    console.log('Successfully connected to MongoDB!');
  } finally {}
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Technology making server');
});
app.listen(port, () => {
  console.log(`port :  ${port}`);
});
