import React from "react";
import ReactLoading from "react-loading"
import "./loading.css"

export default function Loading({post}) {
  return (
    <div className="loading" style={ post ? {height: "auto"} : {height: "100vh"}}>
      <ReactLoading type="balls" color="#296DCD" />
      <div className="fw-bolder">Loading</div>
    </div>
  );
}
