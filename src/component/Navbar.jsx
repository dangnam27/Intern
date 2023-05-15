import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



export default function Navbar() {

  const state = useSelector((state) => state.handleCart)
  console.log(state)
  return (
<div>
    <nav class="navbar navbar-expand-lg bg-primary  ">
        <div class="container">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" to="./Home">TRANG CHỦ</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link " to="./Introduce">GIỚI THIỆU</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="./Tiles">GẠCH LÁT NỀN</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="./WallTiles">GẠCH ỐP TƯỜNG</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="./DecorationBrick">GẠCH TRANG TRÍ</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="./New">TIN TỨC</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="./Contact">LIÊN HỆ</Link>
        </li>
        
      </ul>
      <div className="buttons">
        <Link to="#" className=" btn btn-outline-dark" color='#fffff'>
            KHUYỄN MÃI
        </Link>
      </div>
      <div className="buttons p-1">
        <Link to="/cart" className=" btn btn-outline-dark ms-2" color='#009d05'>
            GIỎ HÀNG ({state})
        </Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}