import { Image } from "../Image";

export const ImagesCompany = (props) => {
	return (
		<div id='portfolio' className='text-center'>
			<div className='container'>
				<div className='section-title'>
					<h2>HÌNH ẢNH CÔNG TY</h2>
					<p>
						Những hình ảnh nổi bật về môi trường và khung cảnh những khu đô thị
					</p>
				</div>
				<div className='row'>
					<div className='portfolio-items'>
						{props.data
							? props.data.map((d, i) => (
									<div
										key={`${d.title}-${i}`}
										className='col-sm-6 col-md-4 col-lg-4'>
										<Image
											title={d.title}
											largeImage={d.largeImage}
											smallImage={d.smallImage}
										/>
									</div>
							  ))
							: "Loading..."}
					</div>
				</div>
			</div>
		</div>
	);
};
