const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooksearch"
);

const bookSeed = [
  {
    title:"The Wedding Book",
    authors: ["Mindy Weiss", "Lisbeth Levine"],
    description:"Provides a comprehensive guide to planning a wedding, including contract negotiations, creating a budget, planning guest lists, and obtaining a marriage license.",
    image: "http://books.google.com/books/content?id=a_eBKmUbW6wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link:"http://books.google.com/books?id=a_eBKmUbW6wC&dq=The+Wedding&hl=&source=gbs_api"
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
