import { useContext } from "react";
import Card from "../components/Card";
import "./Inicio.scss";
import ProductoContext from "../contexts/ProductoContext";

const Inicio = () => {
  const { productos } = useContext(ProductoContext);
  return (
    <main>
      <section className="section-cards">
        <header className="section-cards__header">
          <h1 class="fa-solid fa-cart-shopping"> BUYTECH</h1>
          <p>Tecnología para el Hogar</p>
        </header>

        <div className="cards-container">
          {productos &&
            productos.map((producto, idx) => (
              <Card key={idx} producto={producto} />
            ))}
        </div>
        {/* <!-- .cards-container --> */}
      </section>
      {/*  <!-- .section-cards --> */}
    </main>
  );
};

export default Inicio;
