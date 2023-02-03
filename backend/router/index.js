import Router from "express";
import UserController from "../conrollers/user.controller.js";
import { body } from "express-validator";
import AuthMiddleware from "../middlewares/Auth.middleware.js";

const router = new Router();

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 16 }),
  UserController.registration
);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/activate/:link", UserController.activate);
router.get("/refresh", UserController.refresh);
router.get("/users", AuthMiddleware, UserController.getUsers);

export default router;
