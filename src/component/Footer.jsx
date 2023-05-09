import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <div>

<footer>
        <div class="container-fluid  bg-dark text-light ">
           <div class="row footer" >
              <div class="col-md-5 col-sm-5 row p-4">

                <h5>SHOWROOM & KHO HÀNG - GACHONLINE.VN</h5>
                <p> Đường ĐT 742, KP.4, P. Vĩnh Tân, TX Tân Uyên, T. Bình Dương(Đối diện xéo trường mần non Vĩnh Tân) <a href="https://www.google.com/maps/place/G%E1%BA%A1ch+men+Ph%C3%BA+%C4%90%E1%BA%A1i+Ph%C3%A1t/@11.1222047,106.7087014,209m/data=!3m1!1e3!4m6!3m5!1s0x3174cf025a6d5473:0x31c0a2315ae31e33!8m2!3d11.1222047!4d106.709406!16s%2Fg%2F11s8g_j7cm?hl=vi-VN">Chỉ đường</a></p>
                <p class="daily">0919 322 379 - 0988 432 939</p>
              </div>
              
              <div class="col-md-2 col-sm-12 row p-4 ">
                <h5>SẢN PHẨM</h5>
                <a className= "nav-link " href="#">Gạch lát nền</a>
                <a className= "nav-link" href="#">Gạch ốp tường</a>
                <a className= "nav-link" href="#">Gạch trang trí</a>
                <a className= "nav-link"href="#">Gạch lát sân vườn</a>
            </div>
              <div class="col-md-2 col-sm-12 row p-4">
                <h5>CHÍNH SÁCH</h5>
                <a className= "nav-link" href="#">Chính sách bảo hành</a>
                <a className= "nav-link" href="#">Chính sách bảo mật</a>
                <a className= "nav-link" href="#">Giao hàng và thanh toán</a>
                <a className= "nav-link"href="#">Chính sách đổi trả</a>
            </div>

              <div class="col-md-2 col-sm-12 row p-4">
                <h5>TIN TỨC</h5>
                <a className= "nav-link" href="#">Tin khuyến mãi </a>
                <a className= "nav-link" href="#">Tư vấn chọn mua</a>
               
            </div>
           </div>
           
        </div>
    </footer>
    </div>
  )
}

export default Footer