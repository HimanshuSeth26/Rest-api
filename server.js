const express = require("express");
require("express-async-errors");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const morgan = require("morgan");

//database connection

mongoose.connect("mongodb://localhost:27017/MyDb",
    { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('mongodb connected')
    });

 // model

const post = require("./model/post")

require("./model/Comment");

// Middleware
app.use(bodyparser.json()).use(morgan()) 



//Routes

app.use("/posts", require("./routes//posts"))
const router = require("express").Router();
// Not found Route
app.use((req, res, next) => {
    req.status = 404;
    const error = new Error("Routes not found");
    next(error);
});


// Error handler

if (app.get("env") == "production") {
    app.use((error, req, res, next) => {
        res.status(req.status || 500).send({
            message: error.message,
            stack: error.stack
        });
    });
}

app.use((error, req, res, next) => {
    res.status(req.status || 500).send({
        message: error.message,
        stack: error.stack
    });
});





/*
app.get("/posts", async (req, res) => {
    try {
        const posts = await Post.find({})
        res.send(posts)
    } catch (error) {
        res.status(500)
    }
});

app.get("/posts:postId", async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.postId })
        res.send(post)
    } catch (error) {
        res.status(500);
    }
});

app.put("/posts:postId", async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate({
            _id: req.params.postId
        }, req.body, {
            new: true,
            runValidators: true
        });

        res.send(post)

    } catch (error) {
        res.send(500)
    }
});

app.delete("/posts:postId", async (req, res) => {
    try {
        const post = await Post.findByIdAndRemove({
            _id: req.params.postId
        });
        res.send(post)

    } catch (error) {
        res.send(500)
    }
})


app.post("/posts", async (req, res) => {
    try {
        const post = new Post();
        post.title = req.body.title;
        post.content = req.body.content;
        await post.save();
        res.send(post)
    } catch (error) {
        res.status(500)
    }

})*/

app.listen(3001, function () {
    console.log("Server is running on port 3001")
} )