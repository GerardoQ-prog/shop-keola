import React from "react";
import { addPricetoProducts } from "../../domain/services/Products.services";
import { Wrapper, WrapperProducts } from "../components/containers/Wrapper";
import Product from "../components/elements/Product";
import usePosts from "../hooks/useProducts";

const Home = () => {
  const { data: dataProducts, error, isLoading } = usePosts();

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    if (!isLoading && !error) {
      setProducts(addPricetoProducts(dataProducts));
    }
  }, [isLoading]);

  return (
    <Wrapper>
      {isLoading && <h1>Cargando...</h1>}
      {error && <h1>Error al obtener productos...</h1>}
      <WrapperProducts>
        {products &&
          products.map((item, index) => {
            return <Product key={index} {...item} />;
          })}
      </WrapperProducts>
    </Wrapper>
  );
};

export default Home;
