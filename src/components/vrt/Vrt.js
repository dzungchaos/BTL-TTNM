// https://www.youtube.com/watch?v=5lrLlcoRFKI

import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Chat from "./Chat";

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
    <div class="VRT">
		<Chat></Chat>
      <Apartment></Apartment>
      <Link style={{left:"38.5%"}} class="float" to="overview">OVERVIEW</Link>
	  <Link style={{left:"61.5%"}} class="float" to="map">MAP</Link>
      <Outlet />
    </div>
  );
}

const Apartment = (props) => {
  return (
    <ul class="float apartment">
      <li style={{background: "none"}}>
        <a >APARTMENT</a>
        <ul>
          <li>
            <a href="/vrt/apartment/living-room">LIVING ROOM</a>{" "}
          </li>
          <li>
            <a href="/vrt/apartment/kitchen">KITCHEN</a>
          </li>
          <li>
            <a href="/vrt/apartment/bedroom">BEDROOM</a>
          </li>
          <li>
            <a href="/vrt/apartment/bathroom">BATHROOM</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};