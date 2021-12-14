
import {useWindowDimensions} from "../../../utils"
function Bathroom(props) {
  // return <h1>Hello, Bathroom {props.name}</h1>;


  const { height: h, width: w} = useWindowDimensions();

     const styles = {
	  width: w,
	  height: h 
    };

  // return <h1>Hello, Kitchen {props.name}</h1>;
  return <iframe style={styles}  frameBorder="0"
		src="https://momento360.com/e/u/6b22a5a51d85458783be338eee1e50e3?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"		
	></iframe>
}

export default Bathroom;
