export const DetailProjectDemo = (props) => {
	return (
		<div id='about' style={{ backgroundColor: "#fff" }}>
			<div className='container'>
				<div className='row'>
					<div className='col-xs-12 col-md-6'>
						<img
							src='https://anlandlakeview.vn/themes/lakeview/img/tongquan-03.jpg'
							alt=''
							style={{
								width: "100%",
								boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
								borderRadius: "5px",
							}}
						/>
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
											<b>Pháp lý dự án:</b> Sở hữu vĩnh viện
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
