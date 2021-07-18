const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const admin = require("firebase-admin");
const stripe = require("stripe")(
  "sk_test_51IxnhtE88LGtjUOWJNFnIb3XrZXrgB32yidQqvBdgKJAiv72dy4NnXL9J0YICoguAQQw9apv9Blkpd108Gk5c8Ic00B9z9gDwl"
);

const db = admin.firestore();

const paymentApp = express();
paymentApp.use(cors({ origin: true }));
paymentApp.use(express.json());

paymentApp.get("/", async (req, res) => {
  // this is for test only
  res.status(200).send("hello");
});

paymentApp.post("/create", async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res
    .status(201)
    .send({ total: total, clientSecret: paymentIntent.client_secret });
});

exports.payments = functions.https.onRequest(paymentApp);
