import React from "react";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/swiper.min.css";
import "./SearchedProject.css";

export const SearchedProject = (props) => {
	return (
		<div id='team' className='text-center'>
			<div className='container'>
				{/* <div className='col-md-8 col-md-offset-2 section-title'>
					<h2>CÁC DỰ ÁN TÌM KIẾM</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
						dapibus leonec.
					</p>
				</div> */}

				<div id='row'>
					{props.data
						? props.data.map((d, i) => (
								<div
									key={`${d.name}-${i}`}
									className='col-md-4 col-sm-6 '
									style={{ marginBottom: "25px" }}>
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
													height: "250px",
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
											<p>{d.job}</p>
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
