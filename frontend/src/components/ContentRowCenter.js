import React from "react";
import LastProductInShop from "./LastProductInShop";
import CategoriesInShop from "./CategoriesInShop";
import TopOnSales from "./TopOnSales";
import LastFiveUsers from "./LastFiveUsers";

function ContentRowCenter() {
  return (
    <div className="row">
      <LastProductInShop />

      <CategoriesInShop />

      <TopOnSales />

      <LastFiveUsers />
    </div>
  );
}

export default ContentRowCenter;
