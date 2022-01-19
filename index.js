const mongoose = require("mongoose");

const dotenv = require("dotenv");

const productRoute = require("./routes/product");

const userRoute = require("./routes/user");


const authRoute = require("./routes/auth");

const cartRoute=require("./routes/cart");

const OrderRoute=require("./routes/order");

const express = require("express");

const app = express();

const PORT = 8000 || process.env.PORT;

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
app.use(express.json())




app.use("/api/user",userRoute);

app.use("/api/order",OrderRoute) ;

app.use("/api/cart",cartRoute);

app.use("/api/product", productRoute);

app.use("/api/auth", authRoute);
// app.get("/contacts",(req,res)=>{
//     res.send("welcome")
// })
