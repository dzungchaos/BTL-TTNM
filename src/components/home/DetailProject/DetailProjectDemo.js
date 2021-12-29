import { Link } from "react-router-dom";

export const DetailProjectDemo = (props) => {
	return (
		<div id='about'>
			<div className='container'>
				<div className='row'>
					<div className='col-xs-12 col-md-6'>
						<iframe
							style={{
								boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
								borderRadius: "5px",
							}}
							width='100%'
							height='315px'
							src='https://www.youtube.com/embed/k1dZtyuG_Hg?autoplay=1'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen></iframe>
					</div>
					<div className='col-xs-12 col-md-6'>
						<div className='about-text'>
							<h2>Thông tin cụ thể </h2>
							<div className='list-style'>
								<div className='col-lg-12 col-sm-12 col-xs-12'>
									<ul>
										{/* {props.data
											? props.data.Why2.map((d, i) => (
													<li key={`${d}-${i}`}> {d}</li>
											  ))
											: "loading"} */}
										<li>
											<b>Tên dự án:</b> Husthome Symphony
										</li>
										<li>
											<b>Vị trí:</b> Khu Đô Thị Dương Nội _ Tố Hữu_ Hà Đông
										</li>
										<li>
											<b>Quy mô dự án:</b> 300 ha
										</li>
										<li>
											<b>Tổng số lượng căn:</b> 3147 căn
										</li>
										<li>
											<b>Thời gian triển khai:</b> 2021
										</li>
										<li>
											<b>Tiêu chuẩn bàn giao:</b> Bàn giao nhà hoàn thiện mặt
											ngoài
										</li>
										<li>
											<b>Phong cách thiết kế:</b> Thiết kế theo phong cách hiện
											đại
										</li>
									</ul>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
