export const Position = (props) => {
	return (
		<div id='about' style={{ backgroundColor: "#fff" }}>
			<div className='container'>
				<div className='row'>
					<div className='col-xs-12 col-md-6'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6912848626876!2d105.84339435118598!3d21.005008593894413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad5569f4fbf1%3A0x5bf30cadcd91e2c3!2zxJDhuqBJIEjhu4xDIELDgUNIIEtIT0EgQ-G7lE5HIFRS4bqmTiDEkOG6oEkgTkdIxKhB!5e0!3m2!1sen!2s!4v1640023520716!5m2!1sen!2s'
							width='100%'
							height='300'
							style={{
								border: 0,
								boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
								borderRadius: "5px",
							}}
							allowfullscreen=''
							loading='lazy'></iframe>
					</div>
					<div className='col-xs-12 col-md-6'>
						<div className='about-text'>
							<h2>vị trí tiềm năng </h2>
							<p>
								HustHome Symphony tọa lạc tại giao điểm giữa 2 tuyến đường Chu
								Huy Mân và Hội Xá, thuộc phường Phúc Lợi, quận Long Biên, Hà
								Nội. Sở hữu hạ tầng giao thông phát triển, tiếp giáp nhiều tuyến
								đường rộng lớn như Chu Huy Mân, Đoàn Khuê, Nguyễn Văn Linh, Ngô
								Gia Tự… cư dân sinh sống và làm việc tại đây có thể dễ dàng kết
								nối tới trung tâm thành phố cũng như các tỉnh thành lân cận như
								Bắc Ninh, Bắc Giang, Hưng Yên, Hải Dương, Hải Phòng…
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
