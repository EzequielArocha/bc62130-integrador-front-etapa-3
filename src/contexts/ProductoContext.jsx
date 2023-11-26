import { createContext, useEffect, useState } from "react";
import { del, get, post, put } from "../utils/http";

const ProductoContext = createContext();

const url = "https://ezequiel-etapa-3.onrender.com/api/productos";

const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const products = await get(url);
      setProductos(products);
    } catch (error) {
      console.error(`ERROR obtenerProductos: ${error}`);
    }
  };

  const crearProductoContext = async (productoNuevo) => {
    try {
      const productoBackNuevo = await post(url, productoNuevo);

      setProductos([...productos, productoBackNuevo]);
    } catch (error) {
      console.error("Falló crearProductoContext", error);
    }
  };

  const actualizarProductoContext = async (productoEditar) => {
    try {
      const productoEditado = await put(
        url,
        productoEditar._id,
        productoEditar
      );
      console.log(productoEditado);

      const nuevaDB = productos.map((producto) =>
        producto._id === productoEditar._id ? productoEditar : producto
      );
      console.log(nuevaDB);
      setProductos(nuevaDB);
    } catch (error) {
      console.log("ERROR en actualizarProductoContext", error);
    }
  };

  const eliminarProductoContext = async (id) => {
    try {
      const productoEliminado = await del(url, id);
      console.log(productoEliminado); // {}
      const nuevaDB = productos.filter((producto) => producto._id !== id);
      setProductos(nuevaDB);
    } catch (error) {
      console.log("Todo salió mal en el eliminarProductoContext", error);
    }
  };

  const data = {
    productos,
    crearProductoContext,
    eliminarProductoContext,
    actualizarProductoContext,
  };

  return (
    <ProductoContext.Provider value={data}>{children}</ProductoContext.Provider>
  );
};

export { ProductoProvider };

export default ProductoContext;
