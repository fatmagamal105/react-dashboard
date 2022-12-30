import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../api";
import { deleteProduct } from "../api";

export default function ListProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts(100).then(({ products }) => {
      setProducts(products);
    });
  }, []);
  return (
    <>
    <Link to={'/admin/add-product'} className="btn btn-success bg-lg my-3">Add Product</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}$</td>
              <td>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  {/* <button type="button" className="btn btn-warning" to={'/admin/update-product'}>
                    Edit
                  </button> */}
                  <Link to={`/admin/update-product/${product.id}`} className="btn btn-warn">Edit</Link>
                  <button type="button" className="btn btn-danger" onClick={() => deleteProduct(product.id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
