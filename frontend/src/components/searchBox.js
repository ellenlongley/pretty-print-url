import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { fetchWhoIsData } from "../api";

// need a text input field and a submit button
// text input, when it changes, needs to save its data to a local state (using setState())
// The submit button will grab the data from the text input
// Add own instructions and stuff

function SearchBox() {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fetchedData = await fetchWhoIsData(input);
    setData(fetchedData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a domain or IP address:
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <input className="btn btn-primary mr-2 mt-2" type="submit" />
      </form>
      {data && <div>{JSON.stringify(data, undefined, 4)}</div>}
    </>
  );
}

export default SearchBox;
