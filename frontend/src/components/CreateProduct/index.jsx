import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./styles.css";

function CreateProduct() {
  const location = useLocation();
  const history = useHistory();

  const [form, setForm] = useState({
    name: null,
    precio: null,
    stock: null,
    on_sale: null,
    presentacion: null,
    image: null,
  });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (location?.state?.product) {
      setForm({ ...location.state.product });
      setIsEdit(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "http://localhost:3001/api/products/" + (isEdit ? "edit" : "create"),
      {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());

    if (!res.error) history.push("/ProductsRowList");
  };

  return (
    <div className="container">
      <div className="h1">
        <h1>Formulario de {isEdit ? "Edicion" : "Creación"} de Productos</h1>
      </div>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              onChange={handleChange}
              defaultValue={form.name}
              className="form-input"
              type="text"
              minLength={4}
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Precio:</label>
            <input
              onChange={handleChange}
              defaultValue={form.price}
              className="form-input"
              type="number"
              min="0"
              id="precio"
              name="price"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="stock">Stock:</label>
            <input
              onChange={handleChange}
              defaultValue={form.stock}
              className="form-input"
              type="number"
              min="0"
              id="stock"
              name="stock"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="on_sale">¿Producto en oferta?</label>
            <select
              onChange={handleChange}
              value={form.on_sale}
              className="form-select"
              id="on_sale"
              name="on_sale"
              required
            >
              <option value="">Selecionar</option>
              <option value={0}>no</option>
              <option value={1}>yes</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="presentacion">Presentación:</label>
            <select
              onChange={handleChange}
              value={form.presentation}
              className="form-select"
              id="presentacion"
              name="presentation"
              required
            >
              <option value="">Selecionar</option>
              <option value="150gr">150gr</option>
              <option value="250gr">250gr</option>
              <option value="500gr">500gr</option>
              <option value="1kg">1kg</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="categorias">Categorias:</label>
            <select
              onChange={handleChange}
              value={form.category_id}
              className="form-select"
              id="categorias"
              name="category_id"
              required
            >
              <option value="">Selecionar</option>
              <option value={1}>Frutas</option>
              <option value={2}>Verduras</option>
              <option value={3}>Canasta</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripcion</label>
            <textarea
              id="descripcion"
              onChange={handleChange}
              defaultValue={form.description}
              className="form-input"
              minLength={20}
              name="description"
              rows={5}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="fotoDelProducto">Foto del Producto</label>
            <input
              id="fotoDelProducto"
              onChange={handleChange}
              className="form-input"
              type="file"
              name="image"
              required
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange}
              className="form-submit"
              type="submit"
              value="Guardar"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
