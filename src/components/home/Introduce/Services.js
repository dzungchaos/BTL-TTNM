export const Services = (props) => {
	return (
		<div
			id='services'
			className='text-center'
			style={{ backgroundColor: "#f6f6f6" }}>
			<div className='container'>
				<div className='section-title'>
					<h2>ĐỐI TÁC KINH DOANH</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
						dapibus leonec.
					</p>
				</div>
				<div className='row'>
					{props.data
						? props.data.map((d, i) => (
								<div key={`${d.name}-${i}`} className='col-md-4'>
									{" "}
									<i className={d.icon}></i>
									<div className='service-desc'>
										<h3>{d.name}</h3>
										<p>{d.text}</p>
									</div>
								</div>
						  ))
						: "loading"}
				</div>
			</div>
		</div>
	);
};
