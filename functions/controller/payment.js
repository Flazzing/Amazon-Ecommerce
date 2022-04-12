const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const admin = require("firebase-admin");
const stripe = require("stripe")("");

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

  // const paymentIntent = await stripe.paymentIntents.create({
  //   amount: total,
  //   currency: "usd",
  // });  clientSecret: paymentIntent.client_secret

  res.status(201).send({ total: total });
});

exports.payments = functions.https.onRequest(paymentApp);
