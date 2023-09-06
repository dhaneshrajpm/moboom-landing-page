import { doGet } from "../services/http";
import { GET_PRODUCTS_URL } from "./urls";

export const fetchProductsApi = () => doGet(GET_PRODUCTS_URL);