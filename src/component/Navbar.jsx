import React from 'react'


export default function Navbar() {
  return (
<div>
    <nav class="navbar navbar-expand-lg bg-primary  ">
        <div class="container">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a aria-current="page" href="#">
            <i class="fa-solid fa-house"></i></a>
        </li>
        <li class="nav-item ">
          <a class="nav-link " href='./Introduce.jsx'>GIỚI THIỆU</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">GẠCH LÁT NỀN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">GẠCH ỐP TƯỜNG</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">GẠCH TRANG TRÍ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">TIN TỨC</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">LIÊN HỆ</a>
        </li>
        
      </ul>
      <div className="buttons">
        <a href="#" className=" btn btn-outline-dark" color='#fffff'>
            KHUYỄN MÃI
        </a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}