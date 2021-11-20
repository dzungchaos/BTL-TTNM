import {useWindowDimensions} from "../../utils"


function Overview(props) {



  const { height: h, width: w} = useWindowDimensions();

     const styles = {
	  width: w,
	  height: h 
    };


  return <iframe style={styles}  frameBorder="0"
				src="https://momento360.com/e/u/8ff2cbd17f4b403fae68eead5a861766?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"
			></iframe>
}

export default Overview;
