import React from 'react';
import LastProductInShop from './LastProductInShop';
import CategoriesInShop from './CategoriesInShop';

function ContentRowCenter(){
    return (
        <div className="row">
            
           
            <LastProductInShop />
          
            <CategoriesInShop />

        </div>
    )
}

export default ContentRowCenter;