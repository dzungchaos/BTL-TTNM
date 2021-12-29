import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = (props) => {
	return (
		<nav id='menu' className='navbar navbar-default navbar-fixed-top'>
			<div className='container'>
				<div className='navbar-header'>
					<button
						type='button'
						className='navbar-toggle collapsed'
						data-toggle='collapse'
						data-target='#bs-example-navbar-collapse-1'>
						<span className='sr-only'>Toggle navigation</span>
						<span className='icon-bar'></span>
						<span className='icon-bar'></span>
						<span className='icon-bar'></span>
					</button>
					<Link
						style={{ marginTop: "10px" }}
						className='navbar-brand page-scroll'
						to='/'>
						Hust Homes
					</Link>
				</div>

				<div
					className='collapse navbar-collapse'
					id='bs-example-navbar-collapse-1'>
					<ul className='nav navbar-nav navbar-right'>
						<li>
							<Link to='/' className='page-scroll'>
								TRANG CHỦ
							</Link>
						</li>
						<li>
							<Link to='/introduce' className='page-scroll'>
								GIỚI THIỆU
							</Link>
						</li>
						<li className='main-menu'>
							<a style={{ cursor: "pointer" }} className='page-scroll'>
								GIAO DỊCH
							</a>

							{/* sub menu */}
							<ul class='sub-menu'>
								<li className='sub-item '>
									<Link to='/transaction/buy' className='page-scroll'>
										KÝ GỬI CĂN HỘ
									</Link>
								</li>
								{/* <li className='sub-item'>
									<Link to='/transaction/sale' className='page-scroll'>
										BÁN SẢN PHẨM
									</Link>
								</li>

								<li className='sub-item'>
									<Link to='/transaction/rent' className='page-scroll'>
										CHO THUÊ
									</Link>
								</li> */}
							</ul>
						</li>

						<li>
							<Link to='/project' className='page-scroll'>
								DỰ ÁN
							</Link>
						</li>

						<li className='main-menu'>
							<Link
								tyle={{ cursor: "pointer" }}
								to='/news'
								className='page-scroll'>
								TIN TỨC
							</Link>
							{/* sub menu */}
							{/* <ul class='sub-menu'>
								<li className='sub-item '>
									<Link to='/news/news1' className='page-scroll'>
										TIN TỨC 1
									</Link>
								</li>
								<li className='sub-item'>
									<Link to='/news/news2' className='page-scroll'>
										TIN TỨC 2
									</Link>
								</li>

								<li className='sub-item'>
									<Link to='/news/news3' className='page-scroll'>
										TIN TỨC 3
									</Link>
								</li>
							</ul> */}
						</li>

						<li>
							<Link to='/contact' className='page-scroll'>
								HỖ TRỢ - TƯ VẤN
							</Link>
						</li>
						{/* <li>
							<a href='#contact' className='page-scroll'>
								Contact
							</a>
						</li> */}
					</ul>
				</div>
			</div>
		</nav>
	);
};
