import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchByCategory } from "../../features/products/slice/productThunks.ts";

import SubscribeSection from "../../components/ui/SubscribeSection/SubscribeSection";
import InstagramSection from "../../components/ui/InstagramSection/InstagramSection";
import VideoSection from "../../components/ui/VideoSection/VideoSection";
import EcommerceTemplate from "../../components/ui/EcommerceTemplate/EcommerceTemplate";

import Banner from "../../assets/images/banner.jpg";
import WoodenImg from "../../assets/images/wooden.png";
import StuffedImg from "../../assets/images/stuffed.png";

import ProductCard from "../../features/products/components/ProductCard/ProductCard";

import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  const [stuffedAnimals, setStuffedAnimals] = useState([]);
  const [woodenToys, setWoodenToys] = useState([]);

  useEffect(() => {
    dispatch(fetchByCategory("STUFFED_ANIMALS"))
    .unwrap()
    .then((data) => {
      if (Array.isArray(data)) {
        setStuffedAnimals(data.slice(0, 4));
      } else {
        console.error("Data is not array:", data);
      }
    });

    dispatch(fetchByCategory("WOODEN_TOYS"))
    .unwrap()
    .then((data) => {
      if (Array.isArray(data)) {
        setWoodenToys(data.slice(0, 4));
      } else {
        console.error("Data is not array:", data);
      }
    });
  }, [dispatch]);

  return (
    <div className="container">
      <div className="container-content">
        <div className="banner-container">
          <div
            className="banner-content"
            style={{ backgroundImage: `url(${Banner})` }}
          >
            <div className="banner-blog" data-aos="zoom-in" data-aos-duration="1000">
              <div className="banner-blog-content">
                <div className="banner-title">Say Hello to ToyToy!</div>
                <h1 className="banner-h1-title">
                  Joy in Every Toy<br />
                  Playtime Done Right
                </h1>
                <Link to="/catalog" className="button w-button">Open Catalog</Link>
              </div>
            </div>
            <a href="#toy-category-container" className="banner-case-mouse">
              <div className="banner-mouse-button">
                <div className="point-in-mouse"></div>
              </div>
            </a>
          </div>
        </div>

        <div id="toy-category-container" className="toy-category-container">
          <div className="toy-category-content">
            <div className="category-stuffed-animals" data-aos="zoom-in" data-aos-duration="1000">
              <img src={StuffedImg} alt="Stuffed Animals" />
              <div className="category-blog">
                <h3 className="category-title">Stuffed Animals</h3>
                <Link to="/catalog" className="category-shop-now-btn">Shop now</Link>
              </div>
            </div>
            <div className="category-wooden-toys" data-aos="zoom-in" data-aos-duration="1000">
              <div className="category-blog">
                <h3 className="category-title">Wooden Toys</h3>
                <Link to="/catalog" className="category-shop-now-btn">Shop now</Link>
              </div>
              <img src={WoodenImg} alt="Wooden Toys" />
            </div>
          </div>
        </div>

        <div className="product-section-home-container">
          <div className="product-section-content">
            <div className="stuffed-animal-toys">
              <div className="stuffed-animal-toys-header">
                <div className="stuffed-animal-toys-header-content">
                  <span className="section-title-home">Stuffed Animals</span>
                  <Link to="/catalog" className="see-all-toys">
                    <span className="see-all-toys-title">See All Toys</span>
                    <i className="fa-solid fa-right-long"></i>
                  </Link>
                </div>
                <div className="toys-line-header">
                  <div className="toys-line-header-color-home"></div>
                </div>
              </div>
              <div className="product-list-home">
                {stuffedAnimals.map(product => (
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

            <div className="wood-crafted-toys">
              <div className="wood-crafted-toys-header">
                <div className="wood-crafted-toys-header-content">
                  <span className="section-title-home">Wooden Toys</span>
                  <Link to="/catalog" className="see-all-toys">
                    <span className="see-all-toys-title">See All Toys</span>
                    <i className="fa-solid fa-right-long"></i>
                  </Link>
                </div>
                <div className="toys-line-header">
                  <div className="toys-line-header-color-home"></div>
                </div>
              </div>
              <div className="product-list-home">
                {woodenToys.map(product => (
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

        <VideoSection />
        <EcommerceTemplate 
          title="Children's happiness" 
          textBtn="Let's Explore" 
          link={'/catalog'} 
          imagelink={'https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg'} 
          paragraph={<>The happiness of children is our greatest honor. We take pride in offering adorable, safe, and high-quality toys that not only support children's all-round development but also bring peace of mind and joy to parents. Because when a child smiles, the whole family is happy.</>} 
        />
        <SubscribeSection />
        <InstagramSection />
      </div>
    </div>
  );
};

export default Home;
