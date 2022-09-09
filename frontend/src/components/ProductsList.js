import React from "react";
import { Link } from "react-router-dom";
import "./CreateProduct/styles.css";

function ProductsList(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>{props.on_sale}</td>
      <td>{props.category_id} </td>
      <td>{props.presentation}</td>
      <td>{props.stock}</td>
      <td>
        <Link
          to={{
            pathname: "/CreateProduct",
            state: {
              product: { ...props.product },
            },
          }}
          className="btn-table btn-edit"
        >
          editar
        </Link>
        <button
          onClick={() => props.handleDelete(props.product.id)}
          className="btn-table btn-delete"
        >
          eliminar
        </button>
      </td>
    </tr>
  );
}

export default ProductsList;
