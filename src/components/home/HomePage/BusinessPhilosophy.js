export const BusinessPhilosophy = (props) => {
	return (
		<div id='about'>
			<div className='container'>
				<div className='row'>
					<div className='col-xs-12 col-md-6'>
						{" "}
						<img src='img/about.jpg' className='img-responsive' alt='' />{" "}
					</div>
					<div className='col-xs-12 col-md-6'>
						<div className='about-text'>
							<h2>TRIẾT LÝ KINH DOANH</h2>
							<p>
								Trải qua nhiều năm hình thành và phát triển, với quy mô ban đầu
								là tập đoàn đầu tư nhỏ, ngày nay thương hiệu Tập đoàn HustHome
								đã phát triển và lớn mạnh không ngừng trong lĩnh vực đầu tư và
								phát triển bất động sản, đặc biệt trong hoạt động xây dựng cơ sở
								hạ tầng, xây dựng khu đô thị và du lịch, dịch vụ…
							</p>
							<div className='list-style'>
								<div className='col-lg-12 col-sm-12 col-xs-12'>
									<ul>
										{/* {props.data
											? props.data.Why2.map((d, i) => (
													<li key={`${d}-${i}`}> {d}</li>
											  ))
											: "loading"} */}
										<li>
											Đối với khách hàng: Chúng tôi đem lại giá trị gia tăng cho
											khách hàng qua những trải nghiệm mang bản sắc riêng
										</li>
										<li>
											Đối với đối tác: Nuôi dưỡng niềm tin, gây dựng đối tác,
											cùng song hành, cùng phát triển
										</li>
										<li>
											Đối với nhân viên: Xây dựng môi trường làm việc được yêu
											thích với đội ngũ chuyên nghiệp, hiệu quả và sáng tạo.
											Cùng gây dựng thành tích, cùng sẻ chia thành quả
										</li>
										<li>
											Đối với cộng đồng: Kiến tạo những giá trị vững bền, nhân
											văn cho xã hội. Chia sẻ thành công góp phần gia tăng chất
											lượng cuộc sống cho cộng đồng
										</li>
									</ul>
								</div>
							</div>
							{/* <p>
								Thành công và vị thế hàng đầu của thương hiệu HustHome trên thị
								trường ngày hôm nay được phát triển và duy trì dựa trên các GIÁ
								TRỊ CỐT LÕI: UY TÍN –VỮNG BỀN – NHÂN VĂN. Trên nền tảng các giá
								trị truyền thống, thế hệ trẻ kế cận kết hợp một cách hài hòa và
								sáng tạo với các yếu tố ĐỔI MỚI – CHUYÊN NGHIỆP trong định hướng
								hoạt động của Tập đoàn.
							</p> */}
							{/* <h3>Why Choose Us?</h3>
							<div className='list-style'>
								<div className='col-lg-6 col-sm-6 col-xs-12'>
									<ul>
										{props.data
											? props.data.Why.map((d, i) => (
													<li key={`${d}-${i}`}>{d}</li>
											  ))
											: "loading"}
									</ul>
								</div>
								<div className='col-lg-6 col-sm-6 col-xs-12'>
									<ul>
										{props.data
											? props.data.Why2.map((d, i) => (
													<li key={`${d}-${i}`}> {d}</li>
											  ))
											: "loading"}
									</ul>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
