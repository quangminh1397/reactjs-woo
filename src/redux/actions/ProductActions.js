import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/ProductConstants";

// PRODUCT LIST
const api = new WooCommerceRestApi({
  url: "http://demo01-woo.local.vn",
  consumerKey: "ck_7bc012799383f88accba04f60911c7be37610d50",
  consumerSecret: "cs_5b53bfb771778614575b53ce0c072c5e1e03faaa",
  version: "wc/v3",
  queryStringAuth: true,
  axiosConfig: {
    headers: {},
  },
});

export const listProduct = () =>  (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } =  api.get("products", {
      per_page: 20,
    });
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
