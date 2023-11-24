import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { post } from "../utils/http";

const CarritoContext = createContext();

const url = "https://ezequiel-etapa-3.onrender.com/api/carritos/";

const CarritoProvider = ({ children }) => {
  const [
    guardarEnElCarrito,
    eliminarDelCarrito,
    limpiarCarrito,
    actualizarCarrito,
    carrito,
  ] = useLocalStorage("carrito", []);

  function elProductoEstaEnElCarrito(producto) {
    return carrito.filter((prod) => prod.id === producto.id).length;
  }

  function obtenerProductoDeCarrito(producto) {
    return carrito.find((prod) => prod.id === producto.id);
  }

  const agregarCarritoContext = (producto) => {
    if (!elProductoEstaEnElCarrito(producto)) {
      producto.cantidad = 1;
      guardarEnElCarrito(producto);
    } else {
      const productoDeCarrito = obtenerProductoDeCarrito(producto);
      productoDeCarrito.cantidad++;
      actualizarCarrito(carrito);
    }
  };

  const eliminarCarritoContext = (id) => {
    eliminarDelCarrito(id);
  };

  const guardarCarritoContext = async () => {
    try {
      const resultado = await post(url, carrito);

      limpiarCarrito();
    } catch (error) {
      console.error("Ocurrió un error en guardarCarritoContext()", error);
    }
  };

  const data = {
    carrito,
    agregarCarritoContext,
    eliminarCarritoContext,
    guardarCarritoContext,
  };

  return (
    <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
  );
};

export { CarritoProvider };
export default CarritoContext;
