import {useWindowDimensions} from "../../../utils"

function LivingRoom(props) {


  const { height: h, width: w} = useWindowDimensions();

     const styles = {
	  width: w,
	  height: h 
    };

  return <iframe style={styles}  frameBorder="0"
				src="https://momento360.com/e/u/b38b5296c8264f8f915d14f57a27441a?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"
			></iframe>
}

export default LivingRoom;
