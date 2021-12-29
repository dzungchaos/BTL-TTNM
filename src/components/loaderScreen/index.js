import React from "react";
import ReactLoading from "react-loading";
import DoubbleBubble from "./DoubleBubble/DoubleBubble";
import { Article, list, Section } from "./generic";
import "./index.css";

const LoaderScreen = (props) => {
	console.log(props);

	return (
		// <Section className='loader-component'>
		// 	{list.map((l) => (
		// 		<Article key={l.prop}>
		// 			<ReactLoading type={l.prop} color='#fff' />
		// 		</Article>
		// 	))}
		// </Section>
		<div style={{ display: props.display }}>
			<DoubbleBubble customText={"Loading"} />

			<div style={{ background: "#32323C", height: "100vh" }}></div>
		</div>
	);
};

export default LoaderScreen;
