import "./style.css";
import ButtomInverse from "../../components/ButtonInverse";
import ButtomPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import type { ProductDTO } from "../../models/product";

/*Informação do back end */

const product: ProductDTO = {
  id: 2,
  name: "Smart Tv",
  description: "Esta TV é muito bonita",
  imgUrl:
    "https://github.com/devsuperior/dscatalog-resources/blob/master/backend/img/2-big.jpg?raw=true",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Eletrónicos"
    },
    {
      id: 3,
      name: "Computadores"
    },
    {
      id: 4,
      name: "Importados"
    },
  ],
};

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product} />
          <div className="dsc-btn-page-container">
            <ButtomPrimary />
            <ButtomInverse />
          </div>
        </section>
      </main>
    </>
  );
}
