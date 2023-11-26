import React from "react";
import "./Contacto.scss";

const Contacto = () => {
  return (
    <>
      <h1 className="contacto-titulo">Contacto:</h1>

      <section className="contacto-section">
        <fieldset className="fieldset1">
          <form action="#">
            <label htmlFor="nombre">Nombre:*</label>
            <br />
            <input
              className="largo-input"
              type="text"
              id="nombre"
              name="nombre1"
              placeholder=""
              required
            />
            <br />

            <label htmlFor="apellido">Apellido:*</label>
            <br />
            <input
              className="largo-input"
              type="text"
              id="apellido"
              name="apellido1"
              placeholder=""
              required
            />
            <br />

            <label htmlFor="telefono">Teléfono</label>
            <br />
            <input
              className="largo-input input-right"
              type="tel"
              id="telefono"
              name="telefono1"
              placeholder="Código de área y número"
            />
            <br />

            <label htmlFor="correo">Dirección de correo electrónico:*</label>
            <br />
            <input
              className="largo-input input-right"
              type="email"
              id="email"
              name="email1"
              placeholder="Ej: mail@gmail.com"
              required
            />
            <br />

            <label htmlFor="nacionalidad">Motivo:*</label>
            <br />
            <select
              className="largo-select"
              type="text"
              name="nacionalidad1"
              id="nacionalidad"
              required
            >
              <option value="" disabled selected hidden>
                - Seleccionar -
              </option>
              <option value="value1">Ventas</option>
              <option value="value2">Facturación</option>
              <option value="value3">Devoluciones</option>
              <option value="value4">Otros</option>
            </select>
            <br />

            <label htmlFor="mensaje">Escriba su mensaje:*</label>
            <br />
            <textarea
              className="largo-input input-textarea"
              id="mensaje"
              name="mensaje"
              required
            ></textarea>
            <br />

            <button type="submit">Enviar</button>
          </form>
        </fieldset>

        <fieldset className="fieldset-ubicacion">
          <h2 className="contacto-h2">Ubicación:</h2>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26269.01783054588!2d-58.37286840385981!3d-34.61358659909641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d9c2d70389%3A0xe7b5e9ee316678f!2sPuerto%20Madero%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1700968913818!5m2!1ses-419!2sar"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </fieldset>
      </section>
    </>
  );
};

export default Contacto;
