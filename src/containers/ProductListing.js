import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productAction';

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/`)
        .catch((error)=>{
            console.log("Err",error);
        });
        dispatch(setProducts(response.data));
    }

    useEffect(()=>{
        fetchProducts();
    },[]);
    console.log("products",products);
    return (
        <div className = "ui grid container" style={{paddingTop:"70px"}}>
            <ProductComponent />
        </div>
    );
};

export default ProductListing;