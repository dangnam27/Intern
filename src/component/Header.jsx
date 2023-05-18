import React from 'react'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './style/Header.css'




export default function Header() {

  // const state = useSelector((state) => state.handleCart)
  
  return (
<div>
<div className="container-fluid p-0  bg-success  ">
<nav className="navbar navbar-expand-lg bg-success p-2"> 
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="mr-auto"></div>
                <Link className="nav-link lead fw-bold fs-1 navbar-brand phu_dai_phat"  to="./Home"> PHÚ ĐẠI PHÁT
                </Link>

                <form className="d-flex">
                    <input className="form-control ms-5 me-2" type="search" placeholder="Tìm kiếm thứ bạn thích" aria-label="Search"/>
                    <button className="btn btn-outline-dark" type="submit">Tìm</button>
                </form>
                
              </div>
          </nav>
</div>
        
          
    
    </div>
  )
}