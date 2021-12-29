export const Prizes = (props) => {
	return (
		<div id='features' className='text-center'>
			<div className='container'>
				<div className='col-md-10 col-md-offset-1 section-title'>
					<h2>GIẢI THƯỞNG</h2>
					<p>
						Với những đóng góp, nỗ lực cống hiến không ngừng vì sự phát triển
						bền vững của xã hội, trong quá trình hơn 34 năm hình thành và phát
						triển, Husthome đã ghi dấu ấn với các đối tác, khách hàng bằng nhiều
						thành tích xuất sắc
					</p>
				</div>
				<div className='row'>
					{props.data
						? props.data.map((d, i) => (
								<div key={`${d.title}-${i}`} className='col-xs-4 col-md-4'>
									<img
										src={d.img}
										alt=''
										style={{
											width: "70%",
											height: "200px",
											objectFit: "cover",
										}}
									/>
									<h3>{d.title}</h3>
									<p>{d.text}</p>
								</div>
						  ))
						: "Loading..."}
				</div>
			</div>
		</div>
	);
};
