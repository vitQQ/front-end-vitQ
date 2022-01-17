import React from "react";
import ReactLoading from "react-loading"
import "./loading.css"

export default function Loading() {
  return (
    <div className="loading">
      <ReactLoading type="balls" color="#296DCD" />
      <div className="fw-bolder">Loading</div>
    </div>
  );
}
