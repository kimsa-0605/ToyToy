import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchById, fetchProducts } from '../../slice/productThunks.ts';
import { fetchAddToCart } from '../../../cart_items/slice/cartItemThunks.ts'
import { toast } from 'react-toastify';

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
  const [quantity, setQuantity] = useState(1);

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

  const pages = [
    { name: 'Home', url: '/' },
    { name: 'Catalog', url: '/catalog' },
    { name: product?.product_name || 'Product', url: `/product/detail/${product?.id || ''}` }
  ];

  const handleAddToCart = async () => {
  if (!product) return;
  try {
    await dispatch(fetchAddToCart({ product_id: product.id, quantity })).unwrap();
    toast.success('Added to cart successfully');
  } catch (err) {
    console.error('Failed to add to cart:', err);
    toast.error('Failed to add to cart');
  }
};

  return (
    <div className="container-product-detail">
      <BreadcrumbNav pages={pages} />

      <div className="product-detail-content">
        <div className="card-product-detail">
          <div className="card-product-detail-content">
            {loading || !product ? (
              <div className="loading-placeholder">
                <p style={{ gridColumn: "1/-1", textAlign: "center" }}>Loading...</p>
              </div>
            ) : (
              <>
                <div className="product-info">
                  <h2>{product.product_name}</h2>
                  <p className="stock">Quantity: {product.quantity}</p>
                  <p className="price">${product.price} USD</p>
                  <div className="quantity-selector">
                    <div className="quantity-group">
                      <input
                        type="number"
                        value={quantity}
                        min={1}
                        max={product.quantity}
                        className="form-control"
                        onChange={(e) => setQuantity(Number(e.target.value))}
                      />
                    </div>
                    <button className="add-to-cart" onClick={handleAddToCart}>
                      Add to cart
                    </button>
                  </div>
                </div>
                <div className="image-product">
                  <img src={product.image_link} alt={product.product_name} className="product-img" />
                </div>
              </>
            )}
          </div>

          <div className="detail-content">
            <h3>Product description</h3>
            <div className="toys-line-header">
              <div className="toys-line-header-color"></div>
            </div>
            <p>{loading || !product ? 'Loading description...' : product.description}</p>
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
              {loading ? (
                <p>Loading related products...</p>
              ) : relatedProducts.length > 0 ? (
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