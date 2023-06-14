import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listProduct } from "../../redux/actions/ProductActions";
// import { toast } from 'react-toastify';

export default function SingleProduct() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  const productSlug = useParams();
  const product = products.find((prod) => prod.slug === productSlug.slug);


  const items = useSelector((state) => state.cart);
  const addToCartHandler = () => {
    const existItem = items.cartItems.find((x) => x.slug === product.slug);
    console.log(items);
    const qty = existItem ? existItem.qty + 1 : 1;

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, qty } });
    // window.location.href = "/cart";
  };
  return (
    <div id="product_details" className="">
      <div className="wrapper">
        {product ? (
          <div className="product_cont">
            <div className="details_fr">
              <div className="box-left">
                <figure className="product_img">
                  <img
                    src={product.images[0].src}
                    alt={product.name}
                    width={400}
                    height={400}
                  />
                </figure>
              </div>
              <div className="box-right">
                <h3 className="c-ttl01">{product.name}</h3>
                <div className="p_meta">
                  <p className="c-txt01">Brand: {product.brand}</p>
                  <p className="c-txt01">
                    Status:
                    {product.countInStock > 0 ? "In stock" : "Unavailable"}
                  </p>
                  <p className="c-txt01">
                    {product.rating} of {product.numReviews} reviews
                  </p>
                </div>
                <p className="price">Price: ${product.price}</p>

                <button className="primary-button" onClick={addToCartHandler}>
                  Add to cart
                </button>
              </div>
            </div>
            <div className="product_info">
              <p className="c-txt02">Description: {product.description}</p>
              <p className="c-txt02">Category: {product.category}</p>
            </div>
          </div>
        ) : (
          <p>...loading</p>
        )}
      </div>
    </div>
  );
}
