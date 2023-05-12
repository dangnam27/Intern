import React, {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Product() {

    const {id} = useParams();
    const [product, setProduct] = useState();
    const [loading, setLoading]= useState(false);

    useEffect(()=> {
        const getProduct = async () =>{
            setLoading(true);
            const response = await fetch('http://fakestoreapi.com/producets/${id}');
            setProduct( await response.json());
            setLoading(false);
        }
        getProduct()
    },[]);
    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }
    const ShowProduct = () =>{
        return(
            <>
                <div className="col-md-6">
                    <img src='' alt='' height="400px" width="400px"></img>
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-back-50'>
                        gach trang tri
                    </h4>
                    <h1 className='display-5'>name san pham</h1>

                <h3 className='display-6 fw-bold my-4'> $$</h3>
                <button className=' btn btn-outline-dark'>add to cart</button>
                <NavLink to="/cart" className=' btn btn-dark'>Go to cart</NavLink>
                </div>
                
            
            </>
        )
    }
  return (
    <div>
        <div className='container py-5'>
            <div className="row py-4">
                 <ShowProduct/>
            </div>

        </div>

    </div>
  )
}

export default Product