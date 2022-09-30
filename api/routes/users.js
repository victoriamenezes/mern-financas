import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Você está logado.")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Você está logado e tem permissão para deletar a sua conta.")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Olá, admin. Você está logado e tem permissão para deletar contas.")
// })


//UPDATE

router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);


//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router
