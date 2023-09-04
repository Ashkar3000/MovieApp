import  express from "express"
import user from "../../models/user.js"
import * as controller from "../../controllers/userControllers.js"

const router = express.Router()

router.post("/", controller.register);
// router.post("/", controller.createUser);

export default router