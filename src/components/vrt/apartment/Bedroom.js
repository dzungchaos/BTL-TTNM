
import {useWindowDimensions} from "../../../utils"
function Bedroom(props) {
  // return <h1>Hello, Bedroom {props.name}</h1>;
  const { height: h, width: w} = useWindowDimensions();

     const styles = {
	  width: w,
	  height: h 
    };

  return <iframe style={styles}  frameBorder="0"
src="https://momento360.com/e/u/c0916285d93d4e73b164d1209cf06455?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"			
	></iframe>
}

export default Bedroom;


