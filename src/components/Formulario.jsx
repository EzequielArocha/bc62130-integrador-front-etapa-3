import { useContext, useEffect, useState } from "react";
import ProductoContext from "../contexts/ProductoContext";
import { useForm } from "../hooks/useForm";
import "./Formulario.scss";

const formInicial = {
  id: null,
  Nombre: "",
  Precio: "",
  Stock: "",
  Marca: "",
  Categoria: "",
  Detalles: "",
  Foto: "",
  Envío: false,
};

const Formulario = ({ productoAEditar, setProductoAEditar }) => {
  const [form, setForm, handleChange] = useForm(formInicial);
  const { crearProductoContext, actualizarProductoContext } =
    useContext(ProductoContext);

  useEffect(() => {
    productoAEditar ? setForm(productoAEditar) : setForm(formInicial);
  }, [productoAEditar, setProductoAEditar]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (form.id === null) {
        await crearProductoContext(form);
      } else {
        await actualizarProductoContext(form);
      }
      handleReset();
    } catch (error) {
      console.error("Ocurrio un error en el handleSubmit", error);
    }
  };

  const handleReset = () => {
    setForm(formInicial);
    setProductoAEditar(null);
  };
  return (
    <>
      <form className="form-alta" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="lbl-nombre">Nombre </label>
          <br />
          <input
            type="text"
            name="nombre"
            id="lbl-nombre"
            placeholder="Ingrese un nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-precio">Precio </label>
          <br />
          <input
            type="text"
            name="precio"
            id="lbl-precio"
            placeholder="Ingrese un precio"
            value={form.precio}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-stock">Stock </label>
          <br />
          <input
            type="text"
            name="stock"
            id="lbl-stock"
            placeholder="Ingrese un stock"
            value={form.stock}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-marca">Marca </label>
          <br />
          <input
            type="text"
            name="marca"
            id="lbl-marca"
            placeholder="Ingrese un marca"
            value={form.marca}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-categoria">Categoría </label>
          <br />
          <input
            type="text"
            name="categoria"
            id="lbl-categoria"
            placeholder="Ingrese un categoria"
            value={form.categoria}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-detalles">Detalles </label>
          <br />
          {
            <input
              type="text"
              name="detalles"
              id="lbl-detalles"
              placeholder="Ingrese un detalles"
              value={form.detalles}
              onChange={handleChange}
            />
          }
        </div>
        <div>
          <label htmlFor="lbl-foto">Foto </label>
          <br />
          <input
            type="text"
            name="foto"
            id="lbl-foto"
            placeholder="Ingrese un foto"
            value={form.foto}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-envio">Envío </label>
          <br />
          <input
            type="checkbox"
            name="envio"
            id="lbl-envio"
            placeholder="Ingrese un envio"
            checked={form.envio}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
        <button type="reset" onClick={handleReset}>
          Limpiar
        </button>
      </form>
    </>
  );
};

export default Formulario;
