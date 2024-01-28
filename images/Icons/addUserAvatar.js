import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const AddUserAvatar = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={37}
    fill="none"
    {...props}
  >
    <Circle
      cx={18.5}
      cy={18.5}
      r={12}
      fill="#fff"
      stroke="#FF6C00"
      transform="rotate(-45 18.5 18.5)"
    />
    <Path
      fill="#FF6C00"
      fillRule="evenodd"
      d="m14.257 13.55-.707.707 4.243 4.243-4.243 4.243.707.707 4.243-4.243 4.243 4.243.707-.707-4.243-4.243 4.243-4.243-.707-.707-4.243 4.243-4.243-4.243Z"
      clipRule="evenodd"
      transform="rotate(45 18.5 18.5)"
    />
  </Svg>
);
export default AddUserAvatar;
