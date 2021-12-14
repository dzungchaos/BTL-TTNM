
import {useWindowDimensions} from "../../utils"
function Map(props) {
  // return <h1>Hello, Map {props.name}</h1>;
  const { height: h, width: w} = useWindowDimensions();

     const styles = {
	  width: w,
	  height: h 
    };
	return <iframe style={styles} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6408192903277!2d105.8409473157536!3d21.007030293893777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76ccab6dd7%3A0x55e92a5b07a97d03!2sHanoi%20University%20of%20Science%20%26%20Technology%20(HUST)!5e0!3m2!1sen!2s!4v1639586675303!5m2!1sen!2s" allowfullscreen="" loading="lazy"></iframe>
}

export default Map;
