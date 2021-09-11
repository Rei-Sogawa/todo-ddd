import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onCall(() => {
  functions.logger.info("Hello Logs!", {structuredData: true});
  return "Hello World!";
});
