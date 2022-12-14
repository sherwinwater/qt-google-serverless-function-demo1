import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import app from "./app";

admin.initializeApp();

exports.shopify = functions.https.onRequest(app);
