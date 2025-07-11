import './style.css';
import ButtomInverse from "../../components/ButtonInverse";
import ButtomPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";

export default function ProductDetails () {
    return (
        <>
              <HeaderClient />
              <main>
                <section id="product-details-section" className="dsc-container">
                  <ProductDetailsCard />
                  <div className="dsc-btn-page-container">
                    <ButtomPrimary />
                    <ButtomInverse />
                  </div>
                </section>
              </main>
            </>
    );
}