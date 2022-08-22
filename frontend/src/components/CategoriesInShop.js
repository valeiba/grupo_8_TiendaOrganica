import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const CategoriesInShop = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/categories/all");
        const data = await res.json();
        setCategories(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Categorías En Tienda</h5>
        </div>
        <div className="card-body">
          <div className="row">
            {categories.map((category, i) => (
              <div key={i} className="col-lg-6 mb-4">
                <Link to="/" className="card bg-dark text-white shadow">
                  <div className="card-body">{category.name}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesInShop;
