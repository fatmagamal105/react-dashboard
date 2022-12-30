import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FormLabel';
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';
import { getProducts, update } from '../api';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

 export default function UpdateProduct(){
    const {productId} = useParams();
    const [product, setProduct] = useState({})

    useEffect( () => {
        fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.json())
        .then( (data) => {
            console.log("data => ", data);
            setProduct(data)
        });
    },[]);

    
  const submitHandler = (e) => {
    e.preventDefault();

    const body = {
      title: getProducts.title,
      price: getProducts.price,
      description: getProducts.description
    };
    console.log(body);

    // update(body,product.id).then((res) => {
    //   console.log(res);
    //   if (res.id) {
    //     navigate("/admin/products");
    //   }
    // });
  };


    return(

        
        <Form className="mt-3" onSubmit={(e) => submitHandler(e)} >       
        <h2>product Id - {productId}</h2>
            <Form.Group className="mb-3">
                <Form.Label >Title</Form.Label>
                <Form.Control   value={product.title} onChange={(e) =>setProduct(e.target.value) }/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label >Price</Form.Label>
                <Form.Control   value={product.price} onChange={(e) =>setProduct(e.target.value) }/>
            </Form.Group>
            <FloatingLabel  label="Comments">
                <Form.Label>Description</Form.Label>
                <Form.Control
                onChange={(e) =>setProduct(e.target.value) }
                    as="textarea"
                    placeholder="Leave a description here"
                    style={{ height: '100px', width:'1022px' }}
                    value={product.description}
                />
            </FloatingLabel>
            
            <div className='d-flex justify-content-end'>
                <Button variant="primary" className=' mt-3' onClick={() => update(product, productId)}>Update</Button>
            </div>
        </Form>
    )
}