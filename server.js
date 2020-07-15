const express = require("express");
const app = express();
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const morgan = require("morgan")

//database connection

mongoose.connect("mongodb://localhost:27017/MyDb",
    { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('mongodb connected')
    });

 // model

const post = require("./model/post")

// Middleware
app.use(bodyparser.json())
    .use(morgan()) 

//Routes

app.use("/posts", require("./routes//posts"))
/*

app.get("/posts", async (req, res) => {
    try {
        const posts = await post.find({})
        res.send(posts)
    } catch (error) {
        res.status(500)
    }
})

app.get("/posts/:postId", async (req, res) => {
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
            new: true

        });

    } catch (error) {
        res.send(500)
    }
});





app.get("/posts", (req, res) => {

    res.send({
        name :"Himanshu"
    })
})

app.delete("/posts/:postId", async (req, res) => {
    try {
        const post = await post.findByIdAndRemove({
            _id: req.params.postId
    });
res.send(post)
    } catch (error) {
        res.send(500)
    }
})

app.get("/nodejs", (req, res) => {

    res.send({
        name: "nodejs"
    })
})

app.post("/posts", async(req, res) => {

    try {
        const post = new post();
        post.title = req.body.title;
        post.content = req.body.content;

        await post.save();
        res.send(post)
    } catch (error) {
        res.status(500)
    }
    

}) */

app.listen(3001, function () {
    console.log("Server is running on port 3001")
} )