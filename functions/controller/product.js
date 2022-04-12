const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const admin = require("firebase-admin");
admin.initializeApp();

const productApp = express();

productApp.use(cors({ origin: true }));
productApp.use(express.json());

const db = admin.firestore();

productApp.get("/", async (req, res) => {
  /*  Alert:  this is not an optimum way of getting all the product data because if each customer retrieve all data from this database, 1 customer is going to consume all the data.
			    With many customer, retrieve of data is going to be tremendously expensive.
		
		Note: This is an endpoint specifically for database to stay up to date with the firebase.
		Note: Pagination is not possible with Firestore because there is no count query within firestore API 
		Source:  https://stackoverflow.com/questions/55786571/paginate-with-firestore
	*/

  const snapshot = await db.collection("products").get();
  let products = [];
  snapshot.forEach((doc) => {
    let id = doc.id;
    let data = doc.data();
    products.push({ id, ...data });
  });

  res.status(200).send(JSON.stringify(products));
});

productApp.get("/:id", async (req, res) => {
  /*
		Note: This is an endpoint to get the product by ID
	*/

  const snapshot = await admin
    .firestore()
    .collection("products")
    .doc(req.params.id)
    .get();

  const userId = snapshot.id;
  const userData = snapshot.data();
  res.status(200).send(JSON.stringify({ id: userId, ...userData }));
});

productApp.put("/:id", async (req, res) => {
  /*
		Note: This is an endpoint to update the product by ID
	*/

  const body = req.body;
  const status = await admin
    .firestore()
    .collection("products")
    .doc(req.params.id)
    .update(body);

  res.status(200).send({ status: "Success put" });
});

productApp.post("/", async (req, res) => {
  /*
		Note: This is an endpoint to add new product
	*/
  const product = req.body;
  await db.collection("products").add(product);
  res.status(201).send({ status: "Success Add" });
});

productApp.delete("/:id", async (req, res, next) => {
  /*
		Note: This is an endpoint to delete new product
	*/
  await db.collection("products").doc(req.params.id).delete();
  res.status(200).send({ status: "success delete" });
});

exports.products = functions.https.onRequest(productApp);
