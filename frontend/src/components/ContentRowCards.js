import React, {useEffect, useState} from "react";
import SmallCard from "./SmallCard";

const ContentRowCards = () => {
  const [productsTotal, setProductsTotal] = useState(0);
  const [usersTotal, setUsersTotal] = useState(0);
  const [categoriesTotal, setCategoriesTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resProducts = await fetch("http://localhost:3001/api/products/all");
        const resUsers = await fetch("http://localhost:3001/api/users");
        const resCategories = await fetch("http://localhost:3001/api/categories/all");
        const dataProducts = await resProducts.json();
        const dataUsers = await resUsers.json();
        const dataCategories = await resCategories.json();
        console.log(dataProducts);
        console.log(dataProducts.data);
        console.log(dataProducts.data.slice(-5));
        console.log(dataProducts.data.pop());
        setProductsTotal(dataProducts.meta.total);
        setUsersTotal(dataUsers.data.count);
        setCategoriesTotal(dataCategories.meta.total);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="d-sm-flex">
      <SmallCard quantity={productsTotal} title="Total de productos" />
      <SmallCard quantity={usersTotal} title="Total de usuarios" color="primary" />
      <SmallCard quantity={categoriesTotal} title="Total de categorías" color="warning" />
    </div>
  );
};

export default ContentRowCards;
