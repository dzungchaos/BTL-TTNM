import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";

export const Projects = (props) => {
	return (
		<div id='team' className='text-center'>
			<div className='container'>
				<div className='col-md-8 col-md-offset-2 section-title'>
					<h2>DỰ ÁN NỔI BẬT</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
						dapibus leonec.
					</p>
				</div>

				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					slidesPerView={4}
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
													height: "280px",
													width: "240px",
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
