import React, { useEffect, useState } from "react";

function LastProductInShop() {
  const [lastProduct, setLastProduct] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/products/all");
        const products = await res.json();
        console.log(products.data.pop());
        setLastProduct(products.data.pop());
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
          <h5 className="m-0 font-weight-bold text-gray-800">Último Producto Creado</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{width: 40 + "rem"}}
              src={`http://localhost:3001/images/products/${lastProduct.image}`}
              alt=" ultimo producto"
            />
          </div>
          <h3 className="m-0 font-weight-bold text-gray-800">{lastProduct.name}</h3>
          <p>
            {lastProduct.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LastProductInShop;
