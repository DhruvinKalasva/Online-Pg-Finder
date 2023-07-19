import Pg from "../models/Pg.js";

//create


export const createPg = async (req,res,next)=>{
    const newPG = new Pg(req.body);
    
    try{
        const savedPG = await newPG.save();
        res.status(200).json(savedPG);
    } catch(err){
        next(err);
    }
}

//update
export const updatePg = async (req,res,next)=>{
    
    try{
        const updatedPG = await Pg.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedPG)
    } catch(err){
        next(err);
    }
}

// delete
export const deletePg = async (req,res,next)=>{
        
    try{
        await Pg.findByIdAndDelete(req.params.id);
         res.status(200).json("Pg is deleted")
     } catch(err){
        next(err);
    }
}

//get
export const getPg = async (req,res,next)=>{

    try{
        const pg = await Pg.findById(req.params.id);
         res.status(200).json(pg)
     } catch(err){
        next(err);
    }
}

// getall
export const getAllPg = async (req,res,next)=>{
    
    const {min,max, ...others} = req.query;
    try{
        const allpgs = await Pg.find({...others,price: {$gt:min | 1, $lt: max || 50000},})
         res.status(200).json(allpgs);
     } catch(err){
        next(err);
    }
}

// find({featured:req.query.featured}).limit(req.query.limit)

// count
export const countByarea = async (req,res,next)=>{
    const areas = req.query.areas.split(",")
    try{
       const list = await Promise.all(areas.map(area=>{
        return Pg.countDocuments({area:area})
       }))
         res.status(200).json(list);
     } catch(err){
        next(err);
    }
}


// pgs/countByarea?areas=vastrapur,ranip
