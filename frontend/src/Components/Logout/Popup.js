import React from "react";
import "./Popup.css";
//src: https://www.youtube.com/watch?v=i8fAO_zyFAM&t=618s
function Popups(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {props.children}
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          {" "}
          Cancel{" "}
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popups;
