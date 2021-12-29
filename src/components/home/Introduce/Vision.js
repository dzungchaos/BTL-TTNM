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
							style={{
								borderRadius: "10px",
								boxShadow: "rgb(0 0 0 / 15%) 0px 0.5rem 1rem",
							}}
						/>{" "}
					</div>
					<div className='col-xs-12 col-md-6'>
						<div className='about-text'>
							<h2>TẦM NHÌN - SỨ MỆNH</h2>
							{/* <p>{props.data ? props.data.paragraph : "loading..."}</p> */}
							<p>
								Khát vọng vươn lên trở thành Tập đoàn đầu tư và phát triển bất
								động sản chuyên nghiệp hàng đầu khu vực, Tập đoàn HustHome phát
								huy sáng tạo các giá trị truyền thống, vươn tầm quốc tế, tạo lập
								các giá trị thịnh vượng và bền vững cho cộng đồng.
							</p>
							<p>
								Với phương châm hợp tác, song hành với các đối tác chiến lược
								kết hợp với sự chuyên nghiệp, hiệu quả, sáng tạo của đội ngũ
								nhân sự, HustHone cam kết đem lại giá trị gia tăng cho khách
								hàng và kiến tạo những giá trị bền vững, nhân văn cho xã hội.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
