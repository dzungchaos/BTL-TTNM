export const HustHome = (props) => {
	return (
		<div id='about'>
			<div className='container'>
				<div className='row'>
					<div className='col-xs-12 col-md-6'>
						<div className='about-text'>
							<h2>HUST HOMES LÀ AI?</h2>
							<p>
								Husthomes là thương hiệu bất động sản, hướng đến những siêu khu
								đô thị với quy mô lớn lên đến hàng trăm hecta, có hạ tầng giao
								thông phát triển, hệ thống tiện ích phong phú. HustHome được
								triển khai trên 4 hệ trục cốt lõi tạo thành hệ sinh thái thông
								minh
							</p>
							<h3>Vì sao chọn chúng tôi?</h3>
							<div className='list-style'>
								<div className='col-lg-6 col-sm-6 col-xs-12'>
									<ul>
										{/* {props.data
											? props.data.Why2.map((d, i) => (
													<li key={`${d}-${i}`}> {d}</li>
											  ))
											: "loading"} */}
										<li>Cộng đồng thông minh </li>
										<li>Căn hộ thông minh</li>
									</ul>
								</div>
								<div className='col-lg-6 col-sm-6 col-xs-12'>
									<ul>
										{/* {props.data
											? props.data.Why.map((d, i) => (
													<li key={`${d}-${i}`}>{d}</li>
											  ))
											: "loading"} */}
										<li>An ninh thông minh</li>
										<li>Vận hành thông minh</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='col-xs-12 col-md-6'>
						<img
							src='https://vcdn-kinhdoanh.vnecdn.net/2021/10/09/Anh-3-3720-1633788188.jpg'
							className='img-responsive'
							style={{
								borderRadius: "10px",
								boxShadow: "rgb(0 0 0 / 15%) 0px 0.5rem 1rem",
							}}
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
