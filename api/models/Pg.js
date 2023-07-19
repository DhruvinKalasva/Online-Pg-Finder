import mongoose from "mongoose";

const pgSchema = new mongoose.Schema({
    pgname:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    area:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    photos:{
        type: [String]
    },
    ownername:{
        type: String,
        required:true
    },
    contact:{
        type: Number,
        required:true
    },
    pginfo:{
        type: String,
        required:true   
    },
    rating:{
        type: Number,
        min:0,
        max:5
    },
    price:{
        type: Number,
        required:true
    },
    featured:{
        type: Boolean,
        default:false
    }
})

export default mongoose.model("Pg", pgSchema);

