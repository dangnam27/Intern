import React,{useState, useEffect} from 'react';
import './Products.css' ;
import { cleanup } from '@testing-library/react';


const Products = () =>{

    const [data, setdata] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setloading] = useState(false);
    let componentMount = true;

    useEffect (()=>{
        const getProducts = async () => {
            setloading (true);
            const response = await fetch ("http://fakestoreapi.com/products");
            if (componentMount){
                setdata(await response.clone().json());
                setFilter(await response.json());
                setloading(false);
                console.log(filter)
            }
            return () => {
                componentMount = false;
            }

        }
        getProducts();
    },[]);
  
    const Loading = () => {
        return (
            <>
            Loanding...
            </>
        )
    }
    const ShowProducts = () => {
        return (
        <>
        <div >
        <div class="row ">
        <a class="nav-link" href="#"><h2>Gạch lát nền khuyến mãi</h2></a>
    
        <div class=" col-md-2 ">
            <a class="nav-link" href="#"> <div class="card" >
            <img class="card-img-top d-block w-100 "  height='200px' src="https://github.com/dangnam27/Intern/blob/master/src/assets/343273404_625263972829950_3791624434190090707_n.jpg?raw=true" alt="Card image cap"/>
            <div class="card-body">
            <h5 class="card-title">Gach lát nền Vitto - 5612</h5>
            <p class="text-danger"></p>
            </div>
        </div>
        </a> 
        </div>
    

        <div class="  col-md-2">
        <a class="nav-link" href="#"><div class="card" >
            <img class="card-img-top d-block w-100" height='200px' src="https://github.com/dangnam27/Intern/blob/master/src/assets/342993753_140317029027988_4281227234831885095_n.jpg?raw=true"/>
            <div class="card-body">
                <h5 class="card-title">Gach lát nền Vitto - 5613</h5>
                <p class="text-danger"> </p>

            </div>
            </div></a>
            
    </div>
        <div class="  col-md-2">
        <a class="nav-link" href="#">
        <div class="card" >
                <img class="card-img-top d-block w-100" height='200px' src="https://gachonline.vn/images/san-pham/product/resized/5612_240x240.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Gạch lát nền VITTO VT3001</h5>
                <p class="text-danger"> </p>
                </div>
            </div>
        </a>
          
    </div>
        <div class="  col-md-2">
        <a class="nav-link" href="#">
            <div class="card" >
                <img class="card-img-top d-block w-100" height='200px' src="https://gachonline.vn/images/san-pham/product/resized/5612_240x240.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Gạch lát nền VITTO VT3001</h5>
                <p class="text-danger"> </p>
                </div>
            </div>
         </a>
    </div>
        <div class="  col-md-2">
        <a class="nav-link" href="#">
            <div class="card" >
                <img class="card-img-top d-block w-100" height='200px' src="https://gachonline.vn/images/san-pham/product/resized/5612_240x240.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Gạch lát nền VITTO VT3001</h5>
                <p class="text-danger"> </p>
                </div>
        </div>
        </a>
    </div>
</div>

<div class="row ">
    <a class="nav-link" href="#"><h2>Gạch ốp tường khuyến mãi</h2></a>
        <div class="  col-md-2 ">
        <a class="nav-link" href="#">
        <div class="card" >
            <img class="card-img-top d-block w-100 " height='200px' src="https://gachonline.vn/images/san-pham/product/resized/3001_240x240.jpg" alt="Card image cap"/>
            <div class="card-body">
            <h5 class="card-title">Gach lát nền Vitto - 5612</h5>
            <p class="text-danger"> </p>
            </div>
        </div>   
        </a>
        </div>
    

        <div class="  col-md-2">
            <div class="card" >
            <img class="card-img-top d-block w-100" height='200px' src="https://gachonline.vn/images/san-pham/product/resized/5613_240x240.jpg" alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">Gach lát nền Vitto - 5613</h5>
                <p class="text-danger"></p>

            </div>
        </div>
    </div>
        <div class="  col-md-2">
            <div class="card" >
                <img class="card-img-top d-block w-100" height='200px' src="https://gachonline.vn/images/san-pham/product/resized/5612_240x240.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Gạch lát nền VITTO VT3001</h5>
                <p class="text-danger"></p>
                </div>
        </div>
    </div>
        <div class="  col-md-2">
            <div class="card" >
                <img class="card-img-top d-block w-100" height='200px' src="https://gachonline.vn/images/san-pham/product/resized/5612_240x240.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Gạch lát nền VITTO VT3001</h5>
                <p class="text-danger"> </p>
                </div>
        </div>
    </div>
        <div class="  col-md-2">
            <div class="card" >
                <img class="card-img-top d-block w-100" height='200px' src="https://gachonline.vn/images/san-pham/product/resized/5612_240x240.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Gạch lát nền VITTO VT3001</h5>
                <p class="text-danger"> </p>
                </div>
        </div>
    </div>
</div>
</div>
            </>
        ) 
       }
        
   
    return(
      <div>
            <div className='row justify-content-center'>
                {loading ? <Loading/> : <ShowProducts/>}
            </div>
      </div>
        
    );

}
export default Products;

