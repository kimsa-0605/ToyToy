import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchById, fetchProducts } from '../../slice/productThunks.ts';

import BreadcrumbNav from '../../../../components/ui/BreadcrumbNav/BreadcrumbNav';
import SubscribeSection from '../../../../components/ui/SubscribeSection/SubscribeSection';
import ProductCard from '../ProductCard/ProductCard';

import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => (id ? state.products.byId[id] : null));
  const loading = useSelector((state) => state.products.loadingById);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        let productData = product;

        if (!productData) {
          const result = await dispatch(fetchById(Number(id))).unwrap();
          productData = result;
        }

        const allProducts = await dispatch(fetchProducts()).unwrap();
        if (Array.isArray(allProducts)) {
          const related = allProducts
            .filter(p => String(p.id) !== id && p.category_id === productData.category_id)
            .slice(0, 4);
          setRelatedProducts(related);
        }
      } catch (err) {
        console.error('Error:', err);
      }
    };

    fetchData();
  }, [dispatch, id, product]);

  if (loading || !product) return <p>Loading...</p>;

  const pages = [
    { name: 'Home', url: '/' },
    { name: 'Catalog', url: '/catalog' },
    { name: product.product_name || 'Product', url: `/product/detail/${product.id}` }
  ];

  return (
    <div className="container-product-detail">
      <BreadcrumbNav pages={pages} />
      <div className="product-detail-content">
        <div className="card-product-detail">
          <div className="card-product-detail-content">
            <div className="product-info">
              <h2>{product.product_name}</h2>
              <p className="stock">Quantity: {product.quantity}</p>
              <p className="price">${product.price} USD</p>
              <div className="quantity-selector">
                <div className="quantity-group">
                  <button className="btn btn-decrease">-</button>
                  <input type="text" defaultValue="1" className="form-control" />
                  <button className="btn btn-increase">+</button>
                </div>
                <button className="add-to-cart">Add to cart</button>
              </div>
            </div>
            <div className="image-product">
              <img src={product.image_link} alt={product.product_name} className="product-img" />
            </div>
          </div>
          <div className="detail-content">
            <h3>Product description</h3>
            <div className="toys-line-header">
              <div className="toys-line-header-color"></div>
            </div>
            <p>{product.description}</p>
          </div>
        </div>
      </div>

      <div className="product-section-container">
        <div className="product-section-content">
          <div className="related-products">
            <div className="related-products-header">
              <div className="related-products-header-content">
                <span className="section-title">Related products</span>
                <Link to="/catalog" className="see-all-toys">
                  <span className="see-all-toys-title">See All Toys</span>
                  <i className="fa-solid fa-right-long"></i>
                </Link>
              </div>
              <div className="toys-line-header">
                <div className="toys-line-header-color"></div>
              </div>
            </div>
            <div className="product-list-detail">
              {relatedProducts.length > 0 ? (
                relatedProducts.map((item) => (
                  <Link to={`/product/${item.id}`} key={item.id} className="product-card-link">
                    <ProductCard
                      imgSrc={item.image_link}
                      altText={item.product_name}
                      title={item.product_name}
                      price={`$${item.price}.00 USD`}
                    />
                  </Link>
                ))
              ) : (
                <p>No product found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <SubscribeSection />
    </div>
  );
}

export default ProductDetail;