import { Link } from "react-router-dom";

export const Flat = (props) => {
	return (
		<div id='about' style={{ backgroundColor: "#fff" }}>
			<div className='container'>
				<div className='row'>
					<div className='col-xs-12 col-md-6'>
						<div className='about-text'>
							<h2>Mặt bằng phân khu</h2>{" "}
							<p>
								Husthome Symphony là một trong những dự án khu đô thị có quy mô
								lớn nhất Thủ đô Hà Nội, Khu đô thị Dương Nội được xây dựng và
								phát triển dựa trên mối tương quan cân bằng giữa không gian đô
								thị và môi trường tự nhiên, tạo nên một thành phố đa chức năng,
								một không gian lý tưởng đáp ứng mọi nhu cầu về nhà ở, văn phòng,
								thương mại, du lịch và vui chơi giải trí đẳng cấp và hiện đại
								bậc nhất thành phố.
							</p>
							<div style={{ marginTop: "25px", textAlign: "center" }}>
								<Link
									to='/vrt/overview'
									style={{
										borderRadius: "510px",
										padding: "10px 34px",
									}}
									className='btn btn-custom btn-lg page-scroll'>
									Virtual Tour
								</Link>
							</div>
						</div>
					</div>
					<div className='col-xs-12 col-md-6'>
						<img
							src=' https://storage.googleapis.com/vinhomes-data-01/styles/images_1138_x_606/public/2021_08/Hinh-anh-mat-bang-Vinhomes-Symphony_1628584404.jpg?itok=QSVsY28b'
							alt=''
							style={{
								width: "100%",
								boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
								borderRadius: "5px",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
