import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "../ProjectSearch/SearchedProject.css";

export const Utilities = (props) => {
	return (
		<div id='team' className='text-center'>
			<div className='container'>
				<div className='col-md-8 col-md-offset-2 section-title'>
					<h2>Tiện ích Husthomes Symphony</h2>
					{/* <p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
						dapibus leonec.
					</p> */}
				</div>

				<div id='row'>
					{props.data
						? props.data.map((d, i) => (
								<div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 '>
									<div
										className='thumbnail searchedProjectThumbnail'
										style={{
											width: "100%",
											backgroundColor: "#fff5e3",
											padding: "0 0 20px",
										}}>
										<a href='/detail-project'>
											<img
												src={d.img}
												alt='...'
												className='team-img'
												style={{
													width: "100%",
													height: "150px",
													objectFit: "cover",
												}}
											/>
										</a>
										<div className='caption'>
											<h4>
												<a
													className='titleSearchedProject'
													href='/detail-project'>
													{d.name}
												</a>
											</h4>
										</div>
									</div>
								</div>
						  ))
						: "loading"}
				</div>
			</div>
		</div>
	);
};
