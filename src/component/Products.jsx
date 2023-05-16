import React, { useState, useEffect } from 'react'
import './style/Products.css'
import { NavLink } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setloading] = useState(false)
    let componentMount = true

    useEffect(() => {
        const getProducts = async () => {
            setloading(true)
            fetch('https://raw.githubusercontent.com/dangnam27/Intern/master/data.json')
                .then((res) => res.json())
                .then((res) => {
                    if (componentMount) {
                        setData(res)
                        setFilter(res)
                        setloading(false)
                    }
                })
            return () => {
                componentMount = false
            }
        }
        getProducts()
    }, [])
    
    const Loading = () => {
        return (
            <>
               Loading...
            </>
        )
    }
    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-3 pt-1">
                    <button className="btn btn-outline-danger m-1 fs-3 lead fw-bold" onClick={() => setFilter(data)}>TẤT CẢ</button>
                    <button className="btn btn-outline-danger m-1 fs-3 lead fw-bold" onClick={() => filter.Product("Gạch lát nền")}>
                       GẠCH LÁT NỀN
                    </button>
                    <button className="btn btn-outline-danger m-1 fs-3 lead fw-bold"onClick={() => filter.Product(" Gạch ốp tường")}>
                        GẠCH ỐP TƯỜNG
                    </button>
                    <button className="btn btn-outline-danger m-1 fs-3 lead fw-bold"onClick={() => filter.Product("Gạch trang trí")}>
                        GẠCH TRANG TRÍ
                    </button>
                    <button className="btn btn-outline-danger m-1 fs-3 lead fw-bold"onClick={() => filter.Product("Gạch lát sân vườn")}>
                        GẠCH LÁT SÂN VƯỜN
                    </button>
                </div>
                
                {filter && filter.map((product) => {
                        
                        return (
                            <>
                                <div className=" col-md-3 mb-4 ">
                                    <div
                                        className="card h-100 text-center p-4"
                                        key={product.id}
                                    >
                                        <img
                                            src={product.ảnh}
                                            className="card-img-top"
                                            alt={product.link_gach}
                                            height="250px"
                                        />
                                        <div className=" card-body">
                                            <p className="card-text lead fw-bold">
                                                {product.tên}
                                            </p>
                                            <NavLink
                                                to={`/Product/${product.id}`}
                                                className="btn btn-outline-dark"
                                            >
                                                MUA NGAY
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
            </>
        )
    }

    return (
        <div>
        
            <div className="row justify-content-center">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    )
}
export default Products
