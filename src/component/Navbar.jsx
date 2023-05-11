import React from 'react'
import Introduce from './Introduce'

import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
<div>
    <nav class="navbar navbar-expand-lg bg-primary  ">
        <div class="container">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link aria-current="page" to="#">
            <i class="fa-solid fa-house"></i></Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link " to="/Introduce.jsx">GIỚI THIỆU</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="./Tiles.jsx">GẠCH LÁT NỀN</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="./WallTiles.jsx">GẠCH ỐP TƯỜNG</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="./DecorationBrick.jsx">GẠCH TRANG TRÍ</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="./New.jsx">TIN TỨC</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="./Contact.jsx">LIÊN HỆ</Link>
        </li>
        
      </ul>
      <div className="buttons">
        <Link to="#" className=" btn btn-outline-dark" color='#fffff'>
            KHUYỄN MÃI
        </Link>
      </div>
      <div className="buttons p-1">
        <Link to="#" className=" btn btn-outline-dark" color='#ff0000'>
            GIỎ HÀNG
        </Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}