import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const productsApi = new WooCommerceRestApi({
  url: "http://demo01-woo.local.vn",
  consumerKey: "ck_7bc012799383f88accba04f60911c7be37610d50",
  consumerSecret: "cs_5b53bfb771778614575b53ce0c072c5e1e03faaa",
  version: "wc/v3",
  queryStringAuth: true,
  axiosConfig: {
    headers: {},
  },
});
