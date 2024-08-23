import express from "express";
import Category from "../models/Category";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
    console.log('categories ===', categories);
  } catch (err) {
    res.status(500).json({ message: "Error fetching categories", error: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res
      .status(400)
      .json({
        message: "Error creating booking",
        error: (err as Error)?.message ?? err,
      });
  }
});

export default router;
