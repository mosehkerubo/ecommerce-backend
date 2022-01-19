const { route } = require("./auth");
const Product = require("../models/product")

const router=require("express").Router();

router.get("/producttest",(req,res)=>{
    res.send("productroute")
});




router.post("/add",async(req,res)=>{

    
const newProduct=new Product({
  
    productname:req.body.productname,
    color:req.body.color,
    price:req.body.price,
    image:req.body.image,
    productDescription:req.body.productDescription,
    size:req.body.size,


  
}) 


try{
   
        }
        catch(err){
    res.status(404).json(err)
        }

});



module.exports=router;