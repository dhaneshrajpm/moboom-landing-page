import axios from 'axios';

export const doGet = async (url, payload = {}) => {
  return await axios.get(url, payload);
};

/*
"item": [
    {
      "name": "get products",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "https://dummyjson.com/products",
          "protocol": "https",
          "host": [
            "dummyjson",
            "com"
          ],
          "path": [
            "products"
          ]
        }
      },
      "response": []
    },
    {
      "name": "search product",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "https://dummyjson.com/products/search?q=phone",
          "protocol": "https",
          "host": [
            "dummyjson",
            "com"
          ],
          "path": [
            "products",
            "search"
          ],
          "query": [
            {
              "key": "q",
              "value": "phone"
            }
          ]
        }
      },
      "response": []
    },
    {
      "name": "product category",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "https://dummyjson.com/products/categories",
          "protocol": "https",
          "host": [
            "dummyjson",
            "com"
          ],
          "path": [
            "products",
            "categories"
          ]
        }
      },
      "response": []
    },
    {
      "name": "category search",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "https://dummyjson.com/products/category/smartphones",
          "protocol": "https",
          "host": [
            "dummyjson",
            "com"
          ],
          "path": [
            "products",
            "category",
            "smartphones"
          ]
        }
      },
      "response": []
    }
  ] 
*/