import { doGet } from "../services/http";
import { CATEGORY_SEARCH_URL, GET_PRODUCTS_URL, PRODUCT_CATEGORY_URL, SEARCH_PRODUCT_URL } from "./urls";

export const fetchProductsApi = (skip = 0) => doGet(GET_PRODUCTS_URL.replace('<skip>', skip));
export const searchProductApi = (text) => doGet(SEARCH_PRODUCT_URL.replace('<value>', text));
export const fetchCategoriesApi = () => doGet(PRODUCT_CATEGORY_URL);
export const searchByCategoryApi = (category) => doGet(CATEGORY_SEARCH_URL.replace('<category>', category));