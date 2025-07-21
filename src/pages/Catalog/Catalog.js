import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchByCategory, fetchProducts } from "../../features/products/slice/productThunks.ts";

import BreadcrumbNav from "../../components/ui/BreadcrumbNav/BreadcrumbNav";
import SubscribeSection from "../../components/ui/SubscribeSection/SubscribeSection";
import InstagramSection from "../../components/ui/InstagramSection/InstagramSection";
import ProductCard from '../../features/products/components/ProductCard/ProductCard';

import './Catalog.css';

function Catalog() {
  const pages = [
    { name: "Home", url: "/" },
    { name: "Catalog", url: "/catalog" }
  ];

  const categoryMap = {
    "/catalog": "ALL",
    "/catalog/stuffed-animals": "STUFFED_ANIMALS",
    "/catalog/wooden-toys": "WOODEN_TOYS",
  };

  const categoryTitles = {
    ALL: "All Toys",
    STUFFED_ANIMALS: "Stuffed Animals",
    WOODEN_TOYS: "Wooden Toys",
  };

  const categoryLinks = [
    { to: "/catalog", label: "All Toys" },
    { to: "/catalog/wooden-toys", label: "Wooden Toys" },
    { to: "/catalog/stuffed-animals", label: "Stuffed Animals" },
  ];

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  
  const selectedCategory = categoryMap[pathname] || "ALL";

  const products = useSelector((state) => {
    if (selectedCategory === "ALL") {
      return state.products.products;
    } else {
      return state.products.productsByCategory[selectedCategory] || [];
    }
  });

  const loading = useSelector((state) => {
    if (selectedCategory === "ALL") return state.products.loadingAll;
    return state.products.loadingByCategory;
  });

  useEffect(() => {
    if (selectedCategory === "ALL") {
      if (!products || products.length === 0) {
        dispatch(fetchProducts());
      }
    } else {
      if (!products || products.length === 0) {
        dispatch(fetchByCategory(selectedCategory));
      }
    }
  }, [dispatch, selectedCategory, products]);

  const getActiveClass = (path) => {
    if (path === "/catalog") return pathname === "/catalog" ? "active" : "";
    return pathname.startsWith(path) ? "active" : "";
  };

  return (
    <div className="container">
      <div className="container-content">
        <BreadcrumbNav pages={pages} />
        <div className="product-section-container">
          <div className="product-section-content">
            <div className="all-toys">
              <div className="all-toys-header">
                <div className="all-toys-header-content">
                  <span className="section-title">
                    {categoryTitles[selectedCategory] || ""}
                  </span>
                  <span className="categories-toys">
                    {categoryLinks.map(({ to, label }) => (
                      <Link
                        key={to}
                        to={to}
                        className={`category-link ${getActiveClass(to)}`}
                      >
                        {label}
                      </Link>
                    ))}
                  </span>
                </div>
                <div className="toys-line-header-catalog">
                  <div className="toys-line-header-color" />
                </div>
              </div>

              <div className="product-list">
                {loading ? (
                  <p style={{ gridColumn: "1/-1", textAlign: "center" }}>Loading...</p>
                ) : (
                  products.map((product) => (
                    <Link
                      to={`/product/${product.id}`}
                      key={product.id}
                      className="product-card-link"
                    >
                      <ProductCard
                        imgSrc={product.image_link}
                        altText={product.product_name}
                        title={product.product_name}
                        price={`$${product.price}.00 USD`}
                      />
                    </Link>
                  ))
                )}
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
