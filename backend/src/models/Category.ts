import mongoose from "mongoose";

interface ICategory {
  name: string;
  color: string;
  url: string;
}

const categorySchema = new mongoose.Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model<ICategory>("Category", categorySchema);

export default Category;