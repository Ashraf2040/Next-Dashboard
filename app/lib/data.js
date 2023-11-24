import { User } from "./models"
import { Product } from "./models"
import { connectTODB } from "./utils"


export const fetchUser = async (q, page) => {
    
    const ITEM_PER_PAGE =2

    const regex = new RegExp(q,"i")
    
  try {
    connectTODB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};


export const fetchProduct = async (q, page) => {
    
    const ITEM_PER_PAGE =2

    const regex = new RegExp(q,"i")
    
  try {
    connectTODB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchSingleUser = async (id) => {
    

    
  try {
    connectTODB();
    const user = await User.findById(id)
   return user
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};
export const fetchSingleProduct = async (id) => {
    

    
  try {
    connectTODB();
    const product = await Product.findById(id)
   return product
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};