const mongoose=require("mongoose");

const cartSchema=mongoose.Schema(
    {
        productname:{type:String,unique:true,required:true},
        size:{type:Array,required:true},
        color:{type:Array,required:true},
        quantity:{type:Number,required:true},
        image:{type:String,default:false},
        price:{type:Number,require:true}

    },
    {
        timestamps:true
    }
)




module.exports = mongoose.model("Cart",cartSchema);
