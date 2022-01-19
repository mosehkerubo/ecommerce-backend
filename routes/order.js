const router= require("express").Router();



const Order=require("../models/order");
router.post("/add",async(req,res)=>{

    const myOrder=new Order(
        {
        quantity:req.body.quantity,
        productDescription:req.body.quantity,
        productname:req.body.productname,
        color:req.body.color,
        size:req.body.size,
        image:req.body.image,
        item:req.body.item,
        price:req.body.price,
         } )

         try{
             const savedOrder=await myOrder.save();
             res.status(201).json(savedOrder)
         }

         catch(err)
         {
             res.status(404).json(err)
            }

});







module.exports=router;