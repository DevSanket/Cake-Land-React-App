import React, { useEffect, useState } from 'react';
import { db } from '../firebase.utils';

const ProductDelete = () => {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        db.collection('collections').onSnapshot(snapshot => {
            setProducts(snapshot.docs.map(
                doc => (
                    {id:doc.id,
                    title:doc.data().title,
                    items:doc.data().items})))
        })
    },[])

    console.log(products);


    return ( 
        <div className="product_delete">
            <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    
     
      {
          products.map(product => {
             return product.items.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td><button className="btn btn-danger"
                    >Delete</button></td>
                 </tr>
              ))
          })
      }
    
  </tbody>
</table>
        </div>
     );
}
 
export default ProductDelete;