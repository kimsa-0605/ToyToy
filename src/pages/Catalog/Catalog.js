import React, { useEffect, useState } from "react";
import BreadcrumbNav from "../../components/ui/BreadcrumbNav/BreadcrumbNav";
import SubscribeSection from "../../components/ui/SubscribeSection/SubscribeSection";
import InstagramSection from "../../components/ui/InstagramSection/InstagramSection";
import ProductCard from '../../features/products/components/ProductCard/ProductCard';
import { Link } from "react-router-dom";
import './Catalog.css';

function Catalog() {
  const pages = [
    { name: "Home", url: "/" },
    { name: "Catalog", url: "/catalog" },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://68395bb46561b8d882b012b7.mockapi.io/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <div className="container-content">
        <BreadcrumbNav pages={pages} />
        <div className="product-section-container">
          <div className="product-section-content">
            <div className="all-toys">
              <div className="all-toys-header">
                <div className="all-toys-header-content">
                  <span className="section-title">All Toys</span>
                  <span className="categories-toys">
                    <a href="#" className="categories-toys-all-toys">
                      All Toys
                    </a>
                    <a href="#" className="categories-toys-wooden-toys">
                      Wooden Toys
                    </a>
                    <a href="#" className="categories-toys-stuffed-toys">
                      Stuffed Toys
                    </a>
                  </span>
                </div>
                <div className="toys-line-header-catalog">
                  <div className="toys-line-header-color" />
                </div>
              </div>
              <div className="product-list">
                {products.map((product) => (
                  <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
                    <ProductCard
                      imgSrc={product.image_link}
                      altText={product.product_name}
                      title={product.product_name}
                      price={`$${product.price}.00 USD`}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <SubscribeSection />
        <InstagramSection />
      </div>
    </div>
  );
}

export default Catalog;
