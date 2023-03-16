import React from "react";
import { useState } from "react";
import { fetchWhoIsData } from "../api";

// need a text input field and a submit button
// text input, when it changes, needs to save its data to a local state (using setState())
// The submit button will grab the data from the text input
// Add own instructions and stuff

function SearchBox() {
  const [input, setInput] = useState("");
  const [data, setData] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fetchedData = await fetchWhoIsData(input);
    setData(fetchedData);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {!data && (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: 20,
            paddingBottom: 20,
            alignItems: "center",
          }}
        >
          <div class="mb-3">
            <label
              for="domainIpInput"
              className="form-label"
              style={{ fontFamily: "Montserrat" }}
            >
              Enter Domain or IP Address:
            </label>
            <input
              type="text"
              className="form-control"
              id="domainIpInput"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <input
            className="btn btn-dark "
            type="submit"
            style={{ width: 150, fontFamily: "Montserrat" }}
          />
        </form>
      )}
      {data && (
        <div
          class="card"
          style={{
            width: "80%",
            marginTop: "40px",
            marginLeft: "80px",
            marginRight: "80px",
            marginBottom: "40px",
            fontFamily: "Montserrat",
            backgroundColor: "#FFFACD",
          }}
        >
          <div
            class="card-header"
            style={{
              paddingTop: "5px",
              paddingBottom: "5px",
              marginBottom: "5px",
            }}
          >
            <h4>{`${input}:`}</h4>
          </div>
          <div class="card-body">
            <pre>{`${JSON.stringify(data, undefined, 4)}`}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBox;
