import axios from "axios";

export default class productService {
  getProducts() {
    return axios.get("/api/products/getAll");
  }

  getById(id) {
    return axios.get(`/api/products/getById?productId=${id}`);
  }

  getProductByName(productName) {
    return axios.get(
      `/api/products/getByProductName?productName=${productName}`
    );
  }
}
