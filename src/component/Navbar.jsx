import React from 'react'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './style/Navbar.css'




export default function Navbar() {

  // const state = useSelector((state) => state.handleCart)
  
  return (
<div>
<div className="container-fluid p-0  bg-primary  ">
<nav className="navbar navbar-expand-lg bg-primary p-2">
          
                <ul className='navbar-nav' >
                <Link className="nav-link lead fw-bold   navbar-brand "  to="./Home"> TRANG CHỦ 
                </Link>
                </ul>
               
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <i className="fas fa-list"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="mr-auto"></div>
              <ul className="navbar-nav">
                
                <li className="nav-item ">
                <Link className="nav-link    " to="./Introduce">GIỚI THIỆU</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  lead "to="./Tiles">GẠCH LÁT NỀN</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link  lead "to="./WallTiles">GẠCH ỐP TƯỜNG</Link>
                  </li>
                <li className="nav-item dropdown">
                <Link className="nav-link  lead " to="./DecorationBrick">GẠCH TRANG TRÍ</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link  lead " to="./New">TIN TỨC</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link  lead " to="./Contact">LIÊN HỆ</Link>
                  </li>
                </ul>
                <form className="d-flex ms-5">
                    <input className="form-control me-2" type="search" placeholder="Tìm kiếm thứ bạn thích" aria-label="Search"/>
                    <button className="btn btn-outline-dark" type="submit">Tìm</button>
                </form>
                <Link to="#" className=" btn btn-outline-dark ms-2" color='#fffff'>
                    KHUYỄN MÃI
                </Link>
                <Link to="/cart" className=" btn btn-outline-dark ms-2" color='#009d05'>
                    GIỎ HÀNG ()
                </Link>
              </div>
              
          </nav>
</div>
        
          
    
    </div>
  )
}