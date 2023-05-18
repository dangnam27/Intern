import React from 'react'
import Products from './Products'
import './style/Home.css'

export default function Home() {
    return (
        <>
            <div className=" container-fluid p-0 ">
                <div
                    id="carouselExampleDark"
                    className="carousel carousel-dark slide"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="4"
                            aria-label="Slide 5"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="5"
                            aria-label="Slide 6"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="6"
                            aria-label="Slide7"
                        ></button>
                    </div>
                    <div
                        className="carousel-inner "
                        id="carouselExampleInterval"
                        data-bs-ride="carousel"
                    >
                        <div
                            className="carousel-item active"
                            data-bs-interval="5000"
                        >
                            <img
                                src="/assets//Untitled-2.jpg"
                                className="d-block home"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                                
                                <button className='btn btn-danger '><h5>GẠCH PHÚ ĐẠI PHÁT</h5>
                                <span></span>
                                <h6>
                                    Với thiết kế đa dạng cùng kết cấu vững chắc
                                    và độ bền với thới gian
                                </h6></button>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img
                                src="https://gachonline.vn/images/slide/slide2.jpg "
                                className="d-block home"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img
                                src="https://gachonline.vn/images/slide/slide3.jpg"
                                className="d-block home"
                                alt="..."
                            />
                        </div>

                        <div className="carousel-item" data-bs-interval="5000">
                            <img
                                src="/assets/342993753_140317029027988_4281227234831885095_n.jpg"
                                className="d-block home"
                                alt="..."
                            />
                        </div>

                        <div className="carousel-item" data-bs-interval="5000">
                            <img
                                src="/assets/343575323_258439156702642_6807966443707324382_n.jpg"
                                className="d-block home"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img
                                src="/assets/343208582_258952696687533_2579077178207519258_n.jpg"
                                className="d-block home"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img
                                src="/assets/343279805_622509316125410_7824613633929751708_n.jpg"
                                className="d-block home"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div>
                <Products />
            </div>
        </>
    )
}
