import React, { useEffect, useState } from 'react';

import ProductsList from './ProductsList';




function ProductsRowList (){
    const [listProduct, setListProduct] = useState(0); 
useEffect(()=>{
    const fetchData = async () => {
        try {
          const reslist = await fetch("http://localhost:3001/api/products/all");
          const products = await reslist.json();
          console.log(products.data.data);
          setListProduct(products.data.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
},[]);
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>En Oferta</th>
                                <th>Categoria</th>
                                <th>presentación</th>
                                <th>stock</th>
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
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            listProduct.map( ( row , i) => {
                                return <ProductsList { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default ProductsRowList;