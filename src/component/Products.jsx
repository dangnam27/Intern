import React,{useState, useEffect} from 'react';
import './Products.css' ;


const Products = () =>{

    const [data, setdata] = useState([]);
    const [filter, setfilter] = useState(data);
    const [loading, setloading] = useState(false);
  

    return(
        <div>
                

        <div class="row ">
            <a class="nav-link" href="#"><h2>Gạch lát nền khuyến mãi</h2></a>
            
                <div class="  col-md-2 ">
                    <a class="nav-link" href="#"> <div class="card" >
                    <img class="card-img-top d-block w-100 " src="https://gachonline.vn/images/san-pham/product/resized/3001_240x240.jpg" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Gach lát nền Vitto - 5612</h5>
                    <p class="text-danger">155.000 ₫/m2 </p>
                    </div>
                </div>
                </a> 
                </div>
            
        
                <div class="  col-md-2">
                <a class="nav-link" href="#"><div class="card" >
                    <img class="card-img-top d-block w-100" src="https://gachonline.vn/images/san-pham/product/resized/5613_240x240.jpg" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Gach lát nền Vitto - 5613</h5>
                        <p class="text-danger">155.000 ₫/m2 </p>

                    </div>
                    </div></a>
                    
            </div>
                <div class="  col-md-2">
                <a class="nav-link" href="#">
                <div class="card" >
                        <img class="card-img-top d-block w-100" src="https://gachonline.vn/images/san-pham/product/resized/5612_240x240.jpg" alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Gạch lát nền VITTO VT3001</h5>
                        <p class="text-danger">155.000 ₫/m2 </p>
                        </div>
                    </div>
                </a>
                  
            </div>
                <div class="  col-md-2">
                <a class="nav-link" href="#">
                    <div class="card" >
                        <img class="card-img-top d-block w-100" src="https://gachonline.vn/images/san-pham/product/resized/5612_240x240.jpg" alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Gạch lát nền VITTO VT3001</h5>
                        <p class="text-danger">155.000 ₫/m2 </p>
                        </div>
                    </div>
                 </a>
            </div>
                <div class="  col-md-2">
                    <div class="card" >
                        <img class="card-img-top d-block w-100" src="https://gachonline.vn/images/san-pham/product/resized/5612_240x240.jpg" alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Gạch lát nền VITTO VT3001</h5>
                        <p class="text-danger">155.000 ₫/m2 </p>
                        </div>
                </div>
            </div>
        </div>

        <div class="row ">
            <a class="nav-link" href="#"><h2>Gạch ốp tường khuyến mãi</h2></a>
                <div class="  col-md-2 ">
                
                <div class="card" >
                    <img class="card-img-top d-block w-100 " src="https://gachonline.vn/images/san-pham/product/resized/3001_240x240.jpg" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Gach lát nền Vitto - 5612</h5>
                    <p class="text-danger">155.000 ₫/m2 </p>
                    </div>
                </div>   
                </div>
            
        
                <div class="  col-md-2">
                    <div class="card" >
                    <img class="card-img-top d-block w-100" src="https://gachonline.vn/images/san-pham/product/resized/5613_240x240.jpg" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Gach lát nền Vitto - 5613</h5>
                        <p class="text-danger">155.000 ₫/m2 </p>

                    </div>
                </div>
            </div>
                <div class="  col-md-2">
                    <div class="card" >
                        <img class="card-img-top d-block w-100" src="https://gachonline.vn/images/san-pham/product/resized/5612_240x240.jpg" alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Gạch lát nền VITTO VT3001</h5>
                        <p class="text-danger">155.000 ₫/m2 </p>
                        </div>
                </div>
            </div>
                <div class="  col-md-2">
                    <div class="card" >
                        <img class="card-img-top d-block w-100" src="https://gachonline.vn/images/san-pham/product/resized/5612_240x240.jpg" alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Gạch lát nền VITTO VT3001</h5>
                        <p class="text-danger">155.000 ₫/m2 </p>
                        </div>
                </div>
            </div>
                <div class="  col-md-2">
                    <div class="card" >
                        <img class="card-img-top d-block w-100" src="https://gachonline.vn/images/san-pham/product/resized/5612_240x240.jpg" alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Gạch lát nền VITTO VT3001</h5>
                        <p class="text-danger">155.000 ₫/m2 </p>
                        </div>
                </div>
            </div>
        </div>
        </div>
        
    );

}
export default Products;

