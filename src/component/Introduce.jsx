import React from 'react'
import './style/Introduce.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactPlayer from 'react-player';


export default function Introduce() {
    return (
        <div className="introduce container">
            <div>
                <h1>Giới thiệu gachmen.org</h1>
            </div>
            <div>
               
                
                <p>
                    Để có được một ngôi nhà hoàn mỹ, ắt hẳn không chỉ chú trọng
                    đến vẻ đẹp, chất lượng ngoại thất bên ngoài, mà còn đặc biệt
                    quan tâm đến nội thất bên trong. Vì đó là một phần tâm hồn
                    của ngôi nhà. Mà để cho ngôi nhà luôn có được tâm hồn rộng
                    mở thì dựa vào đâu? À, chính là dựa vào cách bài trí từng
                    vật dụng trong nhà, họa tiết tinh tế trên từng sản phẩm. Mà
                    sản phẩm thổi hồn nhiều nhất đến cho ngôi nhà chính là gạch
                    men, gạch ốp lát và thiết bị vệ sinh.
                </p>
                <p>
                    Gạch men, gạch ốp lát và thiết bị vệ sinh là dòng sản phẩm
                    mà bất kỳ ngôi nhà nào cũng phải cần, từng dòng sản phẩm đều
                    có những họa tiết trang trí khác nhau. Khi KH lựa chọn, sẽ
                    nói lên tính cách của gia chủ, đồng thời sẽ tạo cho ngôi nhà
                    đó một nét đẹp riêng.
                </p>
                <p>
                    Hiện nay, trên thị trường có rất nhiều dòng sản phẩm đa dạng
                    về phong cách, phong phú về mẫu mã với những mức giá, chất
                    lượng khác nhau. Điều đó sẽ làm cho khách hàng hoang mang và
                    khó để tìm ra cho mình sản phẩm phù hợp. Hiểu được tâm lý
                    đó, gachonline.vn đã hình thành nhằm đáp ứng mọi nhu cầu của
                    Quý khách hàng.
                </p>
                <p>
                    Với phương châm “ bán hàng đúng chất lượng nhà sản xuất,
                    dịch vụ chu đáo, giá cả phải chăng”, gachonline.vn luôn tự
                    hào là nhà phân phối gạch men, gạch ốp lát, TBVS uy tín nhất
                    Việt Nam.
                </p>
                <p>
                    Với đội ngũ nhân viên chuyên nghiệp, nhiệt tình, thân thiện,
                    tư vấn chặt chẽ, luôn lắng nghe mọi vướng mắc của KH.
                </p>
                <p>
                    Hãy đến với <a href="#">gachmenphudaiphat.vn</a> luôn đồng hành
                    cùng Quý khách hàng, cam kết mang lại cho KH sự hài lòng hơn
                    cả mong đợi.
                </p>
                <p>Trân trọng!</p>
                <p>
                    <FontAwesomeIcon icon="fa-solid fa-house" />
                </p>
                <div className='row justify-content-center'> 
                <div className='col-md-6 pt-4 col-sm-12'>
                <ReactPlayer
                        url="https://www.youtube.com/shorts/5damTaWBkK4"
                        width="540px"
                        height="330px"
                        // width='100%'
                        // height='100%'
                        playing={true}
                        controls={true}
                    />
                </div>
                <div className='col-md-6 col-sm-12'>
                <ReactPlayer
                        url="./assets/10000000_6588169977862755_9023366759210568736_n.mp4"
                        width="540px"
                        height="360px"
                        // width='100%'
                        playing={true}
                        controls={true}
                    />
                </div>
                  
                </div>
            </div>
        </div>
    )
}
