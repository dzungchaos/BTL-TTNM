export const DetailProjectDemo = (props) => {
	return (
		<div id='about'>
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
										<li>Tên dự án: Husthome Symphony </li>
										<li>Vị trí: Khu Đô Thị Dương Nội _ Tố Hữu_ Hà Đông</li>
										<li>Quy mô dự án: 300 ha</li>
										<li>Tổng số lượng căn: 3147 căn</li>
										<li>Pháp lý dự án: Sở hữu vĩnh viện</li>
										<li>Thời gian triển khai: 2021</li>
										<li>
											Tiêu chuẩn bàn giao: Bàn giao nhà hoàn thiện mặt ngoài
										</li>
										<li>
											Phong cách thiết kế: Thiết kế theo phong cách hiện đại
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
