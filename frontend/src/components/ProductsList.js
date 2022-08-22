import React from 'react';


function ProductsList(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td>{props.on_sale}</td>
                    <td>{props.category_id} </td>
                    <td>{props.presentation}</td>
                    <td>{props.stock}</td>
                </tr>
            )
    }
    
        

export default ProductsList;