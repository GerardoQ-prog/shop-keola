export const addPricetoProducts = (products) => {
  const newProducts = products.drinks.map((item) => {
    return {
      ...item,
      price: Math.floor(Math.random() * (100 - 10) + 10),
    };
  });
  return newProducts;
};

export const addProductCart = (queryClient, product) => {
  const products = queryClient.getQueryData("cart");

  const isExist = products.some((item) => item.idDrink === product.idDrink);

  if (isExist) {
    alert("Producto ya existe en el carrito");
  } else {
    queryClient.setQueryData("cart", (old) => [...old, product]);
    console.log("Producto agregado");
  }

  return isExist;
};

export const priceTotalProducts = (products) => {
  const total = products.reduce((acc, item) => acc + item.price, 0);
  return total;
};
