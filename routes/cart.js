const router=require("express").Router();

const Cart=require("../models/cart");

router.post("/add",async(req,res)=>{

    const addCart=new Cart(
        {

  productname:req.body.productname,
    color:req.body.color,
    price:req.body.price,
    image:req.body.image,
    size:req.body.size,
    quantity:req.body.quantity,
    })

   
    try{
        const savedCart=await addCart.save();
        res.status(201).json(savedCart)

    }

    catch(err){
        res.status(404).json(err)
            }
}


);





module.exports=router;