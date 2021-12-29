import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";

export const News = (props) => {
	return (
		<div id='team' className='text-center'>
			<div className='container'>
				<div className='col-md-8 col-md-offset-2 section-title'>
					<h2>TIN TỨC MỚI NHẤT</h2>
					<p>
						Chúng tôi cung cấp thông tin nhanh và chính xác nhất, mang đến cho
						khách hàng những giá trị kiến thức chính xác
					</p>
				</div>

				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					slidesPerView={3}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					navigation
					spaceBetween={30}
					freeMode={true}
					pagination={{
						clickable: true,
					}}
					className='mySwiper'
					style={{ width: "100%" }}>
					{props.data
						? props.data.map((d, i) => (
								<SwiperSlide>
									<div key={`${d.name}-${i}`} className=''>
										<div className='thumbnail'>
											<img
												style={{
													width: "500px",
													objectFit: "cover",
													backgroundPosition: "center",
												}}
												src={d.img}
												alt='...'
												className='team-img'
											/>
											<div className='caption'>
												<h4>{d.name}</h4>
												<p>{d.job}</p>
											</div>
										</div>
									</div>
								</SwiperSlide>
						  ))
						: "loading"}
				</Swiper>
			</div>
		</div>
	);
};
