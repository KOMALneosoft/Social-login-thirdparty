//import "./App.css";
import React from "react";
import JSONDATA from "./FAKE.json";
import { useState } from "react";

export default function SApp() {
  const [search, setSearch] = useState("");
  return (
    <>
      <br />
      <input
        className="p-3 mt-3"
        type="text"
        style={{ marginLeft: "35px" }}
        placeholder="search....."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (search == "") {
          return val;
        } else if (val.ename.toLowerCase().includes(search.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div style={{ marginLeft: "30px" }}>
            <h4>{val.ename}</h4>
            <p>{val.id}</p>
            <p>{val.gender}</p>
            <p>{val.city}</p>
          </div>
        );
      })}
    </>
  );
}
