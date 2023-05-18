import React from 'react';
import './style/Footer.css';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div>

<footer>
        <div className="container-fluid  bg-dark text-light ">
       
           <div className="row footer" >
              <div className="col-md-5 col-sm-12 row p-4">
                
                <h5>SHOWROOM & KHO HÀNG - GẠCHMEN.ORG</h5>
                <p> Đường ĐT 742, KP.4, P. Vĩnh Tân, TX Tân Uyên, T. Bình Dương(Đối diện xéo trường mần non Vĩnh Tân) <Link to="https://www.google.com/maps/place/G%E1%BA%A1ch+men+Ph%C3%BA+%C4%90%E1%BA%A1i+Ph%C3%A1t/@11.1222047,106.7087014,209m/data=!3m1!1e3!4m6!3m5!1s0x3174cf025a6d5473:0x31c0a2315ae31e33!8m2!3d11.1222047!4d106.709406!16s%2Fg%2F11s8g_j7cm?hl=vi-VN">Chỉ đường</Link></p>
                <p className="daily">0919 322 379 - 0988 432 939</p>
          
                
              </div>
              
              <div className="col-md-2 col-sm-12 row p-4 ">
                <h5>SẢN PHẨM</h5>
                <Link className= "nav-link " to="#">Gạch lát nền</Link>
                <Link className= "nav-link" to="#">Gạch ốp tường</Link>
                <Link className= "nav-link" to="#">Gạch trang trí</Link>
                <Link className= "nav-link"to="#">Gạch lát sân vườn</Link>
            </div>
              <div className="col-md-2 col-sm-12 row p-4">
                <h5>CHÍNH SÁCH</h5>
                <Link className= "nav-link" to="#">Chính sách bảo hành</Link>
                <Link className= "nav-link" to="#">Chính sách bảo mật</Link>
                <Link className= "nav-link" to="#">Giao hàng và thanh toán</Link>
                <Link className= "nav-link"to="#">Chính sách đổi trả</Link>
            </div>

              <div className="col-md-2 col-sm-12 row p-3">
                <h5>TIN TỨC</h5>
                <Link className= "nav-link" to="#">Tin khuyến mãi </Link>
                <Link className= "nav-link" to="#">Tư vấn chọn mua</Link>
               
            </div>
           </div>
           
        </div>
    </footer>
    </div>
  )
}

export default Footer