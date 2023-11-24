"use server";
import { redirect } from "next/navigation";
import { Product, User } from "./models";
import { connectTODB } from "./utils";
import { revalidatePath } from "next/cache";
import { signIn } from "../../auth";
import bcrypt from  "bcrypt"

export const addUser = async (formData) => {
  const { username, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  try {
    connectTODB();

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedpassword,
      phone,
      isAdmin,
      isActive,
      address,
    });

    await newUser.save();
  } catch (err) {
    throw new Error(err);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, cat, price, stock, color, size, desc } =
    Object.fromEntries(formData);

  try {
    connectTODB();
    const newProduct = new Product({
      title,
      cat,
      price,
      stock,
      color,
      size,
      desc,
    });

    await newProduct.save();
  } catch (err) {
    throw new Error(err);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectTODB();

    await Product.findByIdAndDelete(id);
  } catch (err) {
    throw new Error(err);
  }
  revalidatePath("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectTODB();

    await User.findByIdAndDelete(id);
  } catch (err) {
    throw new Error(err);
  }
  revalidatePath("/dashboard/users");
};
export const updateUser = async (formData) => {
  const { id, username, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  try {
    connectTODB();

    const updateField = {
      username,

      email,
      password,
      phone,
      isAdmin,
      isActive,
      address,
    };
    Object.keys(updateField).forEach(
      (key) => (updateField[key] === "" || undefined) && delete updateField[key]
    );

    await User.findByIdAndUpdate(id, updateField);
  } catch (err) {
    throw new Error(err);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateSingleProduct = async (formData) => {
  const { id, title, cat, price, stock, color, size, desc } =
    Object.fromEntries(formData);

  try {
    connectTODB();

    const updateFields = {
      title,
      cat,
      price,
      stock,
      color,
      size,
      desc,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    throw new Error(err);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const authenticate = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  console.log(username, password);
  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);
    return "Wrong Credentials!";
  }
};
