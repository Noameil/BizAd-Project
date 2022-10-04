import React, { useState } from "react";
import "./AddService.css";

export default function AddService(props) {
  const [serviceName, setServiceName] = useState(
    "WhatsApp Group Notifications"
  );
  const [status, setStatus] = useState("Active");

  const handleBtnClick = (e) => {
    e.preventDefault();
    props.addService({
      serviceName: serviceName,
      status: status,
    });
  };

  return (
    <>
      <form className="d-flex align-items-center gap-2 mt-5 px-5 mx-5">
        <label>Service Name:</label>
        <select
          className="form-select"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
        >
          <option value="WhatsApp Group Notification">
            WhatsApp Group Notification
          </option>
          <option value="Mailing List">Mailing List</option>
        </select>
        <label>Status:</label>
        <select
          className="form-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}>
          <option value="Active">Active</option>
          <option value="Disabled">Disabled</option>
        </select>
        <button onClick={(e) => handleBtnClick(e)} className="btn btn-outline-success" type="submit">
          Add Service
        </button>
      </form>
    </>
  );
}
