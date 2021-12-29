import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const placeOptions = [
	{ value: "HN", label: "Hà Nội" },
	{ value: "HCM", label: "TP Hồ Chí Minh" },
	{ value: "ĐN", label: "Đà Nẵng" },
	{ value: "HP", label: "Hải Phòng" },
	{ value: "BD", label: "Bình Dương" },
];

const bedroomOptions = [
	{ value: "1", label: "1 phòng ngủ" },
	{ value: "2", label: "2 phòng ngủ" },
	{ value: "3", label: "3 phòng ngủ" },
	{ value: "4", label: "4 phòng ngủ" },
	{ value: "5", label: "5 phòng ngủ" },
];

const priceOptions = [
	{ value: "1", label: "dưới 1.5 tỉ" },
	{ value: "2", label: "từ 1.5 tỉ đến 2.5 tỉ" },
	{ value: "3", label: "từ 2.5 tỉ đến 5 tỉ" },
	{ value: "4", label: "lớn hơn 5 tỉ" },
];

const project = [
	{ name: "Hust Homes Ocean Park" },
	{ name: "Hust Homes Smart City" },
	{ name: "Hust Home Dream City" },
	{ name: "Hust Home Grand Park" },
	{ name: "Hust Home Grand Park" },
	{ name: "Hust Home Dream City" },
];

export const SearchBar = (props) => {
	const [valueInput, setValueInput] = useState("");
	const [visible, setVisible] = useState("none");

	const handleInputChange = (e) => {
		if (e.target.value.length > 0) {
			setTimeout(() => {
				setVisible("block");
			}, 500);
		} else {
			setVisible("none");
		}

		setValueInput(e.target.value);
	};

	const handleClick = (val) => {
		setValueInput(val.target.innerHTML);
		setVisible("none");
	};

	return (
		<div id='search-bar'>
			<div className='row'>
				<div className='col-sm-4'>
					<h4>Nhập tên dự án</h4>
					<input
						className='form-search-input'
						placeholder='Nhập tên dự án'
						value={valueInput}
						onChange={(e) => handleInputChange(e)}
					/>
					<ul style={{ display: visible }} className='result-search-input'>
						{project.map((project, index) => (
							<li onClick={handleClick} key={index}>
								{project.name}
							</li>
						))}
					</ul>
				</div>
				<div className='col-sm-2'>
					<h4>Địa điểm</h4>
					<Select placeholder={"Chọn địa điểm"} options={placeOptions} />
				</div>
				<div className='col-sm-2'>
					<h4>Số phòng ngủ</h4>
					<Select placeholder={"Chọn số phòng"} options={bedroomOptions} />
				</div>
				<div className='col-sm-2'>
					<h4>Khoảng chi phí</h4>
					<Select placeholder={"Chọn"} options={priceOptions} />
				</div>
				<div className='col-sm-2' style={{ textAlign: "center" }}>
					<Link
						to='/search'
						style={{
							borderRadius: "5px",
							padding: "22px 34px",
						}}
						className='btn btn-custom btn-lg page-scroll'>
						Tìm kiếm
					</Link>
				</div>
			</div>
		</div>
	);
};
