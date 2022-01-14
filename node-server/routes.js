import express from "express";
const router = express.Router();

router.get("/:pattern/image", (req, res, next) => {
  console.log(req.param, "Parameters");
});
export default router;
