import {useWindowDimensions} from "../../../utils"

function Kitchen(props) {

  const { height: h, width: w} = useWindowDimensions();

     const styles = {
	  width: w,
	  height: h 
    };

  // return <h1>Hello, Kitchen {props.name}</h1>;
  return <iframe style={styles}  frameBorder="0"
				src="https://momento360.com/e/u/6a9e13e7cddd48d7af8d8d329609e6e3?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"
			></iframe>
}

export default Kitchen;

