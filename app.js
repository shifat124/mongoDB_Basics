const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());



const mongoUrl = "mongodb+srv://shifat:bjit123@cluster0.zpbpe1y.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,

})

.then(() => {
    console.log("Connected to database");
})

.catch((e) => console.log(e));




app.listen(5000, () => {
    console.log("server started");
});

app.post("/post", async(req, res) => {
    console.log(req.body);
    const { data } = req.body;

    try {
        if (data == "shifat") {
            res.send({ status: "ok" });
        } else {
            res.send({ status: "user not found" });

        }
    } catch (error) {
        res.send({ status: "something went wrong" });
    }




});




require("./userDetails");

const user = mongoose.model("userInfo");

app.post("/register", async(req, res) => {

    const { name, email, mobileNo } = req.body;

    try {
        await user.create({
            uname: name,
            email,
            phoneNo: mobileNo,

        });

        res.send({ status: "Ok" });
    } catch (error) {
        res.send({ status: "Error" });
    }

});