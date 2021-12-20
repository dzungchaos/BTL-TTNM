export const Header = (props) => {
	return (
		<header id='header'>
			<div
				className='intro'
				style={{
					backgroundImage:
						"url(" + "https://wallpaperaccess.com/full/6348113.jpg" + ")",
					backgroundPosition: "top center",
				}}>
				<div className='overlay'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-8 col-md-offset-2 intro-text'>
								<h1>
									Miền đất lành <span className='break-line-title'></span> chấp
									cánh tương lai
									<span></span>
								</h1>
								<p>{props.data ? props.data.searching : "Loading"}</p>
								{/* <a
									href='#features'
									className='btn btn-custom btn-lg page-scroll'>
									KHÁM PHÁ NGAY
								</a>{" "} */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
