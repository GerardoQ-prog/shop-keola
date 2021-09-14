import { useQuery } from "react-query";
import { ProductsRepository } from "../repositories/Products.repository";

const usePosts = () => {
  return useQuery("products", async () => {
    const response = await ProductsRepository.getProducts();
    return response;
  });
};

export default usePosts;
