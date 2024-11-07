import axios from 'axios';
import Product from "@/app/models/Product";
import dbConnect from '@/app/database/dbConnect'

const  getAllProductsDB = async () => {
  await dbConnect();
  try {
    const products = await Product.find().sort({ name: "asc" });
    return { products: JSON.parse(JSON.stringify(products)) };
  } catch (error) {
    console.log("Error: ", error.message);
    return { products: [], category: null };
  }
}

const getOneProductDB = async (id) => {
  await dbConnect();
  try {
    const product = await Product.findById(id)
    return{product: JSON.parse(JSON.stringify(product))}
  } catch (error) {
    console.log(error)
    return null;
  }
}

const  getAllSongsDB = async () => {
  await dbConnect();
  try {
    const songs = await Songs.find().sort({ name: "asc" });
    return { songs: JSON.parse(JSON.stringify(songs)) };
  } catch (error) {
    console.log("Error: ", error.message);
    return { songs: [], category: null };
  }
}

export {  getAllProductsDB, getOneProductDB, getAllSongsDB };
