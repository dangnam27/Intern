import { Input } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCart } from './redux/action/'

function Product() {
    const { id } = useParams()
   
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch(addCart(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            fetch(
                `https://raw.githubusercontent.com/dangnam27/Intern/master/db.json/${id}`
            )
                .then((res) => res.json())
                .then((res) => {
                    
                    setProduct(res)
                    setLoading(false)
                })
        }
        getProduct()
    }, [Input])
    console.log(product)
    const Loading = () => {
        return <>Loading...</>
    }
    const ShowProduct = () => {
        if (product)
            return (
                <>
                    <div className="col-md-6">
                        <img
                            src={product.ảnh}
                            alt=""
                            height="400px"
                            width="400px"
                        ></img>
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-uppercase text-back-50">
                            {product.tên}
                        </h4>
                        <h1 className="display-5"> {product.tên}</h1>

                        <h3 className="display-6 fw-bold my-4"> $$</h3>
                        <div className="float-none">
                            <button
                                className=" btn btn-outline-success m-2"
                                onClick={() => addProduct(product)}
                            >
                                Thêm vào giỏ Hàng
                            </button>

                            <NavLink
                                to="/cart"
                                className=" btn btn-outline-success "
                            >
                                Giỏ Hàng
                            </NavLink>
                        </div>
                    </div>
                </>
            )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Product
