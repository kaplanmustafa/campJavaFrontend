import axios from "axios";

export default class productService {
  getProducts() {
    return axios.get("/api/products/getAll");
  }
}
