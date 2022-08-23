import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TopOnSales() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://localhost:3001/api/products/topFiveProducts"
        );
        const data = await res.json();
        setProducts(data.data);
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
          <h5 className="m-0 font-weight-bold text-gray-800">
            Top 5 productos vendidos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {products.map((product, i) => (
              <div key={i} className="col-12 mb-4">
                <Link to="/" className="card bg-dark text-white shadow">
                  <div className="card-body">{product.name}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopOnSales;
