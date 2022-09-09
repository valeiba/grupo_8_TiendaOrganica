import React from "react";
import NotFound from "./NotFound";
import image from "../assets/images/logo.png";
import ContentWrapper from "./ContentWrapper";
import CategoriesInShop from "./CategoriesInShop";
import LastProductInShop from "./LastProductInShop";
import ProductsRowList from "./ProductsRowList";
import CreateProduct from "./CreateProduct";
import { Link, Route, Switch } from "react-router-dom";

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <br></br>
        {/*<!-- Sidebar - Brand -->*/}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={image} alt="Tienda Organica" />
          </div>
        </a>
        <br></br>
        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - Tienda Organica</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Menu</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/CategoriesInShop">
            <i className="fas fa-fw fa-folder"></i>
            <span>Categorias</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/LastProductInShop">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Ultimo Producto Creado</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/ProductsRowList">
            <i className="fas fa-fw fa-table"></i>
            <span>Listado De Productos</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}

      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route path="/CreateProduct">
          <CreateProduct />
        </Route>
        <Route path="/CategoriesInShop">
          <CategoriesInShop />
        </Route>
        <Route path="/LastProductInShop">
          <LastProductInShop />
        </Route>
        <Route path="/ProductsRowList">
          <ProductsRowList />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default SideBar;
