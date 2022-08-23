import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";

const ContentRowCards = () => {
  // const [productsTotal, setProductsTotal] = useState(0);
  // const [usersTotal, setUsersTotal] = useState(0);
  // const [categoriesTotal, setCategoriesTotal] = useState(0);
  const [dataCards, setDataCards] = useState({
    productsTotal: 0,
    usersTotal: 0,
    categoriesTotal: 0,
    productsOnSale: 0,
  });

  useEffect(() => {
    const fetchData = () => {
      try {
        const resProducts = fetch("http://localhost:3001/api/products/all");
        const resUsers = fetch("http://localhost:3001/api/users");
        const resCategories = fetch("http://localhost:3001/api/categories/all");
        const resProductsOnSale = fetch(
          "http://localhost:3001/api/products/onSales"
        );

        Promise.all([resProducts, resUsers, resCategories, resProductsOnSale])
          .then(
            async ([dataProducts, dataUsers, dataCategories, dataOnSales]) => {
              let products = await dataProducts.json();
              let users = await dataUsers.json();
              let categories = await dataCategories.json();
              let onSales = await dataOnSales.json();

              return [products, users, categories, onSales];
            }
          )
          .then(([dataProducts, dataUsers, dataCategories, dataOnSale]) => {
            setDataCards({
              productsTotal: dataProducts.meta.total,
              usersTotal: dataUsers.data.count,
              categoriesTotal: dataCategories.meta.total,
              productsOnSale: dataOnSale.data.totalOnSale,
            });
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="d-sm-flex">
      <SmallCard
        quantity={dataCards.productsTotal}
        title="Total de productos"
      />
      <SmallCard
        quantity={dataCards.usersTotal}
        title="Total de usuarios"
        color="primary"
      />
      <SmallCard
        quantity={dataCards.categoriesTotal}
        title="Total de categorías"
        color="warning"
      />
      <SmallCard
        quantity={dataCards.productsOnSale}
        title="Total vendidos"
        color="danger"
      />
    </div>
  );
};

export default ContentRowCards;
