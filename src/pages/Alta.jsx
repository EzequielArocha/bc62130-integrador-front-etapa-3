import { useState } from "react";
import "./Alta.scss";
import Tabla from "../components/Tabla";
import Formulario from "../components/Formulario";

const Alta = () => {
  const [productoAEditar, setProductoAEditar] = useState(null);
  return (
    <>
      <h1>Formulario de alta de productos</h1>

      <Formulario
        productoAEditar={productoAEditar}
        setProductoAEditar={setProductoAEditar}
      />

      <hr />
      <Tabla setProductoAEditar={setProductoAEditar} />
    </>
  );
};

export default Alta;
