import React from 'react';
import Products from './Products';
import './style/Home.css';

export default function Home() {
  return (
    <>
    <div class=" container-fluid">
     <div id="carouselExampleDark" class="carousel carousel-dark slide">
     <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide7"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://gachonline.vn/images/slide/slide2.jpg" class="d-block home" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>GẠCH ỐP TƯỜNG</h5>
        <p>Với thiết kế đa dạng cùng kết cấu vững chắc và độ bền với thới gian</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="/assets//Untitled-2.jpg" class="d-block home" alt="..."/>
      
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://gachonline.vn/images/slide/slide3.jpg" class="d-block home" alt="..."/>
      
    </div>
    
    <div class="carousel-item" data-bs-interval="2000">
      <img src="/assets/342993753_140317029027988_4281227234831885095_n.jpg" class="d-block home" alt="..."/>
      
    </div>
    
    <div class="carousel-item" data-bs-interval="2000">
      <img src="/assets/343575323_258439156702642_6807966443707324382_n.jpg" class="d-block home" alt="..."/>
      
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="/assets/343208582_258952696687533_2579077178207519258_n.jpg" class="d-block home" alt="..."/>
      
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="/assets/343279805_622509316125410_7824613633929751708_n.jpg" class="d-block home" alt="..."/>
      
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
  <div><Products/></div>
  </>
  )
}
