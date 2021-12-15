export const Vision = (props) => {
	return (
		<div id='about' style={{ backgroundColor: "#fff" }}>
			<div className='container'>
				<div className='row'>
					<div className='col-xs-12 col-md-6'>
						{" "}
						<img
							src='https://oceanpark.vietstarland.vn/wp-content/uploads/2021/10/biet-thu-vinhomes-ocean-park-vietstarland-16.jpg'
							className='img-responsive'
							alt=''
						/>{" "}
					</div>
					<div className='col-xs-12 col-md-6'>
						<div className='about-text'>
							<h2>TẦM NHÌN - SỨ MỆNH</h2>
							<p>{props.data ? props.data.paragraph : "loading..."}</p>
							<h3>Why Choose Us?</h3>
							<div className='list-style'>
								<div className='col-lg-6 col-sm-6 col-xs-12'>
									<ul>
										{props.data
											? props.data.Why2.map((d, i) => (
													<li key={`${d}-${i}`}> {d}</li>
											  ))
											: "loading"}
									</ul>
								</div>
							</div>
							<div className='col-lg-6 col-sm-6 col-xs-12'>
								<ul>
									{props.data
										? props.data.Why.map((d, i) => (
												<li key={`${d}-${i}`}>{d}</li>
										  ))
										: "loading"}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
