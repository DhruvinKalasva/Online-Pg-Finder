import express from "express";
import Pg from "../models/Pg.js";
import { countByarea, createPg, deletePg, getAllPg, getPg, updatePg } from "../controllers/pg.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


// post
router.post("/",verifyAdmin, createPg);


// update
router.put("/:id",verifyAdmin, updatePg);


//delete
router.delete("/:id",verifyAdmin, deletePg);

// get

router.get("/find/:id", getPg);

//get all
router.get("/", getAllPg);


//Count
router.get("/countByarea", countByarea);


export default router