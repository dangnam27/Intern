import { Input } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'



function Tiles() {
    const [data1, setData] = useState([])
    const [filter, setFilter] = useState(data1)
    const [loading, setloading] = useState(false)
    let componentMount = true

    useEffect(() => {
        const getProducts = async () => {
            setloading(true)
            fetch('http://localhost:3000/gach/')
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
        return <>Loading...</>
    }
    const ShowProduct = () => {
            return (
                <>
                    {filter &&
                    filter.map((product) => {
                        return (
                            <>
                                <div className=" col-md-3 mb-4 ">
                                    <div
                                        className="card h-150 text-center p-4"
                                        key={product.id}
                                    >
                                        <img
                                            src={product.imageUrl}
                                            className="card-img-top"
                                            alt={product.link_gach}
                                            height="250px"
                                        />
                                        <div className=" card-body">
                                            <p className="card-text lead fw-bold">
                                                {product.name}
                                            </p>
                                            <NavLink
                                                to={`/Product/${product.id}`}
                                                className="btn btn-outline-dark"
                                            >
                                                MUA NGAY{' '}
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
           <div>
        
        <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProduct />}
        </div>
    </div>
        </div>
    )
}

export default Tiles;
