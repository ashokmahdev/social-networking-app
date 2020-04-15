const express = require("express");
const bodyParser = require("body-parser");
const Post = require("./models/post");

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://localhost:27017/MyPosts?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const app = express();

// Lets attach the body-parser middleware
// bodyParser.json() -> this will tell only to process json type data from the request body
app.use(bodyParser.json());
//another example showing body-parser can process other types of body other than json
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/posts", (req, res, next) => {
  Post.find().then((documents) => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents,
    });
  });
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });

  post.save();

  console.log(post);
  res.status(201).json({
    message: "Post added successfully",
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});

module.exports = app;

// ==========================================================================================
// app.post("/api/posts", (req, res, next) => {
//   const post = req.body;
//   console.log(post);
//   res.status(201).json({
//     message: "Post added successfully",
//   });
// });
// ==========================================================================================

// ==========================================================================================
// const express = require("express"); // this is a package which we installed and doesnt come ship with node package
// const app = express(); //express is a big chain of middlewares f1->f2->f3->f4

// app.use((req, res, next) => {
//   console.log("first middle where");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("second middle where");
//   next();
// });

// app.use((req, res, next) => {
//   res.send("Hello from express");
// });

// module.exports = app;
// ==========================================================================================
