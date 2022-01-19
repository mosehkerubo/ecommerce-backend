
const router=require("express").Router();


const jwt=require("jsonwebtoken");


const User=require("../models/user");

const bcrypt=require("bcrypt");
const user = require("../models/user");


router.post("/register",async(req,res)=>{

    const salt=await bcrypt.genSalt()
const newUser=new User({
  
    username:req.body.username,
    email:req.body.email,
    password:await bcrypt.hash(req.body.password,salt)


  
})
try{
    const savedUser=await newUser.save();
    res.status(201).json(savedUser)
        }
        catch(err){
    res.status(404).json(err)
        }

});


//login


router.post("/login", async (req,res)=>{
    try{
const user =await User.findOne(

{ username:req.body.username

});
!user && res.status(404).json("user not found")
const comparePassword=await bcrypt.compare(req.body.password,user.password);
!comparePassword && res.json(404).json("Password does not match")
  



const {password,...others}=user._doc

 const accessToken=jwt.sign({

    id:user._id,
   isAdmin:user.isAdmin 

},process.env.JWT_SEC
)


res.status(200).json({...others,accessToken})
}

    catch(err){
        res.status(404).json(err)

    }
    
})


module.exports=router;