import { http } from "../http/http";

const url = process.env.REACT_APP_URL;

export const ProductsRepository = {
  getProducts: async () => {
    try {
      return await http
        .get(`${url}/search.php?f=a`)
        .then((res) => {
          return res;
        })
        .catch((ex) => {
          return {};
        });
    } catch (err) {
      throw Error("Error al obtener getProducts");
    }
  },
  searchProducts: async (world) => {
    try {
      return await http
        .get(`${url}/search.php?s=${world}`)
        .then((res) => {
          return res;
        })
        .catch((ex) => {
          return {};
        });
    } catch (err) {
      throw Error("Error al obtener searchProducts");
    }
  },
};
