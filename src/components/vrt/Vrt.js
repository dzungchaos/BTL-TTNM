// https://www.youtube.com/watch?v=5lrLlcoRFKI

import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export function Vrt(props) {
  //   return <h1>Hello, {props.name}</h1>;

  // const menuBottomStyles={

  // 	height: "10%",
  // position: "absolute",
  // width: "80%",
  // "margin-left": "10%", /** width: "80%" and "margin-left": "10%" centers the menu. */
  // "background-color": "",
  // "margin-top": "-10%"
  // };

  return (
    <div>
      <Link class="float" to="overview">OVERVIEW</Link>
 
      {/* Comment here 
	  <Apartment class="float"></Apartment>
	  <Link class="float" to="map">MAP</Link>
      <Link class="float" to="/vrt">VRT</Link>
      
	  */}
	  <Outlet />
    </div>
  );
}

const Apartment = (props) => {
  return (
    <ul>
      <li>APARTMENT</li>

      {/* Comment here 
  <li><a href="/vrt/apartment/living-room">
	Living room
	</a></li>
  <li><a href="/vrt/apartment/kitchen">
Kitchen	
	</a></li>
  <li><a href="/vrt/apartment/bedroom">
Bedroom	
	
	</a></li>
  <li><a href="/vrt/apartment/bathroom">

Bathroom
	</a></li>
*/}
    </ul>
  );
};