import React from "react";
import SearchBox from "./components/searchBox";
import Icons from "./components/icons";

const App = () => {
  return (
    <div
      className="flexbox-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        paddingBottom: 40,
      }}
    >
      <div
        className="flexbox-container"
        style={{
          border: "1px solid black",
          paddingTop: 30,
          paddingBottom: 10,
          paddingLeft: 40,
          paddingRight: 40,
          marginTop: 50,
          marginBottom: 20,
          backgroundColor: "#d9f2d9",
        }}
      >
        <h1
          className="text-center"
          style={{ fontFamily: "Montserrat", fontWeight: 900 }}
        >
          Search for a Domain or IP Address
        </h1>
        <SearchBox />
      </div>
      <Icons />
    </div>
  );
};

export default App;
