import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../redux/actions/ProductActions";


export default function AllProducts() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
 
  console.log("products", products);
  return (
    <>
      <section className="products">
        <div className="inner">
          {loading ? (
            <div className="mb-5">loading ...</div>
          ) : error ? (
            <p>error ....</p>
          ) : (
            <ul className="products_list">
              {products.map((product) => {
                return (
                  <li key={product.id} className="products_item">
                   <Link to={`/products/${product.slug}`}>
                      <figure className="products_img">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/product_dummy.png"
                          }
                          alt=""
                        />
                      </figure>
                      <div className="products_card">
                        <p className="card_ttl">{product.name}</p>
                        <p className="price">test test test</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}

          {/* <ul className="products_list">
            {listProducts.map((product) => {
              return (
                <li key={product.id} className="products_item">
                  <a href="/test/">
                    <figure className="products_img">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/product_dummy.png"
                        }
                        alt=""
                      />
                    </figure>
                    <div className="products_card">
                      <p className="card_ttl">{product.name}</p>
                      <p className="price">test test test</p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul> */}
        </div>
      </section>
    </>
  );
}
