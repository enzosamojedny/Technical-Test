import { Router } from "express";

const router = Router();

router.use(async (req, res, next) => {
    try {
      await airtableConnection();
      next();
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  });
  export default router;