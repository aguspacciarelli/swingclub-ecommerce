// import mongoose, { Schema } from "mongoose";

// const productSchema = new Schema({
//   name: { type: String, required: true },
// });

// const Product =
//   mongoose.models.Product || mongoose.model("Product", productSchema);
// export default Product;

import mongoose, { Schema } from "mongoose";

// Función para conectarse a MongoDB con async/await
const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 0) { // Verifica si no hay conexión activa
    await mongoose.connect("mongodb://localhost:27017/miBaseDeDatos", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
};

// Definición del esquema del producto
const productSchema = new Schema({
  name: { type: String, required: true },
});

// Función asíncrona para obtener o definir el modelo Product
const getProductModel = async () => {
  await connectToDatabase(); // Espera a que se realice la conexión
  const Product =
    mongoose.models.Product || mongoose.model("Product", productSchema);
  return Product;
};

export default getProductModel;
  