import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return (
    <div
      class="flexbox-container"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20",
        marginBottom: "40",
      }}
    >
      <FontAwesomeIcon
        icon={faFaceSmile}
        spin
        className="fa-2xl"
        style={{ marginLeft: "20", marginRight: "20" }}
      />
      <FontAwesomeIcon
        icon={faThumbsUp}
        className="fa-2xl"
        style={{ marginLeft: "20", marginRight: "20" }}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="fa-2xl"
        style={{ marginLeft: "20", marginRight: "20" }}
      />
      <FontAwesomeIcon
        icon={faFaceSmile}
        spin
        className="fa-2xl"
        style={{ marginLeft: "20", marginRight: "20" }}
      />
      <FontAwesomeIcon
        icon={faThumbsUp}
        className="fa-2xl"
        style={{ marginLeft: "20", marginRight: "20" }}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="fa-2xl"
        style={{ marginLeft: "20", marginRight: "20" }}
      />
      <FontAwesomeIcon
        icon={faFaceSmile}
        spin
        className="fa-2xl"
        style={{ marginLeft: "20", marginRight: "20" }}
      />
    </div>
  );
};

export default Icons;
