import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductsList from "./ProductsList";
import "./CreateProduct/styles.css";

function ProductsRowList() {
  const [listProduct, setListProduct] = useState(0);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const fetchData = async () => {
      try {
        const reslist = await fetch("http://localhost:3001/api/products/all");
        const products = await reslist.json();
        console.log(products.data.data);
        setListProduct(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  const handleDelete = async (id) => {
    const res = await fetch("http://localhost:3001/api/products/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());

    if (!res.error) {
      getProducts();
    }
  };

  return (
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      <div className="container-actions">
        <Link to="/CreateProduct" className="btn-table btn-edit">
          Crear producto
        </Link>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>En Oferta</th>
                <th>Categoria</th>
                <th>presentación</th>
                <th>stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>En Oferta</th>
                <th>Categoria</th>
                <th>presentación</th>
                <th>stock</th>
                <th>Acciones</th>
              </tr>
            </tfoot>
            <tbody>
              {listProduct &&
                listProduct.data.map((list, i) => (
                  <ProductsList
                    {...list}
                    product={list}
                    handleDelete={handleDelete}
                    key={i}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductsRowList;
