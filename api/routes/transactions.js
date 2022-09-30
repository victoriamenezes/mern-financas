import express from "express";
import Transaction from "../models/Transaction.js"
import { createTransaction, getTransaction, getTransactions, updateTransaction, deleteTransaction } from '../controllers/transaction.js';
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createTransaction);

//UPDATE

router.put("/:id", verifyAdmin, updateTransaction);

//DELETE
router.delete("/:id", verifyAdmin, deleteTransaction);

//GET
router.get("/:id", verifyUser, getTransaction);


//GET ALL
router.get("/", verifyAdmin, getTransactions);



export default router
