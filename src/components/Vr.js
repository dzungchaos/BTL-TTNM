// https://www.youtube.com/watch?v=5lrLlcoRFKI



import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}



export function Vr(props) {
//   return <h1>Hello, {props.name}</h1>;


  const { height: h, width: w} = useWindowDimensions();

     const styles = {
	  width: w,
	  height: h 
    };
	return <html>
		<head>
			<title>Virtual tour</title>
		</head>	
		<body>
			<div class="img-box"></div>	
			<iframe style={styles}  frameBorder="0"
				src="https://momento360.com/e/u/8ff2cbd17f4b403fae68eead5a861766?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"
			></iframe>
		</body>
	</html>
}




export const Component = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div>
      width: {width} ~ height: {height}
    </div>
  );
}
